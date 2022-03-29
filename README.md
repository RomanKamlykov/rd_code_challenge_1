# rd_code_challenge_1

## Requirements

- docker & docker-compose
- node & npm
- optionally pnpm

## Run

Install dependencies:
```
> cd server
> npm i
```

Start containers:
```
> cd ..
> docker-compose up
```

## Use

The app is available at http://localhost:3000/:

- select the .csv file to save data on the server
- click the "Clear" button to remove the data from the server

## To-do

- add authentication with Passport
- add validation with Joi
- add API documentation with Swagger & OpenAPI