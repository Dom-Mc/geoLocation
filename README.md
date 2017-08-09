# GeoLocation

### Description
GeoLocation is a web app for obtaining geolocation details of the user or a selected website. It uses the [IP Geolocation API](http://ip-api.com/docs) to retrieve location details based off of the IP address, and displays it on a map via the [Google Maps API](https://developers.google.com/maps/). GeoLocation was built using [React](https://facebook.github.io/react/) and styled with [Semantic UI](https://semantic-ui.com/).

---
### Installation
#### (Step 1) Fork Repository
* Fork a local copy of the `geoLocation` repo through either HTTPS or SSH.
###### Install via HTTPS
`$ git clone https://github.com/USERNAME/geoLocation.git`
###### Install via SSH
`$ git clone git@github.com:USERNAME/geoLocation.git`

#### (Step 2) Install Packages:
* Install NPM package dependencies.
```
$ cd geoLocation/
$ npm install
```

#### (Step 3) Run Linter
* Run ESLint to check for errors.
`$ npm run lint`

#### (Step 4) Run Tests
* Run Mocha test suite.
`$ npm test`

#### (Step 4) Start Server
* Start the server - your default browser will automatically open with `http://localhost:9000/`.
`$ npm start`

---
### Frameworks & Libraries
#### CSS/UI
* [Semantic UI](https://semantic-ui.com/)
* [Semantic-UI-React](http://react.semantic-ui.com/introduction) (React integration)

#### JavaScript
* [React](https://facebook.github.io/react/)

#### Testing
* [Mocha](https://mochajs.org/)
* [Chai](http://chaijs.com/)
* [Enzyme](http://airbnb.io/enzyme/)
