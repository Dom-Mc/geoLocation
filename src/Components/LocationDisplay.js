import React from 'react';
import LocationHelp from './LocationHelp';
import { Grid } from 'semantic-ui-react';

const LocationDisplay = ({ locationCategory }) => {

  const { isp } = locationCategory;

  const data = {
    "Country": locationCategory.country,
    "Region": locationCategory.region,
    "City": locationCategory.city,
    "Time Zone": locationCategory.timezone,
    "Latitude": locationCategory.lat,
    "Longitude": locationCategory.lon
  };

  const categoryList = Object.entries(data).map( ([key, value]) => (
      <Grid key={key}>
        <Grid.Column width={6} floated="left">
          <h3 className="category--title">
            <i className="map icon" />
            {key}
          </h3>
        </Grid.Column>

        <Grid.Column width={10} floated="right">
          <p className="category--data">
            {value}
            <LocationHelp categoryTitle={key} ispValue={isp} />
          </p>
        </Grid.Column>
      </Grid>
  ));

  return (
    <section className="location-wrapper--user">
      {categoryList}
    </section>
  );
};

LocationDisplay.propTypes = {
  locationCategory: React.PropTypes.shape({
    as: React.PropTypes.string,
    city: React.PropTypes.string,
    country: React.PropTypes.string,
    countryCode: React.PropTypes.string,
    isp: React.PropTypes.string,
    lat: React.PropTypes.number,
    lon: React.PropTypes.number,
    org: React.PropTypes.string,
    query: React.PropTypes.string,
    region: React.PropTypes.string,
    regionName: React.PropTypes.string,
    status: React.PropTypes.string,
    timezone: React.PropTypes.string,
    zip: React.PropTypes.string
  })
};

export default LocationDisplay;
