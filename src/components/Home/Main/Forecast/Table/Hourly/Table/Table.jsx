import React from 'react';

import './Table.scss';

import windDirection from 'assets/icons/common icons/wind-direction.svg';

function Table({ item }) {
	const currentHour = new Date().getHours();
	console.log(item)

	return (
		<div className='hourly__table hourly-table'>
			<div className='hourly-table__header'>
				<p className='time'>Time</p>
				<p className='weather'>Weather</p>
				<p className='temp'>Temperature, °</p>
				<p className='precip'>Precipitation, mm</p>
				<p className='wind'>Wind speed, m/s</p>
				<p>Condition</p>
			</div>

			<ul className='hourly-table__values'>
				{
					item.map((el, i) => (
						currentHour <= new Date(el.time).getHours() &&
						<li key={i} >
							<span className='time'>{new Date(el.time).getHours()}</span>
							<div className='weather'>
								<img src={el.condition.icon} alt={el.condition.text} />
							</div>
							<span className='temp'>{Math.round(el.temp_c)}°</span>
							<span className='precip'>
								{Math.round(el.precip_mm) === 0 ? null : Math.round(el.precip_mm)}
							</span>
							<span className='wind'>
								{Math.round(el.wind_kph * 0.27)}
								<img className='wind__icon' src={windDirection} alt='Wind direction' style={{ transform: `rotate(${el.wind_degree}deg)` }} />
							</span>
							<span className='condition'>{el.condition.text}</span>
						</li>
					))
				}
			</ul>
		</div >
	)
}

export default Table;
