import React from 'react';
import { useTranslation } from 'react-i18next';

import './OpenHourlyForecast.scss';

import arrowRight from 'assets/icons/common icons/arrow-right.svg';

function Hourly() {
	const { t } = useTranslation();

	return (
		<div className='item__open open'>
			<p className='open__text'>{ t("openHourlyForecast") }</p>
			<img className='open__icon' src={arrowRight} alt='Open hourly forecast' />
		</div>
	)
}

export default Hourly;
