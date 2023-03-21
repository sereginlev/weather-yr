import React from 'react';
import { useTranslation } from 'react-i18next';

import styles from 'scss/modules/Authentification/Button.module.scss';

function Button({ handleClick, email, password }) {
	const { t } = useTranslation();

	return (
		<button className={styles.btn} type='button' onClick={() => handleClick(email, password)}>
			{ t("authContinue") }
		</button>
	)
}

export default Button;
