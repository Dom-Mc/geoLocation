// Libs
import { expect } from 'chai';
import { shallow } from 'enzyme';
import React from 'react';

// Components
import MapData from '../../Components/MapData';

describe('<MapData /> component', () => {

  // Setup
  let emptyProps;
  let domainProps;
  let userProps;
  // const API_KEY = 'jdsafkjsdkajfdsfj23247180sd'
  // const defaultZoomValue = 4;

  before(() =>{
    emptyProps = {
      domain: {
        lat: '',
        lon: ''
      },
      user: {
        lat: '',
        lon: ''
      }
    };

    domainProps = {
      domain: {
        lat: 'foo',
        lon: 'bar'
      },
      user: {
        lat: '',
        lon: ''
      }
    };

    userProps = {
      domain: {
        lat: '',
        lon: ''
      },
      user: {
        lat: 'foo',
        lon: 'bar'
      }
    };
  });

  it('contains the prop domain', () => {
    const wrapper = shallow(<MapData {...emptyProps} />);

    expect(wrapper.props().domain).to.be.defined;
  });

  it('contains the prop user', () => {
    const wrapper = shallow(<MapData {...emptyProps} />);

    expect(wrapper.props().user).to.be.defined;
  });

  it('renders <DomainError /> when props are empty', () => {
    const wrapper = shallow(<MapData {...emptyProps} />);

    expect(wrapper.find('DomainError')).to.have.length(1);
  });

  it('renders a <Map /> component with a valid domain prop/>', () => {
    const wrapper = shallow(<MapData {...domainProps} />);
    expect(wrapper.find('Map')).to.have.length(1);
  });

  it('renders a <Map /> component with a valid user prop/>', () => {
    const wrapper = shallow(<MapData {...userProps} />);
    expect(wrapper.find('.map-container')).to.have.length(1);
  });
});
