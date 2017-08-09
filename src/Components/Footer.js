import React from 'react';

const getCurrentYear = function() {
  return new Date().getFullYear();
}();

const Footer = () => (
  <footer className="footer">
    <p>&copy;{getCurrentYear} GeoLocation</p>
  </footer>
);

export default Footer;
