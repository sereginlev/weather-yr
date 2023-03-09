import React from 'react';

import './Open.scss';

import arrowRight from 'assets/icons/common icons/arrow-right.svg';

function Hourly() {
  return (
	 <div className='item__hourly hourly'>
		<p className='hourly__text'>Open hourly forecast</p>
		<img className='hourly__icon' src={arrowRight} alt='Open hourly forecast' />
	 </div>
  )
}

export default Hourly;
