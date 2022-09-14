from typing import Optional
from pydantic import BaseModel, Json, ValidationError

from .config import Config

class EmailVerifyToken(BaseModel):
    email_address: str
    # email_token: str
    # token_type: str

class EmailVerifyToken(BaseModel):
    email_address: str
    # email_token: str
    # token_type: str

class Token(BaseModel):
    access_token: str
    token_type: str

class TokenData(BaseModel):
    username: Optional[str] = None

class UserBase(BaseModel):
    username: str
    email: str

class UserCreate(UserBase):
    username: str
    password: str
    # email_token: str
    # email_token: str

class User(UserBase):
    id: int
    is_active: bool

    class Config:
        orm_mode = True

class UserInDB(User):
    hashed_password: str

class CanceledServiceData(BaseModel):
    gtfs_trip_id: str
    trip_route: str
    stop_description_first: str
    stop_description_last: str
    trip_time_start: str
    trip_time_end: str
    trip_direction: str

class StopTimes(BaseModel):
    trip_id: str
    arrival_time: str
    departure_time: str
    stop_id: int
    stop_sequence: int
    stop_headsign: str
    pickup_type: int
    drop_off_type: int
    trip_id_event: str
    route_code: int
    destination_code: str
    timepoint: int
    bay_num: int
    id: int

class Stops(BaseModel):
    stop_id: int
    stop_code: int
    stop_name: str
    stop_desc: str
    stop_lat: float
    stop_lon: float
    stop_url: str
    location_type: str
    parent_station: str
    tpis_name: str

class Trips(BaseModel):
    route_id: int
    service_id: str
    trip_id: str
    trip_headsign: str
    direction_id: int
    block_id: int
    shape_id: str
    trip_id_event: str

class Routes(BaseModel):
    route_id: int
    route_short_name: str
    route_long_name: str
    route_desc: str
    route_type: int

class Shapes(BaseModel):
    shape_id: str
    shape_pt_lat: float
    shape_pt_lon: float
    shape_pt_sequence: int

class TripUpdates(BaseModel):
    trip_id: str
    route_id: str
    start_time: str
    start_date: str
    schedule_relationship: str
    direction_id: int
    timestamp: int
    # StopTimeUpdates = Json

class StopTimeUpdates(BaseModel):
    stop_sequence: int
    stop_id: str
    schedule_relationship: str
    # oid: int
    # trip_update_id: int

class VehiclePositions(BaseModel):
    current_stop_sequence: int
    current_status: str
    timestamp: int
    stop_id = str
    trip_id = str
    trip_start_date = str
    trip_route_id = str

    position_latitude = float
    position_longitude = float
    position_bearing = float
    position_speed = float

    vehicle_id = str
    vehicle_label = str
    id = int
    timestamp = int