// Libs
import { expect } from 'chai';
import { shallow } from 'enzyme';
import React from 'react';

// Components
import DomainForm from '../../Components/DomainForm';

describe('<DomainForm /> component', () => {

  // Setup
  let minProps;

  beforeEach(() => {
    minProps = {
      onFind: () => {}
    };
  });

  it('renders a <form> tag', () => {
    const wrapper = shallow(<DomainForm {...minProps} />);

    expect(wrapper.is('form')).to.equal(true);
  });

});
