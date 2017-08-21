# greensland
Serious VR application for serious VR businessmen

## Setup
Install [nodejs version 8.2.1](https://nodejs.org/en/)
Run `npm install` in /app and /server
To start app run `npm start` in /app

### Server
* Make a copy of `./config/default.example.json` to `./config/default.json` and fill in the required fields.
* Execute `npm run migrate:up` to create your database schema
* Execute `npm run db:populate` to populate your database with data
* Execute `npm start` to start the server

#### Docker-compose WIP (Reloading not working)
Install docker and docker-compose
Then run `docker-compose up`
