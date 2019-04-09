# housing-monitor-eventstore

## Pre-requisites

You'll need

* a working version of Node (latest LTS version recommended). This is largely used to run the setup scripts.
* a working version of Docker for your platform.

## Starting the services

Starting the services

    docker-compose up --build --detach

To configure the databases and test data, run the following:

    npm run docker:setup
    npm run test:loaddata

To tail the logs for the services, run

    docker-compose logs --follow

CTRL+C will stop the logs.

