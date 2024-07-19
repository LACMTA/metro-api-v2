# Adding a new endpoint to Metro API

## Overview

The Metro API uses [FastAPI](https://fastapi.tiangolo.com/) to create a RESTful API that provides access to real-time data, GTFS data, and other information related to the Los Angeles Metro system. It also has support for WebSocket connections to receive real-time updates about vehicles and trips.

To add a new endpoint to the Metro API, you will need to create a new route in the `fastapi/app/main.py` file. This route will define the path and method for the new endpoint, as well as the logic for handling requests to that endpoint.

| Endpoint Type | Description | Example Use Case |
| --- | --- | --- |
| RESTful API | Provides access to data using HTTP methods (GET, POST, PUT, DELETE) | GTFS static data|
| WebSocket | Allows real-time communication between the client and server | GTFS real-time data |


## Steps to Add a New Endpoint - RESTful API

1. Open the `fastapi/app/main.py` file in your code editor.
2. Define a new route using the `@app.get` or `@app.post` decorator, depending on the HTTP method you want to use for the endpoint.
3. Specify the path for the new endpoint in the decorator, e.g., `@app.get("/new_endpoint")`.
4. Define a function that will handle requests to the new endpoint. This function should return the data you want to send back to the client.
5. Test the new endpoint by running the FastAPI development server and sending a request to the endpoint using a tool like [Postman](https://www.postman.com/).
6. Document the new endpoint in the API documentation to inform users about its purpose, required parameters, and expected response.

### Example

Here is an example of adding a new endpoint to the Metro API that returns a list of upcoming trips for a specific route, direction, day type, and time:

```python
from fastapi import FastAPI

app = FastAPI()
@app.get("/new_endpoint")
def get_upcoming_trips(route: str, direction: int, day_type: str, time: str):
	# Logic to fetch upcoming trips based on route, direction, day type, and time
	return {"route": route, "direction": direction, "day_type": day_type, "time": time, "trips": ["Trip 1", "Trip 2", "Trip 3"]}
```

In this example, the `get_upcoming_trips` function takes route, direction, day type, and time as parameters and returns a list of upcoming trips for that route.

### Testing the New Endpoint

To test the new endpoint, you can run the FastAPI development server using the following command inside of the `fastapi` directory:

```bash
uvicorn main:app --reload
```

Alternatively, it is recommeded you use the provided `docker-compose` file to run the FastAPI development server, see the [README.md](Readme.md) for more information.

Then, you can send a request to the new endpoint using a tool like Postman:

```
GET http://localhost:8000/new_endpoint?route=720&direction=1&day_type=Weekday&time=12:00:00
```

This request would return a list of upcoming trips for the 720 route in the weekday direction 1 at 12:00:00.

## Steps to Add a New Endpoint - WebSocket

To add a new WebSocket endpoint to the Metro API, you will need to create a new route in the `fastapi/app/main.py` file that uses the `WebSocket` class from FastAPI.

### Use Cases

The websocket endpoint is mainly used as a pass-through for the Swiftly API, providing updates on vehicle positions or trip updates. The implementation uses reddis as a cache to store the data and the websocket to send the data to the client, meaning that only a single connection is needed to the Swiftly API for multiple clients.

1. Open the `fastapi/app/main.py` file in your code editor.
2. Define a new route using the `@app.websocket` decorator.
3. Specify the path for the new WebSocket endpoint in the decorator, e.g., `@app.websocket("/new_websocket")`.
4. Define a function that will handle WebSocket connections to the new endpoint. This function should receive a `WebSocket` instance and handle incoming messages.
5. Test the new WebSocket endpoint by running the FastAPI development server and connecting to the endpoint using a WebSocket client.
6. Document the new WebSocket endpoint in the API documentation to inform users about its purpose and expected message format.
7. Implement logic to send real-time updates to connected clients based on incoming messages.

### Example

Here is an example of adding a new WebSocket endpoint to the Metro API that provides real-time updates about vehicle positions:

```python
from fastapi import FastAPI, WebSocket

app = FastAPI()

@app.websocket("/new_websocket")
async def websocket_endpoint(websocket: WebSocket):
	await websocket.accept()
	while True:
		data = await websocket.receive_text()
		# Logic to process incoming messages and send real-time updates
		await websocket.send_text(f"Received: {data}")
```

In this example, the `websocket_endpoint` function accepts WebSocket connections and sends back a message when it receives a text message from the client.

### Testing the New WebSocket Endpoint

To test the new WebSocket endpoint, you can run the FastAPI development server using the following command:

```bash

uvicorn main:app --reload
```


Remember, it is recommeded you use the provided `docker-compose` file to run the FastAPI development server, see the [README.md](Readme.md) for more information.


Then, you can connect to the new WebSocket endpoint using a WebSocket client and send messages to receive real-time updates.

## Conclusion

By following these steps, you can add new RESTful API endpoints and WebSocket endpoints to the Metro API. This allows you to expand the functionality of the API and provide users with access to additional data and real-time updates. Remember to document the new endpoints in the API documentation to help users understand how to interact with them.

For more information on FastAPI and WebSocket connections, refer to the [FastAPI documentation](https://fastapi.tiangolo.com/) and [WebSocket documentation](https://fastapi.tiangolo.com/advanced/websockets/).


