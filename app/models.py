from sqlalchemy import Boolean, Column, ForeignKey, Integer, String, Float,PrimaryKeyConstraint, Float,PrimaryKeyConstraint

from .database import Base
class User(Base):
    __tablename__ = "users"
    id = Column(Integer, primary_key=True, index=True)
    username = Column(String)
    email = Column(String, unique=True, index=True)
    email_token = Column(String)
    api_token = Column(String)
    email_token = Column(String)
    api_token = Column(String)
    hashed_password = Column(String)
    is_email_verified = Column(Boolean, default=False)
    is_active = Column(Boolean, default=False)

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
    id = Column(Integer, primary_key=True, index=True)

class Stops(Base):
    __tablename__ = "stops"
    stop_id = Column(Integer, primary_key=True, index=True)
    stop_code = Column(Integer)
    stop_name = Column(String)
    stop_desc = Column(String)
    stop_lat = Column(Float)
    stop_lon = Column(Float)
    stop_url = Column(String)
    location_type = Column(String)
    parent_station = Column(String)
    tpis_name = Column(String)

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
class Shapes(Base):
    __tablename__ = "shapes"
    shape_id = Column(String, primary_key=True, index=True)
    shape_pt_lat = Column(Float)
    shape_pt_lon = Column(Float)
    shape_pt_sequence = Column(Integer)