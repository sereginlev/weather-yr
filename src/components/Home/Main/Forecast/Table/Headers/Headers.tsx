import React from 'react';
import { useTranslation } from 'react-i18next';

import styles from 'scss/modules/Home/Main/Table/Headers.module.scss';

const Headers: React.FC = () => {
	const { t } = useTranslation();

	return (
		<div className={styles.root}>

			<div className={styles.times}>
				<p className={styles.text}>{ t("night") }</p>
				<p className={styles.text}>{ t("morning") }</p>
				<p className={styles.text}>{ t("afternoon") }</p>
				<p className={styles.text}>{ t("evening") }</p>
			</div>

			<div className={styles.weather}>
				<p className={styles.text}>{ t("temp") }</p>
				<p className={styles.text}>{ t("precip") }</p>
				<p className={styles.text}>{ t("wind") }</p>
			</div>

		</div>
	)
}

export default Headers;
