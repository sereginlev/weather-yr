import React from 'react';
import { useTranslation } from 'react-i18next';

import styles from 'scss/modules/Home/Main/Table/Hourly/Sun.module.scss';

import sunrise from 'assets/icons/common icons/color icons/sunrise.svg';
import sunset from 'assets/icons/common icons/color icons/sunset.svg';

function Sun({ astro }) {
	const { t } = useTranslation();

	return (
		<div className={styles.root}>
			<div className={styles.sun}>
				<p className={styles.text}>{ t("sunrise") }</p>
				<div className={styles.block}>
					<img className={styles.icon} src={sunrise} alt='Sunrise time' />
					<span className={styles.time}>{astro.sunrise}</span>
				</div>
			</div>
			<div className={styles.sun}>
				<p className={styles.text}>{ t("sunset") }</p>
				<div className={styles.block}>
					<img className={styles.icon} src={sunset} alt='Sunset time' />
					<span className={styles.time}>{astro.sunset}</span>
				</div>
			</div>
		</div>
	)
}

export default Sun;
