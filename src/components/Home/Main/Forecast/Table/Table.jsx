import React from 'react';

import './Table.scss';

import Headers from './Headers/Headers';
import Days from './Days/Days';
import Periods from './Periods/Periods';
import Values from './Values/Values';
import OpenHourlyForecast from './OpenHourlyForecast/OpenHourlyForecast';
import Hourly from './Hourly/Hourly';

function Table({ forecast }) {
	const [isHourly, setIsHourly] = React.useState(false);
	const [index, setIndex] = React.useState('');

	const onClickItem = (i) => {
		setIsHourly(!isHourly);
		setIndex(i);
	}

	return (
		<div className='table'>
			<Headers />

			<ul className='table__list list'>
				{
					forecast !== undefined &&
					forecast.forecastday.map((item, i) => (
						<li className='list__item item' key={i} onClick={() => onClickItem(i)}>
							<Days item={item} />
							<Periods item={item} />
							<Values item={item} />
							<OpenHourlyForecast />
						</li>
					))
				}
			</ul>
			
			{
				isHourly &&
				<Hourly setIsHourly={setIsHourly} item={forecast.forecastday[index]} forecast={forecast.forecastday} index={index} setIndex={setIndex}/>
			}
		</div>
	)
}

export default Table;
