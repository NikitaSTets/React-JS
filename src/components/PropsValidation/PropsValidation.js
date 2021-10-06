import React from 'react';
import PropTypes from 'prop-types';

import './PropsValidation.css';

const PropsValidation = ({name, age}) => (
  <div className="PropsValidation">
      <h1>Hello, {name} {age}</h1>
  </div>
);

PropsValidation.propTypes = {
  name: PropTypes.number.isRequired,
  age: PropTypes.number
};

PropsValidation.defaultProps = {};

export default PropsValidation;
