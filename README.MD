# Top Trumps Movie Edition Client (frontend)
#### Please find the project's top-level informations in file README_topLevel.md .

## Demo
![alt text](https://github.com/mingYi-ch/top-trumps-client/blob/develop/img/top_trumps_anim.gif "Top Trumps Gameplay")

## Microservices
### Docker Compose
The application makes use of three docker microservices. Follow the steps below to start up all three interoperating microservices and access the web game:

1) Navigate to the top level of the Client repository.
2) Run command ``sudo docker-compose up``
3) As soon as all dependencies are downloaded and all services have started up, navigate to [http://localhost:3000](http://localhost:3000) to access the web game.

### Docker

To locally build and run the Client microservice, follow the following steps:

1) To build the docker image run ``sudo docker build -t image_name:latest .``
2) To run the docker image, use ``sudo docker run -p 3000:3000 -d image_name``

Access the application running in a docker container by navigating to: [http://0.0.0.0:3000](http://0.0.0.0:3000)

## Prerequisites and Installation (e.g. for local development)

In the project directory, you can run:

### `npm install`

Install all dependencies. This has to be done before starting the application.

### `npm run start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
