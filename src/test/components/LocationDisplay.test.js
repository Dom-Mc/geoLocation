// Libs
import { expect } from 'chai';
import { shallow } from 'enzyme';
import React from 'react';

// Components
import LocationDisplay from '../../Components/LocationDisplay';

describe("<LocationDisplay /> component", () => {

  // Setup
  let props;
  beforeEach(() => {
    props = {
      locationCategory: {
        city: "San Francisco",
        country: "United States",
        isp: "AT&T U-verse",
        lat: 37.7587,
        lon: -122.4381,
        region: "CA",
        timezone: "America/Los_Angeles"
      }
    };
  });

  it('renders a root element with the class .location-wrapper--user', () => {
    const wrapper = shallow(<LocationDisplay {...props} />);

    expect(wrapper.is('.location-wrapper--user')).to.equal(true);
  });

  it('renders six <Grid /> components', () => {
    const wrapper = shallow(<LocationDisplay {...props} />);
    const categoryLength = wrapper.find('Grid').length;

    expect(wrapper.find('Grid').length).to.equal(categoryLength);
  });

  it('renders six <LocationHelp /> components', () => {
    const wrapper = shallow(<LocationDisplay {...props} />);
    const categoryLength = wrapper.find('Grid').length;

    expect(wrapper.find('LocationHelp').length).to.equal(categoryLength);
  });

  it('renders six map icons with the class name .map.icon', () => {
    const wrapper = shallow(<LocationDisplay {...props} />);
    const categoryLength = wrapper.find('Grid').length;

    expect(wrapper.find('i.map.icon').length).to.equal(categoryLength);
  });
});
