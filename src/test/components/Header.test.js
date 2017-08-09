// Libs
import { expect } from 'chai';
import { shallow } from 'enzyme';
import React from 'react';

// Components
import Header from '../../Components/Header';

describe('<Header /> component', () => {

  // Setup
  const siteTitle = "GeoLocation";
  let minProps;

  before(() => {
    minProps = {
      domainQuery: () => {}
    };
  });

  it('renders a <header>', () => {
    const wrapper = shallow(<Header {...minProps} />);

    expect(wrapper.is('header')).to.equal(true);
  });

  it("renders 'GeoLocation' for the site title", () => {
    const wrapper = shallow(<Header {...minProps} />);

    expect(wrapper.find('h1').text()).to.equal(siteTitle);
  });

  it("contains an anchor tag with an href pointing to '#map'", () => {
    const wrapper = shallow(<Header {...minProps} />);

    expect(wrapper.find('a[href="#map"]')).to.have.length(1);
  });

  describe('children components', () => {
    it('renders <DomainForm /> component', () => {
      const wrapper = shallow(<Header {...minProps} />);

      expect(wrapper.find('DomainForm')).to.have.length(1);
    });

    it('renders <FaAngleDown /> component', () => {
      const wrapper = shallow(<Header {...minProps} />);

      expect(wrapper.find('FaAngleDown')).to.have.length(1);
    });
  });
});
