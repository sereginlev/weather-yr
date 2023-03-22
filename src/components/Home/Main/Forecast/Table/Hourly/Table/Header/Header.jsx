import React from 'react';
import { useTranslation } from 'react-i18next';

import styles from 'scss/modules/Home/Main/Table/Hourly/Header.module.scss';

function Header() {
	const { t } = useTranslation();

	return (
		<div className={styles.root}>
			<p className={styles.time}>{t("timeHourly")}</p>
			<p className={styles.weather}>{t("weatherHourly")}</p>
			<p className={styles.temp}>{t("tempHourly")}</p>
			<p className={styles.precip}>{t("precipHourly")}</p>
			<p className={styles.wind}>{t("windHourly")}</p>
			<p className={styles.condition}>{t("conditionHourly")}</p>
		</div>
	)
}

export default Header;
