# Architecture

This document describes the architecture of Metro API 2.x, including the backend, frontend, database, and API components. It provides an overview of the technologies used in the project and the repository structure.

## Overview

The project is built using the following technologies:

- **Frontend**: The frontend is built using [React](https://reactjs.org/) and [Docusaurus](https://docusaurus.io/), a modern static website generator. It provides a user-friendly interface for interacting with the Metro API.
- **Backend**: The backend is built using [FastAPI](https://fastapi.tiangolo.com/), a modern web framework for building APIs with Python. It provides the logic for handling requests to the Metro API and serves as the interface between the frontend and the Metro API.
- **Database**: The project uses a [PostgreSQL](https://www.postgresql.org/) database to store data related to the Metro API, such as routes, stops, and schedules. The database is accessed using the [SQLAlchemy](https://www.sqlalchemy.org/) ORM.
- **API**: The Metro API provides access to real-time data, GTFS data, and other information related to the Los Angeles Metro system. It is built using FastAPI and provides endpoints for retrieving data about routes, stops, schedules, and live transit updates.
- **WebSocket**: The Metro API also supports WebSocket connections to receive real-time updates about vehicles and trips. This allows developers to receive updates on vehicle positions or trip updates in real-time. Mainly the web socket is used as a pass-through for the Swiftly API.

## Repository Structure

The project repository is structured as follows:

- **`documentation/`**: Contains documentation for the project built on Docusaurus and using the plugin `docusaurus-plugin-redoc` to generate API documentation from OpenAPI specifications.
- **`fastapi/`**: Contains the FastAPI backend code for the Metro API, including routes, models, and logic for handling requests.
- **`data-loading-service`**: Contains the code for the data loading service that loads data from the Metro API into the PostgreSQL database.
- **`notebooks/`**: Contains Jupyter notebooks for data analysis and exploration.
- **`docker-compose.yml`**: Contains the Docker Compose configuration for running the project locally.
- **`README.md`**: Contains the project README with information about setting up and running the project.

