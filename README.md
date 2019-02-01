# Big 4 Meal
This app allow
passengers (that already have a valid booking with any of our partner airlines) to bid for a meal
package through a reverse auction mechanism.

## Stack
- WebPack 4
- React 16
- Bootstrap 4
- Sass
- docker
- docker-compose

## Installation

 - Install docker(optional)

 - Install docker-compose(optional)

 - Run `docker-compose up`(optional)

 - Run `docker exec -i -t bid-4-meal  yarn install` if you are using
 docker, else run `yarn install`

## Usage
 - Run `docker exec -i -t bid-4-meal  yarn start` if you are using
 docker else, else run `yarn start`

## Tests
 - Run `docker exec -i -t bid-4-meal  yarn test` if you are using
 docker else, else run `yarn test`

## Code quality
 - Using eslint with Airbnb preset and prettier for code formatting

## Deploy
- Run `docker exec -i -t bid-4-meal  yarn build-prod` if you are using
 docker else, else run `yarn build-prod`

