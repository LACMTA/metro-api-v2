from tkinter import E
from app.config import Config
import json, requests

# from fastapi import HTTPException

# from .utils.log_helper import *
from sqlalchemy.orm import sessionmaker
SWIFTLY_API_REALTIME = 'https://api.goswift.ly/real-time/'

SERVICE_DICT = {
    'bus': 'lametro',
    'rail': 'lametro-rail'
}

SWIFTLY_GTFS_RT_TRIP_UPDATES = 'gtfs-rt-trip-updates'
SWIFTLY_GTFS_RT_VEHICLE_POSITIONS = 'gtfs-rt-vehicle-positions'

# SWIFTLY_API_REALTIME = 'https://api.goswift.ly/real-time/lametro-rail/gtfs-rt-trip-updates?format=json'
# Swiftly API endpoint format:
# SWIFTLY_API_REALTIME + SERVICE_* + SWIFTLY_GTFS_RT_* + FORMAT

TARGET_FOLDER = '../appdata/'

def connect_to_swiftly(service, endpoint, output_file, output_format):
    swiftly_endpoint = ''

    if not output_format == '':
        swiftly_endpoint = SWIFTLY_API_REALTIME + SERVICE_DICT[service] + '/' + endpoint + '?format=' + output_format
    else:
        swiftly_endpoint = SWIFTLY_API_REALTIME + SERVICE_DICT[service] + '/' + endpoint

    
    if (service == 'bus'):
        key = Config.SWIFTLY_AUTH_KEY_BUS
    elif (service == 'rail'):
        key = Config.SWIFTLY_AUTH_KEY_RAIL
    header = { 
        "Authorization": key
    }

    try:
        response = requests.get(swiftly_endpoint, headers=header)
    except Exception as e:
        print('Error connecting to Swiftly API: ' + str(e))
        return

    try:
        if output_format == 'json':
            with open(output_file, 'w') as file:
                json.dump(response.json(), file)
        else:
            with open(output_file, 'wb') as file:
                file.write(response.content)
    except Exception as e:
        print('Error writing to file: ' + output_file + ': ' + str(e))
        

def get_trip_updates(service, output_format):
    if service in SERVICE_DICT:
        if (output_format == 'json'):
            output_file = TARGET_FOLDER + service + '-' + SWIFTLY_GTFS_RT_TRIP_UPDATES + '.json'
            connect_to_swiftly(service, SWIFTLY_GTFS_RT_TRIP_UPDATES, output_file, output_format)
            with open(output_file, 'r') as file:
                trip_updates_json = json.loads(file.read())
                return trip_updates_json
        else:
            output_file = TARGET_FOLDER + service + '-' + SWIFTLY_GTFS_RT_TRIP_UPDATES + '.pb'
            connect_to_swiftly(service, SWIFTLY_GTFS_RT_TRIP_UPDATES, output_file, output_format)
            with open(output_file, 'rb') as file:
                trip_updates_pb = file.read()
                return trip_updates_pb
    else:
        print('Invalid service: ' + service)

def get_vehicle_positions(service, output_format):
    if service in SERVICE_DICT:
        if (output_format == 'json'):
            output_file = TARGET_FOLDER + service + '-' + SWIFTLY_GTFS_RT_VEHICLE_POSITIONS + '.json'
            connect_to_swiftly(service, SWIFTLY_GTFS_RT_VEHICLE_POSITIONS, output_file, output_format)
            with open(output_file, 'r') as file:
                # logger.info('Reading json file: ' + output_file)
                vehicle_positions_json = json.loads(file.read())
                file.close()
                return vehicle_positions_json
        else:
            output_file = TARGET_FOLDER + service + '-' + SWIFTLY_GTFS_RT_VEHICLE_POSITIONS + '.pb'
            connect_to_swiftly(service, SWIFTLY_GTFS_RT_VEHICLE_POSITIONS, output_file, output_format)
            with open(output_file, 'rb') as file:
                # logger.info('Reading protobuf file: ' + output_file)
                vehicle_positions_proto = file.read()
                file.close()
                return vehicle_positions_proto
    else:
        # logger.exception('Invalid service: ' + service)
        print('Invalid service: ' + service)
        # raise HTTPException(status_code=400, detail='Invalid service provided')

