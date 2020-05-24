# Top Trumps Movie Edition

#### Authors
Ming Yi, Rohit Kaushik, Timo Surbeck

### Introduction
Welcome to the top-level README of our Advanced Software Engineering FS 20 group project! "Top Trumps Movie Edition" is a ReactJS based web game that lets users play a simplified version of [Top Trumps](https://en.wikipedia.org/wiki/Top_Trumps) in games of ten rounds against the computer, with card decks of a chosen year range and genre. For dividing up responsibilities into individual microservices, we decided to split up our application into three tiers, namely 
into a Client (frontend), a Server as well as a Database part. For each of the three parts there is a publicly accessible GitHub repository. Please access it via the URLs specified in the section below.

### GitHub Repositories
- Client (frontend, ReactJS): [github.com/mingYi-ch/top-trumps-client](https://github.com/mingYi-ch/top-trumps-client)
- Server (Python Flask): [github.com/kaushik-rohit/top-trumps-server](https://github.com/kaushik-rohit/top-trumps-server)
- Database (MongoDB): [github.com/mingYi-ch/top-trumps-mongoDB](https://github.com/mingYi-ch/top-trumps-mongoDB)

Each of the above repositories corresponds to one of the individual microservices of our application, while all repositories feature a README.md file, which contains (but is not limited to) instructions on how to build and run the code in terms of Docker microservices. The [client](github.com/mingYi-ch/top-trumps-client) repository is the only one to feature a Docker Compose file, the following section instructs on how to use it to start up the three-tier application as three interoperating Docker containers.

### Quickstart
Please run the following command, to start up all three interoperating microservices. Please ensure, **Docker** is installed on your unixoid operating system:
- Run command ``sudo docker-compose up``
- As soon as all dependencies are downloaded and all services have started up, navigate to [http://localhost:3000](http://localhost:3000) to access the web game.

### Documentation
The [server repository](github.com/kaushik-rohit/top-trumps-server) is the only one to include a GitHub wiki, which holds the main documentation of the application. It is split into two pages and covers the following topics:
- [Wiki: Home (main page)](https://github.com/kaushik-rohit/top-trumps-server/wiki)
    - Game rules
    - Involved technologies
    - REST API Specification
    - Additional desired features (backlog)
    - Microservices architecture
    - Agile strategy (Kanban)
    - Git practices (Pullrequests)
    - Testing
    - Documentation

- [Wiki: Sprint documentation](https://github.com/kaushik-rohit/top-trumps-server/wiki/Sprint-Documentation)
    - Summarized records of weekly mutual sprint meetings
