# DEMO understanding webpack

[![Greenkeeper badge](https://badges.greenkeeper.io/ndelangen/understanding-webpack.svg)](https://greenkeeper.io/)
A small project used to demonstrate webpack 2.

## Setup environment
Install these dependencies globally:

- NodeJS (^7.5.0)
- Npm (^4.2.1)
- Yarn (^0.20.3)

## Before first run
1. Clone repository
2. Run `yarn install`

## Run application
Starting the application, run `npm start -- -h` for a list of options.

- Development
  `npm start -- dev`
- Production
  `npm start -- prod`

## Run tests
Starting tests, run `npm test -- -h` for a list of options.

- Single (all)
  `npm test -- *`
- Watch (unit tests)
  `npm test -- unit --watch`
- Watch (unit tests)
  `npm test -- lint`

You can run multiple types like this: (the order is the order of execution)
`npm test -- unit lint`

## About this project

A more detailed information here...
