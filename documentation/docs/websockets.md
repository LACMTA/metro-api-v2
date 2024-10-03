# Websockets

The API has one WebSocket endpoint used to provide a stream of realtime data.  The URL is in this format:

```
wss://api.metro.net/ws/{agency_id}/{endpoint}/{route_codes (optional)}
```

## Parameters

__agency_id (str)__

The agencyID is found in the GTFS-schedule `agency.txt` files.

Values:
- `LACMTA` (Metro Bus)
- `LACMTA_Rail` (Metro Rail)
    
__endpoint (str)__

The type of GTFS-realtime data to send.

Values:
- `vehicle_positions`
- `trip_updates`
    
__route_codes (str, optional)__

A comma-separated list of route codes to filter updates. If not provided, updates for all routes are sent.

Route codes are the definitive labels for each of the lines, minus HASTUS version numbers and separated from their "sister" lines.

## Response

The WebSocket endpoint sends updates every 3 seconds.

### Success

The WebSocket endpoint sends updates in the following format:

{
    "id": "vehicle_id",
    "vehicle": {
        "trip": {
            "route_id": "route_code",
            ...
        },
        ...
    },
    "route_code": "route_code",
    ...
}

Each message from the WebSocket contains data for a single vehicle.

### Error

If an error occurs while processing updates, the WebSocket endpoint sends an error message in the following format:

"Error: error_message"