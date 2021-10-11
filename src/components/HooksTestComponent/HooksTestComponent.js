import React, { useState, useEffect } from 'react';
import './HooksTestComponent.css';

const HooksTest = (props) => {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);

  useEffect(()=>{
    document.title = `You clicked ${count} times`;
  }, [count]);


  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}

HooksTest.defaultProps = {};

export default HooksTest;