import React from 'react';
import { useTranslation } from 'react-i18next';

import styles from 'scss/modules/Authentification/Invalid.module.scss';

type InvalidProps = {
	error: string;
}

const Invalid: React.FC<InvalidProps> = ({ error }) => {
	const { t } = useTranslation();

	return (
		<>
			{
				error === 'Firebase: Password should be at least 6 characters (auth/weak-password).' &&
				<p className={styles.invalid}>{ t("invalidPasswordCharacters") }</p>
			}

			{
				error === 'Firebase: Error (auth/email-already-in-use).' &&
				<p className={styles.invalid}>{ t("invalidEmailAlreadyInUse") }</p>
			}

			{
				error === 'Firebase: Error (auth/invalid-email).' &&
				<p className={styles.invalid}>{ t("invalidEmail") }</p>
			}

			{
				error === "Passwords don't match, please try again." &&
				<p className={styles.invalid}>{ t("invalidPasswordsMatch") }</p>
			}
		</>
	)
}

export default Invalid;
