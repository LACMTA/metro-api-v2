from sqlalchemy import Boolean, Column, ForeignKey, Integer, String, Float,PrimaryKeyConstraint,JSON
from geoalchemy2 import *

from .database import Base


class Agency(Base):
    __tablename__ = "agency"
    agency_id = Column(String, primary_key=True, index=True)
    agency_name = Column(String)
    agency_url = Column(String)
    agency_timezone = Column(String)
    agency_lang = Column(String)
    agency_phone = Column(String)

class Calendar(Base):
    __tablename__ = "calendar"
    service_id = Column(String, primary_key=True, index=True)
    monday = Column(Integer)
    tuesday = Column(Integer)
    wednesday = Column(Integer)
    thursday = Column(Integer)
    friday = Column(Integer)
    saturday = Column(Integer)
    sunday = Column(Integer)
    start_date = Column(Integer)
    end_date = Column(Integer)
    agency_id = Column(String)

class CalendarDates(Base):
    __tablename__ = "calendar_dates"
    service_id = Column(String, primary_key=True, index=True)
    agency_id = Column(String)
    date = Column(String)
    exception_type = Column(Integer)
    agency_id = Column(String)
class StopTimes(Base):
    __tablename__ = "stop_times"
    trip_id = Column(String)
    arrival_time = Column(String)
    departure_time = Column(String)
    stop_id = Column(Integer)
    stop_sequence = Column(Integer)
    stop_headsign = Column(String)
    pickup_type = Column(Integer)
    drop_off_type = Column(Integer)
    trip_id_event = Column(String)
    route_code = Column(Integer)
    destination_code = Column(String)
    timepoint = Column(Integer)
    bay_num = Column(Integer)
    agency_id = Column(String)
    id = Column(Integer, primary_key=True, index=True)

class Stops(Base):
    __tablename__ = "stops"
    stop_id = Column(Integer, primary_key=True, index=True)
    stop_code = Column(Integer)
    stop_name = Column(String)
    stop_desc = Column(String)
    stop_lat = Column(Float)
    stop_lon = Column(Float)
    geometry = Column(Geometry('POINT', srid=4326))
    stop_url = Column(String)
    location_type = Column(String)
    parent_station = Column(String)
    tpis_name = Column(String)
    agency_id = Column(String)


class Routes(Base):
    __tablename__ = "routes"
    route_id = Column(Integer, primary_key=True, index=True)
    route_short_name = Column(String)
    route_long_name = Column(String)
    route_desc = Column(String)
    route_type = Column(Integer)
    route_color = Column(String)
    route_text_color = Column(String)
    route_url = Column(String)
    agency_id = Column(String)

# route stops: route_id,stop_id,day_type,stop_sequence,direction_id,stop_name,coordinates,departure_times
class RouteStops(Base):
    __tablename__ = "route_stops"
    route_id = Column(String, primary_key=True, index=True)
    route_code = Column(String)
    day_type = Column(String)
    stop_id = Column(Integer, primary_key=True, index=True)
    stop_sequence = Column(Integer)
    direction_id = Column(Integer)
    stop_name = Column(String)
    coordinates = Column(JSON)
    geometry = Column(Geometry('POINT', srid=4326))
    departure_times = Column(String)
    agency_id = Column(String)

class RouteStopsGrouped(Base):
    __tablename__ = "route_stops_grouped"
    route_id = Column(String, primary_key=True, index=True)
    route_code = Column(String)
    payload = Column(String)
    agency_id = Column(String)

class TripShapes(Base):
    __tablename__ = "trip_shapes"
    shape_id = Column(String, primary_key=True, index=True)
    geometry = Column(Geometry('LINESTRING', srid=4326))
    agency_id = Column(String)

class Shapes(Base):
    __tablename__ = "shapes"
    shape_id_sequence = Column(String, primary_key=True, index=True)
    shape_id = Column(String)
    shape_pt_lat = Column(Float)
    shape_pt_lon = Column(Float)
    geometry = Column(Geometry('POINT', srid=4326))
    shape_pt_sequence = Column(Integer)
    agency_id = Column(String)
    

class Trips(Base):
    __tablename__ = "trips"
    route_id = Column(Integer, primary_key=True, index=True)
    service_id = Column(String)
    trip_id = Column(String)
    trip_headsign = Column(String)
    direction_id = Column(Integer)
    block_id = Column(Integer)
    shape_id = Column(String)
    trip_id_event = Column(String)
    agency_id = Column(String)
    
#### end gtfs static models

#### begin other models

class GoPassSchools(Base):
    __tablename__ = "go_pass_schools"
    id = Column(Integer, primary_key=True, index=True)
    phone = Column(String)
    participating = Column(Boolean)
    school = Column(String)
    district = Column(String)
    address = Column(String)
    notes = Column(String)
    resolved = Column(Boolean)

class CanceledServices(Base):
    __tablename__ = "canceled_service"
    dpce_date = Column(String)
    dpce_assign_id = Column(String)
    dpce_block_disp = Column(String)
    pce_time_start = Column(String)
    pce_time_end = Column(String)
    pce_duration = Column(String)
    dpce_reason_canc = Column(String)
    pce_commentary = Column(String)
    trp_number = Column(String)
    trp_int_number = Column(String, primary_key=True, index=True)
    m_metro_export_trip_id = Column(String)
    m_gtfs_trip_id = Column(String)
    trp_route = Column(String)
    trp_direction = Column(String)
    trp_type = Column(String)
    stop_description_first = Column(String)
    trp_time_start = Column(String)
    trp_time_end = Column(String)
    stop_description_last = Column(String)
    trp_block = Column(String)
    trp_duration = Column(String)
    trp_distance = Column(String)
    dty_number = Column(String)
    pce_number = Column(String)
    dty_type = Column(String)
    oa_pce_orb_number = Column(String)
    blk_orb_number = Column(String)
    trp_time_start_hour = Column(String)
    CostCenter = Column(String)
    blk_garage = Column(String)
    LastUpdateDate = Column(String)

class User(Base):
    __tablename__ = "users"
    id = Column(Integer, primary_key=True, index=True)
    username = Column(String)
    email = Column(String, unique=True, index=True)
    email_token = Column(String)
    api_token = Column(String)
    hashed_password = Column(String)
    is_email_verified = Column(Boolean, default=False)
    is_active = Column(Boolean, default=False)