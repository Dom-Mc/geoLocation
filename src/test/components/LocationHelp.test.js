// Libs
import { expect } from 'chai';
import { shallow } from 'enzyme';
import React from 'react';

// Components
import LocationHelp from '../../Components/LocationHelp';

describe('<LocationHelp /> component', () => {

  // Setup
  let wrapper;

  beforeEach(() => {
    const minProps = {
      categoryTitle: '',
      ispValue: ''
    };
    wrapper = shallow(<LocationHelp {...minProps} />);
  });

  it('contains the prop categoryTitle', function () {
    expect(wrapper.props().categoryTitle).to.be.defined;
  });

  it('contains the prop ispValue', function () {
    expect(wrapper.props().ispValue).to.be.defined;
  });

});
