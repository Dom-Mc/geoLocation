import React from 'react';

const MapMarker = ({ bgColor }) => (
  <div>
    <div className="map-marker" style={{ backgroundColor: bgColor }} />
    <div className="pulsate" />
  </div>
);

MapMarker.propTypes = {
  bgColor: React.PropTypes.string.isRequired
};

export default MapMarker;
