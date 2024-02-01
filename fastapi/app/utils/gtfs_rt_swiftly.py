from aiohttp import ClientSession

SWIFTLY_API_REALTIME = 'https://api.goswift.ly/real-time/'
SWIFTLY_GTFS_RT_TRIP_UPDATES = 'gtfs-rt-trip-updates'
SWIFTLY_GTFS_RT_VEHICLE_POSITIONS = 'gtfs-rt-vehicle-positions'

SERVICE_DICT = {
    'LACMTA': 'lametro',
    'LACMTA_Rail': 'lametro-rail'
}

async def connect_to_swiftly(service, endpoint, bus_api_key, rail_api_key):
    swiftly_endpoint = SWIFTLY_API_REALTIME + service + '/' + endpoint + '?format=json'

    if (service == 'lametro'):
        key = bus_api_key
    elif (service == 'lametro-rail'):
        key = rail_api_key
    header = { 
        "Authorization": key
    }
    try:
        print('Connecting to Swiftly API: ' + swiftly_endpoint)
        async with ClientSession() as session:
            async with session.get(swiftly_endpoint, headers=header) as response:
                print('Response status code: ' + str(response.status))
                if (response.status == 200):
                    return await response.text()  # Use .text() instead of .read() to get the response as a string
                else:
                    return False
    except Exception as e:
        print.exception('Error connecting to Swiftly API: ' + str(e))
        return False