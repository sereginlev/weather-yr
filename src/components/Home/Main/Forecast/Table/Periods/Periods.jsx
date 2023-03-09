import React from 'react';

import './Periods.scss';

function Periods({ item }) {
	const night = item.hour[0].condition.icon;
	const nightText = item.hour[0].condition.text;

	const morning = item.hour[6].condition.icon;
	const morningText = item.hour[6].condition.text;

	const afternoon = item.hour[12].condition.icon;
	const afternonnText = item.hour[12].condition.text;

	const evening = item.hour[18].condition.icon;
	const eveningText = item.hour[18].condition.text;

	return (
		<div className='item__periods periods'>
			<img className='periods__icon' src={night} alt={nightText}/>
			<img className='periods__icon' src={morning} alt={morningText}/>
			<img className='periods__icon' src={afternoon} alt={afternonnText}/>
			<img className='periods__icon' src={evening} alt={eveningText}/>
		</div>
	)
}

export default Periods;
