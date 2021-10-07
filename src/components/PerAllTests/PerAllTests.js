import React from 'react';
import './PerAllTests.css';
import ForwardingRefs from '../ForwardingRefs/ForwardingRefs'

class PerAllTests extends React.Component {
  componentDidMount() {
    // set el height and width etc.
  }

  render() {
    const ref = React.createRef();

    return (
      <>
        <ForwardingRefs ref={ref} onClick={() => { ref.current.style.width = "100px" }}>Click me!</ForwardingRefs>
      </>
    );
  }
};

PerAllTests.defaultProps = {};

export default PerAllTests;