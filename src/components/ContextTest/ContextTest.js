import React from 'react';
import PropTypes from 'prop-types';
import './ContextTest.css';
import { Button } from 'react-bootstrap';

const ThemeContext = React.createContext('light');

const ContextTest = () => (

  <ThemeContext.Provider value="dark">
     <div>
      <ThemedButton />
    </div>
  </ThemeContext.Provider>
);


class ThemedButton extends React.Component {
  // Assign a contextType to read the current theme context.
  // React will find the closest theme Provider above and use its value.
  // In this example, the current theme is "dark".
  static contextType = ThemeContext;
  render() {
    return <Button theme={this.context}>Button</Button>;
  }
}

ContextTest.propTypes = {};

ContextTest.defaultProps = {};

export default ContextTest;
