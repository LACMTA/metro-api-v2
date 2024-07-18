# Metro API v2.7 Update Notes

## Using the new `/{agency_id}/route_details/{route_code}` endpoint

The new `/{agency_id}/route_details/{route_code}` endpoint allows you to get stop time and line geometries for upcoming trips given a specific route, direction, day type, and time. 

The endpoint requires the following parameters:

- `agency_id`: The agency ID of the transit agency (e.g. LACMTA for bus, LACMTA_Rail for rail)
- `route_code`: The route code of the route (e.g. 720)
- `direction_id`: The direction ID of the route (0 or 1)
- `day_type`: The day type of the trip (Weekday, Saturday, Sunday)
- `time`: The time of the trip (e.g. 12:00:00)

The endpoint also has an optional parameter:

- `num_results`: The number of results to return (default is 3)

An example request to the endpoint would look like this:

```
https://api.metro.net/LACMTA/route_details/720?direction_id=1&day_type=Weekday&time=12:00:00&num_results=3
```

This request would return a list of upcoming trips for the 720 route in the weekday direction 1 at 12:00:00 with a limit of 3 results that are closest to the specified time. An example return value would look like this:

```json
{
	"stop_times":
	[["Central / 6th",["12:06:00","12:14:00","12:21:00"],"7201303_DEC23"],["5th / San Pedro",["12:09:00","12:17:00","12:24:00"],"7201303_DEC23"],["5th / Main",["12:11:00","12:19:00","12:26:00"],"7201303_DEC23"],["5th / Broadway",["12:12:00","12:20:00","12:27:00"],"13:29:00"],["Wilshire / Glendon",["13:19:00","13:26:00","13:34:00"],"7201303_DEC23"],["Veteran Federal Building",["13:21:00","13:36:00"],"7201303_DEC23"],["Wilshire / Veteran",["13:28:00"],"7201303_DEC23"],["Wilshire / Bonsall",["13:30:00"],"7201303_DEC23"],["Wilshire / Barrington",["13:33:00"],"7201303_DEC23"],["Wilshire / Bundy",["13:36:00"],"7201303_DEC23"],["Wilshire / 26th",["13:40:00"],"7201303_DEC23"],["Wilshire / 14th",["13:45:00"],"7201303_DEC23"],["4th / Arizona",["13:50:00"],"7201303_DEC23"]],
"geometries":
	{"7201303_DEC23":"{\"type\":\"LineString\",\"coordinates\":[[-118.238495863,34.036918093],[-118.238495863,34.036918093],[-118.238495863,34.036918093],[-118.238495863,34.036918093]..."}
}
```
The `stop_times` field contains a list of stop names, stop times, and trip IDs for the upcoming trips. The `geometries` field contains a dictionary of trip IDs and their corresponding line geometries.

This endpoint is meant to be used for populating a schedules page with upcoming trips for a specific route, direction, day type, and time and replaces the former `{agency_id}/route_stops_grouped/{route_code}` endpoint which had the data returned as a single JSON object in the payload column, but did not include support for multiple trips or line geometries.

