import React from 'react';
import { useTranslation } from 'react-i18next';

import styles from 'scss/modules/Authentification/Button.module.scss';

type ButtonProps = {
	handleClick: (email: string, password: string) => void;
	email: string;
	password: string;
}

const Button: React.FC<ButtonProps> = ({ handleClick, email, password }) => {
	const { t } = useTranslation();

	return (
		<button className={styles.btn} type='button' onClick={() => handleClick(email, password)}>
			{ t("authContinue") }
		</button>
	)
}

export default Button;
