import React from 'react';
import { useTranslation } from 'react-i18next';

import styles from 'scss/modules/Home/Main/Current/Block/Temperature.module.scss';

import temp from 'assets/icons/common icons/temperature.svg';

function Temperature({ current }) {
	const { t } = useTranslation();

	return (
		<div className={styles.root}>
			<img className={styles.icon} src={temp} alt='Temperature icon' />
			<span className={styles.real}>
				{Math.round(current.temp_c)}°
			</span>
			<p className={styles.text}>
				{t("feelsLike")} <span className={styles.feels}>{Math.round(current.feelslike_c)}°</span>
			</p>
		</div>
	)
}

export default Temperature;
