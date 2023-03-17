import React from 'react';
import { useTranslation } from 'react-i18next';

import './Table.scss';

import windDirection from 'assets/icons/common icons/wind-direction.svg';

function Table({ item, date }) {
	const { t } = useTranslation();
	const currentHour = new Date().getHours();
	const currentDate = new Date().getDate();

	return (
		<div className='hourly__table hourly-table'>
			<div className='hourly-table__header'>
				<p className='time'>{ t("timeHourly") }</p>
				<p className='weather'>{ t("weatherHourly") }</p>
				<p className='temp'>{ t("tempHourly") }</p>
				<p className='precip'>{ t("precipHourly") }</p>
				<p className='wind'>{ t("windHourly") }</p>
				<p className='condition'>{ t("conditionHourly") }</p>
			</div>

			<ul className='hourly-table__values'>
				{
					currentDate === new Date(date).getDate() ?
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
					:
					item.map((el, i) => (
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
