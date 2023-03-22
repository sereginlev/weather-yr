import React from 'react';

import styles from 'scss/modules/Home/Main/Table/Hourly/Item.module.scss';

import windDirection from 'assets/icons/common icons/wind-direction.svg';

function Item({ el }) {
	return (
		<li className={styles.root}>
			<span className={styles.time}>{new Date(el.time).getHours()}</span>
			<div className={styles.weather}>
				<img src={el.condition.icon} alt={el.condition.text} />
			</div>
			<span className={styles.temp}>{Math.round(el.temp_c)}°</span>
			<span className={styles.precip}>
				{Math.round(el.precip_mm) === 0 ? null : Math.round(el.precip_mm)}
			</span>
			<span className={styles.wind}>
				{Math.round(el.wind_kph * 0.27)}
				<img className={styles.icon} src={windDirection} alt='Wind direction' style={{ transform: `rotate(${el.wind_degree}deg)` }} />
			</span>
			<span className={styles.condition}>{el.condition.text}</span>
		</li>
	)
}

export default Item;
