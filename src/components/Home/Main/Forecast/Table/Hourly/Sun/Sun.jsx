import React from 'react';

import './Sun.scss';

import sunrise from 'assets/icons/common icons/color icons/sunrise.svg';
import sunset from 'assets/icons/common icons/color icons/sunset.svg';

function Sun({ astro }) {
	return (
		<div className='hourly-table__sun'>
			<div className='sun'>
				<p className='sun__text'>Sunrise</p>
				<div className='sun__block'>
					<img className='sun__icon' src={sunrise} alt='Sunrise time' />
					<span className='sun__time'>{astro.sunrise}</span>
				</div>
			</div>
			<div className='sun'>
				<p className='sun__text'>Sunset</p>
				<div className='sun__block'>
					<img className='sun__icon' src={sunset} alt='Sunset time' />
					<span className='sun__time'>{astro.sunset}</span>
				</div>
			</div>
		</div>
	)
}

export default Sun;
