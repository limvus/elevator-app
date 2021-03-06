# ElevatorUnit App
[![Actions Status](https://github.com/limvus/elevator-app/workflows/CI/CD/badge.svg)](https://github.com/limvus/elevator-app/actions)
[![codecov](https://codecov.io/gh/limvus/elevator-app/branch/master/graph/badge.svg)](https://codecov.io/gh/limvus/elevator-app)

ElevatorUnit App is a fun app that manages elevators efficiently in a multi
stored building. Right now the app is in early stage. Features right now are: 
- 3 elevators
- 20 floors
- can call elevators by clicking floors
- the nearest elevator will move to the floor

#### Upcoming Features
- variable elevators and floors
- elevator move at a constant speed so only unused elevator can move
- elevator can carry users with limit
- floors have limited users
- fastest algorithm to serve users

## System Requirements
- node-12.x or higher
- tested in [node-12.x, node-14.x, node-16.x]

## Installation
```
# clone this repo
git clone https://github.com/limvus/elevator-app.git

# cd into the project directory and run:
npm install 

# then run (dev mode):
npm run dev
- go to http://loclahost:3000 to view the app

# to build for production:
npm run build

# run (prod mode | express)
npm run start
- available at the same port:3000

# to run tests:
npm run test
```

## Deployment
Just push the app to and it will be automatically deployed.
This app is available at: https://l-elevator-app.herokuapp.com/

## License
This project is released under the MIT License.

## Author
Sudip Limbu