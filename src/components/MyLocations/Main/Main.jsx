import React from 'react';
import { useTranslation } from 'react-i18next';

import styles from 'scss/modules/MyLocations/Main/Main.module.scss';

import Table from './Table/Table';

function Main() {
	const { t } = useTranslation();

	return (
		<div className={styles.root}>
			<div className={styles.container}>
				<h1 className={styles.title}>{ t("mylocations") }</h1>
				<Table />
			</div>
		</div>
	)
}

export default Main;