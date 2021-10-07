import React from 'react';
import PropTypes from 'prop-types';
import './ForwardingRefs.css';

const ForwardingRefs = React.forwardRef((props, ref) => (
  <button ref={ref} className="FancyButton" onClick={props.onClick}>
    {props.children}
  </button>
));

ForwardingRefs.propTypes = {};

ForwardingRefs.defaultProps = {};

export default ForwardingRefs;
