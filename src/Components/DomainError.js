import React from 'react';
import { Message } from 'semantic-ui-react';

const DomainError = () => (
  <Message
    icon="warning sign"
    header="Error"
    content="No Results Found."
    error
  />
);

export default DomainError;
