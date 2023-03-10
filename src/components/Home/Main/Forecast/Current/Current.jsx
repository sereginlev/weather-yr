import React from 'react';

import './Current.scss';

import recent from 'assets/icons/common icons/recent.svg';
import temp from 'assets/icons/common icons/temperature.svg';
import precip from 'assets/icons/common icons/precipitation.svg';
import wind from 'assets/icons/common icons/wind.svg';
import windDirection from 'assets/icons/common icons/wind-direction.svg';

function Current({ current }) {

	return (
		<div className='current'>
			<div className='current__hero'>
				<img className='hero__icon' src={recent} alt='Current conditions' />
				<h3 className='hero__title'>Current conditions</h3>
			</div>

			{
				current !== undefined &&
				<div className='current__block'>
					<img className='block__icon' src={current.condition.icon} alt={current.condition.text} />

					<div className='block__temp'>
						<img className='temp__icon' src={temp} alt='Temperature icon' />
						<span className='temp__real'>{Math.round(current.temp_c)}°</span>
						<p className='temp__text'>Feels like <span className='temp__feels'>{Math.round(current.feelslike_c)}°</span></p>
					</div>

					<div className='block__precip'>
						<img className='precip__icon' src={precip} alt='Precipitation icon' />
						<span className='precip__value'>{Math.round(current.precip_mm)}</span>
						<p className='precip__measure'>mm</p>
					</div>

					<div className='block__wind'>
						<img className='wind__icon' src={wind} alt='Wind icon' />
						<span className='wind__value'>{Math.round(current.wind_kph * 0.27)}</span>
						<p className='wind__measure'>m/s</p>
						<img className='wind__direction' src={windDirection} alt='Wind direction' style={{ transform: `rotate(${current.wind_degree}deg)` }} />
					</div>
				</div>
			}
		</div>
	)
}

export default Current;
