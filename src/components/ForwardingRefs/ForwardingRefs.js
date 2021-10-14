import React from 'react';
import './ForwardingRefs.css';

const ForwardingRefs = React.forwardRef((props, ref) => (
  <button ref={ref} className="FancyButton" onClick={props.onClick}>
    {props.children}
  </button>
));

export default ForwardingRefs;