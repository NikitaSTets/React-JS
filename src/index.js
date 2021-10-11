import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import PropsValidation from './components/PropsValidation/PropsValidation';
import ContextTest from './components/ContextTest/ContextTest';
import PerAllTests from './components/PerAllTests/PerAllTests'
import App from './components/App/App';
import HooksTest from './components/HooksTestComponent/HooksTestComponent'

import store from './app/store'
import { Provider } from 'react-redux'

// You can now get a ref directly to the DOM button:
ReactDOM.render(
	<Provider store={store}>
		<HooksTest />
		{/* <App /> */}
		<ContextTest />
		<PropsValidation name="dsa" />
		<PerAllTests />
	</Provider>,

	document.getElementById('root')
);