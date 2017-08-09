import React from 'react';
import { Menu } from 'semantic-ui-react';
import TiLocation from 'react-icons/lib/ti/location';

const Navbar = () => (
  <Menu fixed="top">
    <Menu.Menu>
      <Menu.Item className="logo">
        <TiLocation className="logo--map-marker" />
        <span>GeoLocation</span>
      </Menu.Item>
    </Menu.Menu>

    <Menu.Menu position="right">
      <Menu.Item name="Website Location" href="#website-location" />
      <Menu.Item name="User Location" href="#user-location" />
    </Menu.Menu>
  </Menu>
);

export default Navbar;
