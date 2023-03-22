import React from 'react';
import { useTranslation } from 'react-i18next';

import './Table.scss';

import styles from 'scss/modules/Home/Main/Table/Hourly/Table.module.scss';

import Header from './Header/Header';

import windDirection from 'assets/icons/common icons/wind-direction.svg';

function Table({ item, date }) {
	const { t } = useTranslation();
	const currentHour = new Date().getHours();
	const currentDate = new Date().getDate();
	console.log(item)
	return (
		<div className='hourly__table hourly-table'>
			<Header />

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
