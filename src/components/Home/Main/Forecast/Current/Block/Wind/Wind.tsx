import React from 'react';
import { useTranslation } from 'react-i18next';

import styles from 'scss/modules/Home/Main/Current/Block/Wind.module.scss';

import wind from 'assets/icons/common icons/wind.svg';
import windDirection from 'assets/icons/common icons/wind-direction.svg';
import { Current } from 'modules/current';

type WindProps = {
	current: Current;
}

const Wind: React.FC<WindProps> = ({ current }) => {
	const { t } = useTranslation();

	return (
		<div className={styles.root}>
			<img className={styles.icon} src={wind} alt='Wind icon' />
			<span className={styles.value}>
				{Math.round(current.wind_kph * 0.27)}
			</span>
			<p className={styles.measure}>
				{t("m/s")}
			</p>
			<img className={styles.direction} src={windDirection} alt='Wind direction' style={{ transform: `rotate(${current.wind_degree}deg)` }} />
		</div>
	)
}

export default Wind;
