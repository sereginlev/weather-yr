import React from 'react';

import './Values.scss';

function Values({ item }) {

	return (
		<div className='item__values values'>
			<p className='values__temp temp'>
				<span className='temp__text'>{Math.round(item.day.maxtemp_c)}°</span> / <span className='temp__text'>{Math.round(item.day.mintemp_c)}°</span>
			</p>

			{
				Math.round(item.day.totalprecip_mm) === 0 ?
					<></>
					:
					<div className='values__precip precip'>
						<span className='precip__value'>{Math.round(item.day.totalprecip_mm)}</span> <span className='precip__text'>mm</span>
					</div>
			}

			<div className='values__wind wind'>
				<span className='wind__value'>{Math.round(item.day.maxwind_kph * 0.27)}</span> <span className='wind__text'>m/s</span>
			</div>

		</div>
	)
}

export default Values;
