# Welcome to the Los Angeles Metro User Guide

This guide provides an overview of the Los Angeles Metro API, including key features, common tasks, and troubleshooting tips. The developer side of this documentation is geared towards developers of the Los Angeles Metro API.

## Overview

The Metro API provides access for developers to retrieve real-time data, GTFS data, and other information related to the Los Angeles Metro system. By leveraging this API, you can access detailed information about routes, stops, schedules, and live transit updates.

- **Real-Time Data:** Access up-to-the-minute information on bus and train schedules, including delays and cancellations.
- **GTFS Data:** Explore detailed information about routes, stops, and schedules.
- **Canceled Service Data:** Stay informed about any service disruptions or cancellations that might affect your journey.
- **Static Data:** Explore detailed information about routes, stops, and schedules to plan your trip effectively.
- **Other Data:** Access additional resources like Gopass Schools information.

## How to Use Key Features

### Accessing Real-Time Data

To receive real-time updates about vehicles and trips, connect to our WebSocket endpoint. This endpoint is a pass-through for the Swiftly API, providing updates on vehicle positions or trip updates.

#### How It Works:

1. **Connect to the WebSocket:** Use the endpoint format above to establish a WebSocket connection.
2. **Receive Updates:** Once connected, you will receive real-time updates every 3 seconds. Updates include information about vehicle positions or trip updates, depending on the `endpoint` parameter specified.
3. **Data Format:** Updates are sent in JSON format, including details such as `vehicle_id`, `route_code`, and trip information.
4. **Error Handling:** If an error occurs while processing updates, an error message will be sent in the format `"Error: error_message"`.

#### Example Update Format:

```json
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
```
### Accessing GTFS Data

- **Get All Agencies:** Use the `/agencies` endpoint to view a list of all available agencies.
- **Get Agency Routes:** Access `/routes/{agency_id}` to view all routes for a specific agency.
- **Get Route Stops:** Use `/stops/{agency_id}/{route_code}` to view all stops for a specific route.
- **Get Stop Times:** Access `/stop_times/{agency_id}/{route_code}` to view stop times for a specific route.
- **Get Trips:** Use `/trips/{agency_id}/{trip_id}` to view details about a specific trip.
- **Get All Trips:** Access `/trips/{agency_id}` to view all trips for a specific agency.
- **Get All Routes:** Use `/routes/{agency_id}` to view all routes for a specific agency.
- **Get All Stops:** Access `/stops/{agency_id}` to view all stops for a specific agency.
- **Get All Stop Times:** Use `/stop_times/{agency_id}` to view all stop times for a specific agency.


### Checking Canceled Service Data

- **Get Canceled Trip Summary:** Use `/canceled_service_summary` to view a summary of all canceled trips.
- **Get Canceled Trip:** To find details about canceled trips for a specific line, use `/canceled_service/line/{line}`.
- **View All Canceled Trips:** Access `/canceled_service/all` to see all canceled trips.

### Exploring Static Data

- **Route and Stop Information:** Use endpoints like `/{agency_id}/route_stops/{route_code}` and `/{agency_id}/stops/{stop_id}` to get information about routes and stops.
- **Schedule and Trip Details:** Access detailed schedule information with endpoints such as `/{agency_id}/stop_times/route_code/{route_code}` and `/{agency_id}/trips/{trip_id}`.
- **Route Overview:** Get an overview of routes with `/{agency_id}/route_overview` or detailed information for a specific route with `/{agency_id}/route_overview/{route_code}`.

## Examples of Common Tasks

- **How to Check for Service Alerts:** Use the canceled service data endpoints to check for any disruptions or cancellations.
- **How to Find Real-Time Schedule Information:** Utilize the real-time data endpoints to get the latest schedule updates for your route.

## Troubleshooting Tips

- **Issue: The schedule seems outdated.** Solution: Ensure you're accessing the real-time data endpoints for the most current information.
- **Issue: Can't find my route.** Solution: Double-check the route code or use the `/{agency_id}/routes` endpoint to search for all available routes.

## Support and Contact Information

For further assistance or to provide feedback, please contact our customer support team:

- **Email:** support@lametro.com
- **Phone:** 1-800-LA-METRO
- **Live Chat:** Available on our web application during business hours.

We're here to help make your Los Angeles Metro experience as smooth and enjoyable as possible. Start exploring today and take the hassle out of public transit!