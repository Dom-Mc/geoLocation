// Libs
import { expect } from 'chai';
import { shallow, render } from 'enzyme';
import React from 'react';

// Components
import Navbar from '../../Components/Navbar';

describe('<Navbar /> component', () => {

  // Setup
    let wrapper;

    beforeEach(() => {
      wrapper = shallow(<Navbar />);
    });

    it("renders a site title with the text 'GeoLocation'", () => {
      const wrapper = render(<Navbar />);
      const siteTitle = 'GeoLocation';

      expect(wrapper.find('.logo span').text().trim()).to.equal(siteTitle);
    });

    describe('Root Component: <Menu />', () => {
      it('renders as the root component', () => {
        expect(wrapper.is('Menu')).to.equal(true);
      });

      it('renders a single instance', () => {
        expect(wrapper.find('Menu').length).to.equal(1);
      });
    });

    it('renders two <MenuMenu /> components', () => {
      expect(wrapper.find('MenuMenu').length).to.equal(2);
    });

    it('renders three <MenuItems /> components', () => {
      expect(wrapper.find('MenuItem').length).to.equal(3);
    });

    it('renders one <TiLocation /> component', () => {
      expect(wrapper.find('TiLocation').length).to.equal(1);
    });

    it('Website Location', () => {
      expect(wrapper.find('[name="Website Location"]').length).to.equal(1);
    });

    it('href', () => {
      // let menuItem = wrapper.find('[name="Website Location"]');
      expect(wrapper.find('[href="#website-location"]').length).to.equal(1);
    });

    it('User Location', () => {
      expect(wrapper.find('[name="User Location"]').length).to.equal(1);
    });
});
