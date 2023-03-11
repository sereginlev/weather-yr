import React from 'react';

import './OpenHourlyForecast.scss';

import arrowRight from 'assets/icons/common icons/arrow-right.svg';

function Hourly() {
  return (
	 <div className='item__open open'>
		<p className='open__text'>Open hourly forecast</p>
		<img className='open__icon' src={arrowRight} alt='Open hourly forecast' />
	 </div>
  )
}

export default Hourly;
