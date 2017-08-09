// Libs
import { expect } from 'chai';
import { shallow } from 'enzyme';
import React from 'react';

// Components
import MapMarker from '../../Components/MapMarker';

describe('<MapMarker /> component', () => {

  // Setup
  let wrapper;
  beforeEach(() => {
    const minProps = {
      bgColor: ''
    };
    wrapper = shallow(<MapMarker {...minProps} />);
  });

  it('renders a <div> root element', () => {
    expect(wrapper.is('div')).to.equal(true);
  });

  it('contains the prop bgColor', function () {
    expect(wrapper.props().bgColor).to.be.defined;
  });

  it('renders a single element with the class .map-marker', () => {
    expect(wrapper.find('.map-marker')).to.have.length(1);
  });

  it('renders a single element with the class .pulsate', () => {
    expect(wrapper.find('.pulsate')).to.have.length(1);
  });
});
