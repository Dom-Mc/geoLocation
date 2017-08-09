import React from 'react';
import Map from './Map';
import DomainError from './DomainError';

const MapData = ({ domain, user }) => {
  if (domain.lon && domain.lat || user.lon && user.lat) {
    return (
      <div className="map-container">
        <section className="ui card">
          <Map domainData={domain} userData={user} />
        </section>
      </div>
    );
  } else {
    return <DomainError />;
  }
};

MapData.propTypes = {
  domain: React.PropTypes.oneOfType([
    React.PropTypes.string,
    React.PropTypes.object
  ]),
  user: React.PropTypes.oneOfType([
    React.PropTypes.string,
    React.PropTypes.object
  ])
};

export default MapData;
