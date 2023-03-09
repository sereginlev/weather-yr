import React from 'react';

import './Table.scss';

import Headers from './Headers/Headers';
import Days from './Days/Days';
import Periods from './Periods/Periods';
import Values from './Values/Values';
import Open from './Open/Open';

function Table({ forecast }) {
	const [isHourly, setIsHourly] = React.useState('');
	// forecast !== undefined && console.log(forecast.forecastday);

	return (
		<div className='table'>
			<Headers />

			<ul className='table__list list'>
				{
					forecast !== undefined &&
					forecast.forecastday.map((item, index) => (
						<li className='list__item item' key={index}>
							<Days item={item} />
							<Periods item={item} />
							<Values item={item} />
							<Open />
						</li>
					))
				}
			</ul>
		</div>
	)
}

export default Table;
