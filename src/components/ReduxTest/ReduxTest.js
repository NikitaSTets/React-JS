import React from 'react';
import { connect } from 'react-redux';

import './ReduxTest.css';

import {
  increaseCounter,
  decreaseCounter
} from '../../redux/Counter/counter.actions';

import { addTodo } from '../../redux/Todos/todo.actions';

const ReduxTest = (props) => (
  <div className='App'>
    <div>Count: {props.count}</div>
    <button onClick={() => {
      var a = { title: Date.now(), userId: 12 };
      props.addTodo(a);
    }}>Increase Count</button>
    <button onClick={() => props.decreaseCounter()}>Decrease Count</button>
  </div>
);

const mapStateToProps = state => {
  return {
    count: state.counter.count,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    increaseCounter: () => dispatch(increaseCounter()),
    decreaseCounter: () => dispatch(decreaseCounter()),
    addTodo: (todo) => dispatch(addTodo(todo))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ReduxTest);