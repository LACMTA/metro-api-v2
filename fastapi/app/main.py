# import data modules
from distutils.command.config import config
import http
import json
import requests
import csv
import os

import pytz

from typing import Dict, List, Optional

from datetime import timedelta, date, datetime

from fastapi import FastAPI, Request, Response, Depends, HTTPException, status
# from fastapi import FastAPI, Request, Response, Depends, HTTPException, status
from fastapi.encoders import jsonable_encoder
from fastapi.responses import JSONResponse, RedirectResponse, HTMLResponse,PlainTextResponse
from fastapi.staticfiles import StaticFiles
from fastapi.templating import Jinja2Templates

from sqlalchemy import false
from sqlalchemy.orm import aliased

from pydantic import BaseModel, Json, ValidationError

from starlette.middleware.cors import CORSMiddleware

# from fastapi_cache import FastAPICache
# from fastapi_cache.backends.redis import RedisBackend
# from fastapi_cache.decorator import cache
from starlette.requests import Request
from starlette.responses import Response

# from redis import asyncio as aioredis
from enum import Enum

# for OAuth2
from fastapi.security import OAuth2PasswordBearer,OAuth2PasswordRequestForm

# from app.models import *
# from app.security import *

from .utils.log_helper import *
from . import crud, models, security, schemas
from .database import Session, engine, session, get_db
from .config import Config
from pathlib import Path

from logzio.handler import LogzioHandler
import logging
import typing as t



class EndpointFilter(logging.Filter):
    def __init__(
        self,
        path: str,
        *args: t.Any,
        **kwargs: t.Any,
    ):
        super().__init__(*args, **kwargs)
        self._path = path

    def filter(self, record: logging.LogRecord) -> bool:
        return record.getMessage().find(self._path) == -1

uvicorn_logger = logging.getLogger("uvicorn.access")
uvicorn_logger.addFilter(EndpointFilter(path="/LACMTA/shapes/"))
uvicorn_logger.addFilter(EndpointFilter(path="/agencies/lametro/"))

UPDATE_INTERVAL = 300

TARGET_FILE = "CancelledTripsRT.json"
REMOTEPATH = '/nextbus/prod/'
PARENT_FOLDER = Path(__file__).parents[1]
TARGET_FOLDER = 'appdata'
TARGET_PATH = os.path.join(PARENT_FOLDER,TARGET_FOLDER)
TARGET_PATH_CALENDAR_JSON = os.path.join(TARGET_PATH,'calendar.json')
TARGET_PATH_CANCELED_JSON = os.path.join(TARGET_PATH,'CancelledTripsRT.json')
PATH_TO_CALENDAR_JSON = os.path.realpath(TARGET_PATH_CALENDAR_JSON)
PATH_TO_CANCELED_JSON = os.path.realpath(TARGET_PATH_CANCELED_JSON)

class AgencyIdEnum(str, Enum):
    LACMTA = "LACMTA"
    LACMTA_Rail = "LACMTA_Rail"
class GoPassGroupEnum(str, Enum):
    ID = "id"
    SCHOOL = "school"

class TripUpdatesFieldsEnum(str, Enum):
    trip_id = "trip_id"
    route_id = "route_id"
    stop_id = "stop_id"

class VehiclePositionsFieldsEnum(str, Enum):
    vehicle_id = "vehicle_id"
    trip_route_id = "trip_route_id"
    stop_id = "stop_id"

tags_metadata = [
    {"name": "Real-Time data", "description": "Includes GTFS-RT data for Metro Rail and Metro Bus."},
    {"name": "Static data", "description": "GTFS Static data, including routes, stops, and schedules."},
    {"name": "Other data", "description": "Other data on an as-needed basis."},
    {"name": "User Methods", "description": "Methods for user authentication and authorization."},
]

models.Base.metadata.create_all(bind=engine)

app = FastAPI(openapi_tags=tags_metadata,docs_url="/")
# db = connect(host='', port=0, timeout=None, source_address=None)

templates = Jinja2Templates(directory="app/frontend")
app.mount("/", StaticFiles(directory="app/frontend"))

# code from https://fastapi-restful.netlify.app/user-guide/repeated-tasks/

def csv_to_json(csvFilePath, jsonFilePath):
    jsonArray = []
    headers = []
    header_row = next(csvFilePath)
    for column in header_row:
        headers.append(column)  
    for row in csvFilePath: 
        #add this python dict to json array
        the_data = {header_row[0]:row[0],
                    header_row[1]:row[1],
                    header_row[2]:row[2]}
        jsonArray.append(the_data)
  
    #convert python jsonArray to JSON String and write to file
    with open(jsonFilePath, 'w', encoding='utf-8') as jsonf: 
        jsonString = json.dumps(jsonArray, indent=4)
        jsonf.write(jsonString)
          
csvFilePath = r'data.csv'
jsonFilePath = r'appdata/calendar_dates.json'


lacmta_gtfs_rt_url = "https://lacmta.github.io/lacmta-gtfs/data/calendar_dates.txt"
response = requests.get(lacmta_gtfs_rt_url)

cr = csv.reader(response.text.splitlines())
# csv_to_json(cr,jsonFilePath)

app = FastAPI()


oauth2_scheme = OAuth2PasswordBearer(tokenUrl="token")

#### Helper functions ####

def get_columns_from_schema(schema):
    if schema == 'trip_updates':
        return schemas.TripUpdates.__fields__.keys()
    if schema == 'vehicle_position_updates':
        return schemas.VehiclePositions.__fields__.keys()

def standardize_string(input_string):
    return input_string.lower().replace(" ", "")

####################
#  Begin Routes
####################

@app.get("/{agency_id}/trip_updates/all",tags=["Real-Time data"])
# @cache()
async def all_trip_updates_updates(agency_id: AgencyIdEnum, db: Session = Depends(get_db)):
    result = crud.get_all_gtfs_rt_trips(db,agency_id.value)
    return result

@app.get("/{agency_id}/trip_updates/{field_name}/{field_value}",tags=["Real-Time data"])
async def get_gtfs_rt_trip_updates_by_field_name(agency_id: AgencyIdEnum, field_name: TripUpdatesFieldsEnum, field_value=Optional[str], db: Session = Depends(get_db)):
# async def get_gtfs_rt_trip_updates_by_field_name(agency_id,field_name,field_value=Optional[str],db: Session = Depends(get_db)):
    result = ""
    if field_name in get_columns_from_schema('trip_updates') or field_name == 'stop_id':
        if field_value == 'list':
            result = crud.list_gtfs_rt_trips_by_field_name(db,field_name.value,agency_id.value)
            return result
        multiple_values = field_value.split(',')
        if len(multiple_values) > 1:
            result_array = []
            for value in multiple_values:
                temp_result = crud.get_gtfs_rt_trips_by_field_name(db,field_name.value,value,agency_id.value)
                if len(temp_result) == 0:
                    temp_result = { "message": "field_value '" + value + "' not found in field_name '" + field_name.value + "'" }
                result_array.append(temp_result)
            return result_array
        else:
            result = crud.get_gtfs_rt_trips_by_field_name(db,field_name.value,field_value,agency_id.value)
            if len(result) == 0:
                result = { "message": "field_value '" + field_value + "' not found in field_name '" + field_name.value + "'" }
                return result
            return result

@app.get("/{agency_id}/vehicle_positions/all",tags=["Real-Time data"])
async def all_vehicle_position_updates(agency_id: AgencyIdEnum, db: Session = Depends(get_db),geojson: bool = False):
    result = crud.get_all_gtfs_rt_vehicle_positions(db,agency_id.value,geojson)
    return result
# @app.get("/{agency_id}/vehicle_positions_no_cache/all",tags=["Real-Time data"])
# async def all_vehicle_position_updates(agency_id: AgencyIdEnum, db: Session = Depends(get_db)):
#     result = crud.get_all_gtfs_rt_vehicle_positions(db,agency_id.value,geojson=False)
#     return result

@app.get("/{agency_id}/vehicle_positions/{field_name}/{field_value}",tags=["Real-Time data"])
async def vehicle_position_updates(agency_id: AgencyIdEnum, field_name: VehiclePositionsFieldsEnum, geojson:bool=False,field_value=Optional[str], db: Session = Depends(get_db)):
    # result = crud.get_gtfs_rt_vehicle_positions_by_field_name(db,field_name,field_value,agency_id)
    print('field_value')
    print(field_value)
    result = ""
    if field_name in get_columns_from_schema('vehicle_position_updates'):
        if field_value == 'list':
            result = crud.list_gtfs_rt_vehicle_positions_by_field_name(db,field_name.value,agency_id.value)
            return result
        multiple_values = field_value.split(',')
        print('multiple_values')
        print(multiple_values)
        if len(multiple_values) > 1:
            result_array = []
            for value in multiple_values:
                temp_result = crud.get_gtfs_rt_vehicle_positions_by_field_name(db,field_name.value,value,geojson,agency_id.value)
                if len(temp_result) == 0:
                    temp_result = { "message": "field_value '" + value + "' not found in field_name '" + field_name.value + "'" }
                result_array.append(temp_result)
            return result_array
        else:
            result = crud.get_gtfs_rt_vehicle_positions_by_field_name(db,field_name.value,field_value,geojson,agency_id.value)
            if len(result) == 0:
                result = { "message": "field_value '" + field_value + "' not found in field_name '" + field_name.value + "'" }
                return result
            return result

@app.get("/canceled_service_summary",tags=["Real-Time data"])
async def get_canceled_trip_summary(db: Session = Depends(get_db)):
    result = crud.get_canceled_trips(db,'all')
    canceled_trips_summary = {}
    total_canceled_trips = 0
    canceled_trip_json = jsonable_encoder(result)
    if canceled_trip_json is None:
        return {"canceled_trips_summary": "",
                "total_canceled_trips": 0,
                "last_update": ""}
    else:
        for trip in canceled_trip_json:
            # route_number = standardize_string(trip["trp_route"])
            route_number = standardize_string(trip["trp_route"])
            if route_number:
                if route_number not in canceled_trips_summary:
                    canceled_trips_summary[route_number] = 1
                else:
                    canceled_trips_summary[route_number] += 1
                total_canceled_trips += 1
        update_time = canceled_trip_json[0]['LastUpdateDate']
        return {"canceled_trips_summary":canceled_trips_summary,
                "total_canceled_trips":total_canceled_trips,
                "last_updated":update_time}

@app.get("/{agency_id}/stop_times/{trip_id}",tags=["Real-Time data"])
async def get_gtfs_rt_stop_times_updates_by_trip_id(agency_id: AgencyIdEnum,trip_id, db: Session = Depends(get_db)):
    result = crud.get_gtfs_rt_stop_times_by_trip_id(db,trip_id,agency_id.value)
    return result


#### END GTFS-RT Routes ####


@app.get("/canceled_service/line/{line}",tags=["Real-Time data"])
async def get_canceled_trip(db: Session = Depends(get_db),line: str = None):
    result = crud.get_canceled_trips(db,line)
    json_compatible_item_data = jsonable_encoder(result)
    return JSONResponse(content=json_compatible_item_data)

@app.get("/canceled_service/all",tags=["Real-Time data"])
async def get_canceled_trip(db: Session = Depends(get_db)):
    result = crud.get_canceled_trips(db,'all')
    json_compatible_item_data = jsonable_encoder(result)
    return JSONResponse(content=json_compatible_item_data)



### Begin Static data endpoints ### :)
### GTFS Static data ###
@app.get("/calendar_dates",tags=["Static data"])
async def get_calendar_dates_from_db(db: Session = Depends(get_db)):
    result = crud.get_calendar_dates(db)
    calendar_dates = jsonable_encoder(result)
    return JSONResponse(content={"calendar_dates":calendar_dates})

@app.get("/{agency_id}/stop_times/route_code/{route_code}",tags=["Static data"])
async def get_stop_times_by_route_code_and_agency(agency_id: AgencyIdEnum,route_code, db: Session = Depends(get_db)):
    result = crud.get_stop_times_by_route_code(db,route_code,agency_id.value)
    return result

@app.get("/{agency_id}/stop_times/trip_id/{trip_id}",tags=["Static data"])
async def get_stop_times_by_trip_id_and_agency(agency_id: AgencyIdEnum,trip_id, db: Session = Depends(get_db)):
    result = crud.get_stop_times_by_trip_id(db,trip_id,agency_id.value)
    return result

@app.get("/{agency_id}/stops/{stop_id}",tags=["Static data"])
async def get_stops(agency_id: AgencyIdEnum,stop_id, db: Session = Depends(get_db)):
    result = crud.get_stops_id(db,stop_id,agency_id.value)
    return result

@app.get("/{agency_id}/trips/{trip_id}",tags=["Static data"])
async def get_bus_trips(agency_id: AgencyIdEnum,trip_id, db: Session = Depends(get_db)):
    result = crud.get_trips_data(db,trip_id,agency_id.value)
    return result

@app.get("/{agency_id}/shapes/{shape_id}",tags=["Static data"])
async def get_shapes(agency_id: AgencyIdEnum,shape_id, geojson: bool = False,db: Session = Depends(get_db)):
    if shape_id == "list":
        result = crud.get_trip_shapes_list(db,agency_id.value)
    else:
        result = crud.get_shape_by_id(db,geojson,shape_id,agency_id.value)
    return result

@app.get("/{agency_id}/trip_shapes/{shape_id}",tags=["Static data"])
async def get_trip_shapes(agency_id: AgencyIdEnum,shape_id, db: Session = Depends(get_db)):
    if shape_id == "all":
        result = crud.get_trip_shapes_all(db,agency_id.value)
    elif shape_id == "list":
        result = crud.get_trip_shapes_list(db,agency_id.value)
    else: 
        result = crud.get_trip_shape(db,shape_id,agency_id.value)
    return result

@app.get("/{agency_id}/calendar/{service_id}",tags=["Static data"])
async def get_calendar_list(agency_id: AgencyIdEnum,service_id, db: Session = Depends(get_db)):
    if service_id == "list":
        result = crud.get_calendar_list(db,agency_id.value)
    else:
        result = crud.get_gtfs_static_data(db,models.Calendar,'service_id',service_id,agency_id.value)
    return result


@app.get("/{agency_id}/calendar/{service_id}",tags=["Static data"])
async def get_calendar(agency_id: AgencyIdEnum,service_id, db: Session = Depends(get_db)):
    result = crud.get_calendar_data_by_id(db,models.Calendar,service_id,agency_id.value)
    return result


@app.get("/{agency_id}/routes/{route_id}",tags=["Static data"])
async def get_routes(agency_id: AgencyIdEnum,route_id, db: Session = Depends(get_db)):
    result = crud.get_routes_by_route_id(db,route_id,agency_id.value)
    return result

@app.get("/{agency_id}/agency/",tags=["Static data"])
async def get_agency(agency_id: AgencyIdEnum, db: Session = Depends(get_db)):
    result = crud.get_agency_data(db,models.Agency,agency_id.value)
    return result

#### END GTFS Static data endpoints ####
#### END Static data endpoints ####


#### Begin Other data endpoints ####

@app.get("/get_gopass_schools",tags=["Other data"])
async def get_gopass_schools(db: Session = Depends(get_db),show_missing: bool = False,combine_phone:bool = False,groupby_column:GoPassGroupEnum = None):
    if combine_phone == True:
        result = crud.get_gopass_schools_combined_phone(db,groupby_column.value)
        return result
    else:
        result = crud.get_gopass_schools(db,show_missing)
        json_compatible_item_data = jsonable_encoder(result)
    return JSONResponse(content=json_compatible_item_data)

@app.get("/time")
async def get_time():
    current_time = datetime.now()
    return {current_time}

# @app.get("/agencies/")
# async def root():
#     return {"Metro API Version": "2.1.9"}

# Frontend Routing

@app.get("/",response_class=HTMLResponse)
def index(request:Request):
    human_readable_default_update = None
    try:
        default_update = datetime.fromtimestamp(Config.API_LAST_UPDATE_TIME)
        default_update = default_update.astimezone(pytz.timezone("America/Los_Angeles"))
        human_readable_default_update = default_update.strftime('%Y-%m-%d %H:%M')
    except Exception as e:
        logger.exception(type(e).__name__ + ": " + str(e), exc_info=False)
    return templates.TemplateResponse("index.html", context= {"request": request,"api_version":Config.CURRENT_VERSION,"update_time":human_readable_default_update})

class LogFilter(logging.Filter):
    def filter(self, record):
        record.app = "api.metro.net"
        record.env = Config.RUNNING_ENV
        return True


# tokens

@app.get("/login",response_class=HTMLResponse,tags=["User Methods"])
def login(request:Request):
    return templates.TemplateResponse("login.html", context= {"request": request})


@app.get("/verify_email/{email_verification_token}", tags=["User Methods"])
async def verify_email_route(email_verification_token: str,db: Session = Depends(get_db)):
    
    if not crud.verify_email(email_verification_token,db):
        return False

    return "email verified"

@app.post("/token", response_model=schemas.Token,tags=["User Methods"])
async def login_for_access_token(form_data: OAuth2PasswordRequestForm = Depends(),db: Session = Depends(get_db)):
    user = crud.authenticate_user(form_data.username, form_data.password,db)
    if not user:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Incorrect username or password",
            headers={"WWW-Authenticate": "Bearer"},
        )
    access_token_expires = timedelta(minutes=Config.ACCESS_TOKEN_EXPIRE_MINUTES)
    access_token = crud.create_access_token(
        data={"sub": user.username}, expires_delta=access_token_expires
    )
    return {"access_token": access_token, "token_type": "bearer"}




# end tokens


@app.post("/users/", response_model=schemas.User,tags=["User Methods"])
def create_user(user: schemas.UserCreate, db: Session = Depends(get_db)):
    db_user = crud.get_user_by_email(db, email=user.email)
    if db_user:
        raise HTTPException(status_code=400, detail="Email already registered")
    return crud.create_user(db=db, user=user)

@app.get("/users/{username}", response_model=schemas.User,tags=["User Methods"])
def read_user(username: str, db: Session = Depends(get_db),token: str = Depends(oauth2_scheme)):
    db_user = crud.get_user(db, username=username)
    if db_user is None:
        raise HTTPException(status_code=404, detail="User not found")
    return db_user

@app.on_event("startup")
async def startup_event():
    print("Starting up...")
    uvicorn_access_logger = logging.getLogger("uvicorn.access")
    uvicorn_error_logger = logging.getLogger("uvicorn.error")
    logger = logging.getLogger("uvicorn.app")
    
    logzio_formatter = logging.Formatter("%(message)s")
    logzio_uvicorn_access_handler = LogzioHandler(Config.LOGZIO_TOKEN, 'uvicorn.access', 5, Config.LOGZIO_URL)
    logzio_uvicorn_access_handler.setLevel(logging.INFO)
    logzio_uvicorn_access_handler.setFormatter(logzio_formatter)

    logzio_uvicorn_error_handler = LogzioHandler(Config.LOGZIO_TOKEN, 'uvicorn.error', 5, Config.LOGZIO_URL)
    logzio_uvicorn_error_handler.setLevel(logging.INFO)
    logzio_uvicorn_error_handler.setFormatter(logzio_formatter)

    logzio_app_handler = LogzioHandler(Config.LOGZIO_TOKEN, 'fastapi.app', 5, Config.LOGZIO_URL)
    logzio_app_handler.setLevel(logging.INFO)
    logzio_app_handler.setFormatter(logzio_formatter)

    uvicorn_access_logger.addHandler(logzio_uvicorn_access_handler)
    uvicorn_error_logger.addHandler(logzio_uvicorn_error_handler)
    logger.addHandler(logzio_app_handler)

    uvicorn_access_logger.addFilter(LogFilter())
    uvicorn_error_logger.addFilter(LogFilter())
    logger.addFilter(LogFilter())

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
    expose_headers=["*"],
)

# @app.on_event("startup")
# async def startup_redis():
#     redis =  aioredis.from_url("redis://redis", encoding="utf8", decode_responses=True)
#     FastAPICache.init(RedisBackend(redis), prefix="fastapi-cache")
