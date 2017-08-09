// Libs
import { expect } from 'chai';
import { shallow, mount, render } from 'enzyme';
import React from 'react';
import sinon from 'sinon';

// Components
import App from '../../App';

describe('<App /> component', () => {

  it("sets default state of domainLocationData equal to an empty string", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.state('domainLocationData')).to.equal('');
  });

  it("sets default state of domainLocationData equal to an empty string", () => {
    const wrapper = shallow(<App />);

    expect(wrapper.state('userLocationData')).to.equal('');
  });

  it('renders a single .background-image class', () => {
    const wrapper = shallow(<App />);

    expect(wrapper.find('.background-image').length).to.equal(1);
  });

  describe('children components', () => {
    it('renders a <Navbar /> component', () => {
      const wrapper = shallow(<App />);

      expect(wrapper.find('Navbar').length).to.equal(1);
    });

    it('renders a <Header /> component', () => {
      const wrapper = shallow(<App />);

      expect(wrapper.find('Header').length).to.equal(1);
    });

    it('renders two <Button /> components', () => {
      const wrapper = shallow(<App />);

      expect(wrapper.find('Button').length).to.equal(2);
    });

  });

  describe('<Button /> components', () => {
    it('renders two <Button /> components', () => {
      const wrapper = shallow(<App />).find('Button');
      expect(wrapper.find('Button').length).to.equal(2);
    });

    it("displays a button with the text 'My location'", () => {
      const wrapper = render(<App />).find('Button').eq(1);

      expect(wrapper.text()).to.contain('My location');
    });

    it("displays a button with the text 'Reset location'", () => {
      const wrapper = render(<App />).find('Button').eq(2);

      expect(wrapper.text()).to.contain('Reset location');
    });

    it("clicking the 'Reset location' button calls clearUserLocation", () => {
      const wrapper = mount(<App />);
      const spy = sinon.spy(wrapper.instance(), "clearUserLocation");

      wrapper.update();
      wrapper.find("Button").at(2).simulate('click');
      expect(spy.calledOnce).to.be.true;
    });
  });
});
