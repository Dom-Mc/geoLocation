import React from 'react';
import { Icon } from 'semantic-ui-react';

const LocationHelp = ({ categoryTitle, ispValue }) => {

  const displayAlert = () => {
    const now = new Date();
    alert(`This is your ${categoryTitle} from from ISP ${ispValue} at ${now}`);
  };

  return (
    <span onClick={displayAlert}>
      <Icon name="question circle" />
    </span>
  );
};

LocationHelp.propTypes = {
  categoryTitle: React.PropTypes.string.isRequired,
  ispValue: React.PropTypes.string.isRequired
};

export default LocationHelp;
