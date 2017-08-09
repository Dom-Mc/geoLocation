import React from 'react';
import DomainForm from './DomainForm';
import FaAngleDown from 'react-icons/lib/fa/angle-down';

const Header = ({ domainQuery }) => (
  <header className="content-container domain">
    <h1 className="site-title">GeoLocation</h1>

    <section id="website-location" className="section-padding domain">
      <h2 className="section-headline--domain">
        Find the geolocation of your favorite website
      </h2>
      <DomainForm onFind={domainQuery} />
    </section>

    <a href="#map" className="arrow">
      <FaAngleDown className="arrow-icon--down" />
    </a>
  </header>
);

Header.propTypes = {
  domainQuery: React.PropTypes.func.isRequired
};

export default Header;
