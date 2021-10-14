import React from 'react';

import './ClassComponentRedux.css';
import store from '../../redux/store';

class ClassComponentRedux extends React.Component {
  constructor(props) {
    super();

    this.state = {
      posts: store.getState().posts
    }
  }

  componentDidMount() {
    this.unsubscribe = store.subscribe(() => {

      this.setState({
        posts: store.getState().posts
      })
    });
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  render() {
    return <h1>Количество постов =  {this.state.posts.length}</h1>;
  }
}

export default ClassComponentRedux;