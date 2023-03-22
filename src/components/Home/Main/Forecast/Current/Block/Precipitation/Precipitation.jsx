import React from 'react';
import { useTranslation } from 'react-i18next';

import styles from 'scss/modules/Home/Main/Current/Block/Precipitation.module.scss';

import precip from 'assets/icons/common icons/precipitation.svg';

function Precipitation({ current }) {
	const { t } = useTranslation();

	return (
		<div className={styles.root}>
			<img className={styles.icon} src={precip} alt='Precipitation icon' />
			<span className={styles.value}>
				{Math.round(current.precip_mm)}
			</span>
			<p className={styles.measure}>
				{ t("mm") }
			</p>
		</div>
	)
}

export default Precipitation;
