import React from 'react';

import './Periods.scss';

function Periods({ item }) {
	const night = item.hour[0].condition.icon;
	const nightText = item.hour[0].condition.text;
	const nightTime = new Date(item.hour[0].time).getHours();

	const morning = item.hour[6].condition.icon;
	const morningText = item.hour[6].condition.text;
	const morningTime = new Date(item.hour[6].time).getHours();

	const afternoon = item.hour[12].condition.icon;
	const afternoonText = item.hour[12].condition.text;
	const afternoonTime = new Date(item.hour[12].time).getHours();

	const evening = item.hour[18].condition.icon;
	const eveningText = item.hour[18].condition.text;
	const eveningTime = new Date(item.hour[18].time).getHours();

	const currentHour = new Date().getHours();
	const currentDate = new Date().getDate();
	const date = new Date(item.date).getDate();

	return (
		<div className='item__periods periods'>
			{
				currentHour >= morningTime && currentDate === date ? <div className='periods__icon empty'></div> : <img className='periods__icon night' src={night} alt={nightText} />
			}

			{
				currentHour >= afternoonTime && currentDate === date ? <div className='periods__icon empty'></div> : <img className='periods__icon morning' src={morning} alt={morningText} />
			}

			{
				currentHour >= eveningTime && currentDate === date ? <div className='periods__icon empty'></div> : <img className='periods__icon afternoon' src={afternoon} alt={afternoonText} />
			}

			{
				currentHour < nightTime && currentDate === date ? <div className='periods__icon empty'></div> : <img className='periods__icon evening' src={evening} alt={eveningText} />
			}

		</div>
	)
}

export default Periods;
