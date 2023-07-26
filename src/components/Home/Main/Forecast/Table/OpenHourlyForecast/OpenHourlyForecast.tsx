import React from 'react';
import { useTranslation } from 'react-i18next';

import styles from 'scss/modules/Home/Main/Table/OpenHourlyForecast.module.scss';

import arrowRight from 'assets/icons/common icons/arrow-right.svg';

const Hourly: React.FC = () => {
	const { t } = useTranslation();

	return (
		<div className={styles.root}>
			<p className={styles.text}>
				{ t("openHourlyForecast") }
			</p>
			<img className={styles.icon} src={arrowRight} alt='Open hourly forecast' />
		</div>
	)
}

export default Hourly;
