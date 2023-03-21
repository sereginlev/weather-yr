import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import styles from 'scss/modules/Authentification/Main.module.scss';

function Main() {
	const { t } = useTranslation();

	return (
		<div className={styles.root}>
			<p className={styles.text}>{ t("authConfirmEmail") }</p>
			<Link className={styles.btn} to='/auth'>{ t("authContinue") }</Link>
		</div>
	)
}

export default Main;
