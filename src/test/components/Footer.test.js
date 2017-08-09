// Libs
import { expect } from 'chai';
import { shallow } from 'enzyme';
import React from 'react';

// Components
import Footer from '../../Components/Footer';

describe('<Footer /> component', () => {
  let currentYear;

  before(() => {
    currentYear = new Date().getFullYear();
  });

  it('renders a <footer>', () => {
    const wrapper = shallow(<Footer />);

    expect(wrapper.is('footer')).to.equal(true);
  });

  it('renders the correct copywrite data', () => {
    const wrapper = shallow(<Footer />);

    expect(wrapper.find('p').html()).to.equal(
      `<p>©${currentYear} GeoLocation</p>`
    );
  });
});
