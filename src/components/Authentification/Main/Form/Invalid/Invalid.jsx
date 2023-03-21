import React from 'react';
import { useTranslation } from 'react-i18next';

import styles from 'scss/modules/Authentification/Invalid.module.scss';

function Invalid() {
	const { t } = useTranslation();

	return (
		<p className={styles.invalid}>{ t("invalidEmailOrPassword") }</p>
	)
}

export default Invalid;
