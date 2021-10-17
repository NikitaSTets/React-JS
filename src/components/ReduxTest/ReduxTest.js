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

const mapStateToProps = (state, ownProps) => {
  console.log('mapStateToProps', ownProps);

  return {
    count: state.counter.count,
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  console.log('mapDispatchToProps', ownProps);

  return {
    increaseCounter: () => dispatch(increaseCounter()),
    decreaseCounter: () => dispatch(decreaseCounter()),
    addTodo: (todo) => dispatch(addTodo(todo))
  }
}

const mergeProps = (stateProps, dispatchProps, ownProps) => ({
  ...ownProps,
  ...stateProps,
  ...dispatchProps,
})

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(ReduxTest);