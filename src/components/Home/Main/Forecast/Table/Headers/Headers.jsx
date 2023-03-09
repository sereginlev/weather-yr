import React from 'react';

import './Headers.scss';

function Headers() {
	return (
		<div className='table__headers headers'>
			<div className='headers__empty empty'></div>

			<div className='headers__times times'>
				<p className='times__text text'>Night</p>
				<p className='times__text text'>Morning</p>
				<p className='times__text text'>Afternoon</p>
				<p className='times__text text'>Evening</p>
			</div>

			<div className='headers__weather weather'>
				<p className='weather__text text'>Max/min temp.</p>
				<p className='weather__text text'>Precip.</p>
				<p className='weather__text text'>Wind</p>
			</div>

			<div className='headers__empty empty'></div>
		</div>
	)
}

export default Headers;
