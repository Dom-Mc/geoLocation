import React from 'react';
import GoogleMapReact from 'google-map-react';
import MapMarker from './MapMarker';

// Multiple Locations: Set the center of the map by calculating the average Latitude & Longitude values of the Domain & User locations.
// Single Location: Set the center equal to the location coordinates.
const findCenter = (domainData, userData) => {
  if(domainData && userData) {
    return (domainData + userData) / 2;
  }

  return domainData || userData;
};

const setCenter = (domain, user) => (
  [findCenter(domain.lat, user.lat), findCenter(domain.lon, user.lon)]
);

const setMarkers = (domain, user) => {
  let locations = [];
  const domainColor = "#89849b";
  const userColor = "#f04124";

  if (domain) {
    domain.backgroundColor = domainColor;
    locations.push(domain);
  }

  if (user) {
    user.backgroundColor = userColor;
    locations.push(user);
  }

  return locations;
};

// Set the map zoom level based on the average distance between locations or use a default zoom value (10) for a single location.
const setZoom = (domainData, userData) => {
  let zoomValue = 10;

  if (domainData && userData) {
    const latDifference = Math.abs(domainData.lat - userData.lat);
    const lonDifference = Math.abs(domainData.lon - userData.lon);

    if (latDifference > 125 || lonDifference > 125) {
      zoomValue = 1;
    } else if (latDifference > 100 || lonDifference > 100) {
      zoomValue = 2;
    } else if (latDifference > 75 || lonDifference > 75) {
      zoomValue = 3;
    } else if (latDifference > 40 || lonDifference > 40) {
      zoomValue = 4;
    } else if (latDifference > 10 || lonDifference > 10) {
      zoomValue = 5;
    } else if (latDifference > 2 || lonDifference > 2) {
      zoomValue = 6;
    } else if (latDifference > 1 || lonDifference > 1) {
      zoomValue = 7;
    } else if (latDifference > .5 || lonDifference > .5) {
      zoomValue = 8;
    } else {
      zoomValue = 9;
    }
  }

  return zoomValue;
};

const Map = ({ domainData, userData }) => {
  let mapMarkers;
  const centerValue = setCenter(domainData, userData);
  const zoomLevel = setZoom(domainData, userData);
  const mapLocations = setMarkers(domainData, userData);

  if (mapLocations.length) {
    mapMarkers = mapLocations.map( (location, index) => (
      <MapMarker
        key={index}
        bgColor={location.backgroundColor}
        lat={location.lat}
        lng={location.lon}
      />
    ));
  } else {
    mapMarkers = null;
  }

  return (
    <div className="google-map-wrapper">
      <GoogleMapReact zoom={zoomLevel} center={centerValue}>
        {mapMarkers}
      </GoogleMapReact>
    </div>
  );
};

Map.propTypes = {
  domainData: React.PropTypes.oneOfType([
    React.PropTypes.string,
    React.PropTypes.object
  ]),
  userData: React.PropTypes.oneOfType([
    React.PropTypes.string,
    React.PropTypes.object
  ])
};

export default Map;
