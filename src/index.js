import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import './index.css';

import store from './redux/store.js'

import PropsValidation from './components/PropsValidation/PropsValidation';
import ContextTest from './components/ContextTest/ContextTest';
import PerAllTests from './components/PerAllTests/PerAllTests'
import HooksTest from './components/HooksTestComponent/HooksTestComponent'
import ReduxTest from './components/ReduxTest/ReduxTest';
import PostsList from './components/PostsList/PostsList';
import AddPostForm from './components/AddPostForm/AddPostForm';

// You can now get a ref directly to the DOM button:
ReactDOM.render(
	<Provider store={store}>
		<PostsList />
		<AddPostForm />
		<ReduxTest />
		<HooksTest />
		<ContextTest />
		<PropsValidation name="dsa" />
		<PerAllTests />
	</Provider>,
	document.getElementById('root')
);