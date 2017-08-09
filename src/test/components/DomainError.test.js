// Libs
import { expect } from 'chai';
import { render } from 'enzyme';
import React from 'react';

// Components
import DomainError from '../../Components/DomainError';

describe("<DomainError /> component", () => {
  it("renders an 'Error' message", () => {
    const wrapper = render(<DomainError />);
    expect(wrapper.find('div').text()).to.contain("Error");
  });

  it("contains '.alert' and '.alert-danger' class", () => {
    const wrapper = render(<DomainError />);
    expect(wrapper.find('.content')).to.have.length(1);
  });
  it("contains '.warning', '.sign', '.icon' classes", () => {
    const wrapper = render(<DomainError />);
    expect(wrapper.find('.warning.sign.icon')).to.have.length(1);
  });
});
