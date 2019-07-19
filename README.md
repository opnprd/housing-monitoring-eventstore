# housing-monitor-eventstore

> This eventstore is part of a prototype toolset that has been developed by the team at [ODI Leeds](https://odileeds.org/) in collaboration with the [Connected Places Catapult](https://futurecities.catapult.org.uk/).

## Pre-requisites

You'll need

* a working version of Node (latest LTS version recommended). This is largely used to run the setup scripts.
* a working version of Docker for your platform.

To prepare the environment, run the command `npm install` from within the project directory structure. 

## Starting the services

Starting the services

    docker-compose up --build --detach

To configure the databases, run the following:

    npm run db:migrate

To tail the logs for the services, run

    docker-compose logs --follow

CTRL+C will stop the logs.

## Documentation

The APIs are documented using the OpenAPI specification (a.k.a. Swagger). There is an API viewer built
into the service, accessible on the server at the `/docs/api` path. Assuming the service is running
locally, this is available on `http://localhost:8000/docs/api`. It is possible to use this to interact
with the api.

The OpenAPI document itself is available at `/docs/api/swagger.json`
