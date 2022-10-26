from calendar import calendar
import pandas as pd
import json
from pathlib import Path
from sqlalchemy import create_engine
# from sqlalchemy.orm import Session,sessionmaker
from config import Config
from .database_connector import *
# from .utils.log_helper import *
# engine = create_engine(Config.DB_URI, echo=False,executemany_mode="values")
# Session = sessionmaker(autocommit=False, autoflush=False, bind=engine)
CALENDAR_DATES_URL_BUS = 'https://gitlab.com/LACMTA/gtfs_bus/-/raw/weekly-updated-service/calendar_dates.txt'
# CALENDAR_DATES_URL_RAIL = 'https://gitlab.com/LACMTA/gtfs_rail/-/raw/weekly-updated-service/calendar_dates.txt'
CALENDAR_DATES_URL_RAIL = 'https://gitlab.com/LACMTA/gtfs_rail/-/raw/master/calendar_dates.txt'
# session = Session()

list_of_gtfs_static_files = ["routes", "trips", "stops", "calendar", "shapes"]
# list_of_gtfs_static_files = ["routes", "trips", "stop_times", "stops", "calendar", "shapes"]

def update_calendar_dates():
    calendar_dates_df_bus = pd.read_csv(CALENDAR_DATES_URL_BUS)
    calendar_dates_df_bus['agency_id'] = 'LACMTA'
    calendar_dates_df_rail = pd.read_csv(CALENDAR_DATES_URL_RAIL)
    calendar_dates_df_rail['agency_id'] = 'LACMTA_Rail'
    calendar_dates_df = pd.concat([calendar_dates_df_bus, calendar_dates_df_rail])
    calendar_dates_df.to_sql('calendar_dates',engine,index=False,if_exists="replace",schema=Config.TARGET_DB_SCHEMA)

def update_gtfs_static_files():
    for file in list_of_gtfs_static_files:
        bus_file_path = "../../appdata/gtfs-static/gtfs_bus/" + file + '.txt'
        rail_file_path = "../../appdata/gtfs-static/gtfs_rail/" + file + '.txt'
        temp_df_bus = pd.read_csv(bus_file_path)
        temp_df_bus['agency_id'] = 'LACMTA'
        temp_df_rail = pd.read_csv(rail_file_path)
        temp_df_rail['agency_id'] = 'LACMTA_Rail'
        combined_temp_df = pd.concat([temp_df_bus, temp_df_rail])
        combined_temp_df.to_sql(file,engine,index=False,if_exists="replace",schema='metro_api_dev')
