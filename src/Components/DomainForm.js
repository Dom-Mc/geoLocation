import React from 'react';
import { Input } from 'semantic-ui-react';

const DomainForm = ({ onFind }) => {
  let _query;

  const validateSubmission = queryValue => {
    const url = queryValue.toLowerCase();
    const regexDomain =
      /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/;

    if (regexDomain.test(url)) {
      const domain = url.replace(/^https?\:\/\//, "");

      return domain.split('/')[0];
    }
  };

  const handleSubmit = event => {
    event.preventDefault();
    const submitValue = _query.inputRef.value;

    onFind(validateSubmission(submitValue));
    event.currentTarget.reset();
  };

  return (
    <form onSubmit={handleSubmit} className="domain-form">
      <Input
        type="text"
        icon="search"
        iconPosition="left"
        placeholder="Enter a website domain"
        action="Locate"
        fluid
        ref={(input) => _query = input}
      />
    </form>
  );
};

DomainForm.propTypes = {
  onFind: React.PropTypes.func.isRequired
};

export default DomainForm;
