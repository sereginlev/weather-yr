import React from 'react';
import { useTranslation } from 'react-i18next';

import styles from 'scss/modules/Home/Main/Table/Values.module.scss';

import { Forecastday } from 'modules/current';

type ValuesProps = {
	item: Forecastday;
}

const Values: React.FC<ValuesProps> = ({ item }) => {
	const { t } = useTranslation();

	return (
		<div className={styles.root}>
			<p className={styles.temp}>
				<span className={styles.text}>{Math.round(item.day.maxtemp_c)}°</span> / <span className={styles.text}>{Math.round(item.day.mintemp_c)}°</span>
			</p>

			{
				Math.round(item.day.totalprecip_mm) === 0 ?
					<></>
					:
					<div className={styles.precip}>
						<span className={styles.precipValue}>{Math.round(item.day.totalprecip_mm)}</span> <span className={styles.precipText}>{t("mm")}</span>
					</div>
			}

			<div className={styles.wind}>
				<span className={styles.windValue}>{Math.round(item.day.maxwind_kph * 0.27)}</span> <span className={styles.windText}>{t("m/s")}</span>
			</div>

		</div>
	)
}

export default Values;
