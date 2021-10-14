import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import PropsValidation from './components/PropsValidation/PropsValidation';
import ContextTest from './components/ContextTest/ContextTest';
import PerAllTests from './components/PerAllTests/PerAllTests'
import HooksTest from './components/HooksTestComponent/HooksTestComponent'

// You can now get a ref directly to the DOM button:
ReactDOM.render(
	<>
		<HooksTest />
		<ContextTest />
		<PropsValidation name="dsa" />
		<PerAllTests />
	</>,
	document.getElementById('root')
);
