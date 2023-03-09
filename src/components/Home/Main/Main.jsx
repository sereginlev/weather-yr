import React from 'react';
import { useSelector } from 'react-redux';

import './Main.scss';

import Forecast from './Forecast/Forecast';

function Main() {

	return (
		<div className='main _container'>
				<Forecast />
		</div>
	)
}

export default Main;
