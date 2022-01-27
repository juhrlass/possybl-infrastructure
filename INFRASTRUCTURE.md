For local development you can use docker-compose to spin up the needed infrastructure.
Before using docker-compose you have to copy .env.example to .env next to the compose file.

    cp .env.example .env

Just use:

    docker-compose up

to start the containers.

This will also create docker volumes that persist your local data.

To stop the containers use:

    docker-compose down

To also delete the volumes use:

    docker-compose down -v

