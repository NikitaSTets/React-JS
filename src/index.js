import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import PropsValidation from './components/PropsValidation/PropsValidation';
import ContextTest from './components/ContextTest/ContextTest';

ReactDOM.render(
	<>
	 	<ContextTest />
		<PropsValidation name="dsa" />
	</>,
	document.getElementById('root')
);
