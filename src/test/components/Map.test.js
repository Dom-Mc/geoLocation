// Libs
import { expect } from 'chai';
import { shallow } from 'enzyme';
import React from 'react';

// Components
import Map from '../../Components/Map';

describe('<Map /> component', () => {

  // Setup
  const latValue = 37.7777;
  const lonValue = -122.2222;
  // const domainBgColor = "#89849b";
  // const userBgColor = "#f04124";

  let emptyProps;
  let domainProps;
  let userProps;
  let domainAndUserProps;

  before(() => {
    emptyProps = {
      domainData: '',
      userData: ''
    };

    domainProps = {
      domainData: {
        lat: latValue,
        lon: lonValue
      },
      userData: ''
    };

    userProps = {
      domainData: '',
      userData: {
        lat: latValue,
        lon: lonValue
      }
    };

    domainAndUserProps = {
      domainData: {
        lat: latValue,
        lon: lonValue
      },
      userData: {
        lat: latValue,
        lon: lonValue
      }
    };
  });//before

  // it('contains the prop domainData', () => {
  //   const wrapper = shallow(<Map {...emptyProps} />);
  //
  //   expect(wrapper.props().domainData).to.be.defined;
  // });
  //
  // it('contains the prop userData', () => {
  //   const wrapper = shallow(<Map {...emptyProps} />);
  //
  //   expect(wrapper.props().userData).to.be.defined;
  // });

  it('renders a root element with the class .google-map-wrapper', () => {
    const wrapper = shallow(<Map {...emptyProps} />);

    expect(wrapper.is('.google-map-wrapper')).to.equal(true);
  });

  it('does not render a <MapMarker /> component without a valid domainData or userData prop', () => {
  const wrapper = shallow(<Map {...emptyProps} />);

  expect(wrapper.find('MapMarker')).to.have.length(0);
  });

  it('renders a single <MapMarker /> component with only a valid domainData prop', () => {
    const wrapper = shallow(<Map {...domainProps} />);

    expect(wrapper.find('MapMarker')).to.have.length(1);
  });

  it('renders a single <MapMarker /> component with only a valid userData prop', () => {
  const wrapper = shallow(<Map {...userProps} />);

  expect(wrapper.find('MapMarker')).to.have.length(1);
  });

  it('renders two <MapMarker /> components with valid domainData & userData props', () => {
    const wrapper = shallow(<Map {...domainAndUserProps} />);

    expect(wrapper.find('MapMarker')).to.have.length(2);
  });

});
