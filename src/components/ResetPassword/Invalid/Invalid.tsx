import React from 'react';
import { useTranslation } from 'react-i18next';

import styles from 'scss/modules/Authentification/Invalid.module.scss';

const Invalid: React.FC = () => {
	const { t } = useTranslation();

	return (
		<p className={styles.invalid}>{ t("invalidEmail") }</p>
	)
}

export default Invalid;
