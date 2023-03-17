import React from 'react';
import { useTranslation } from 'react-i18next';

import 'components/Authentification/Main/Form/Invalid/Invalid.scss';

function Invalid({ error }) {
	const { t } = useTranslation();

	return (
		<>
			{
				error === 'Firebase: Password should be at least 6 characters (auth/weak-password).' &&
				<p className='invalid'>{ t("invalidPasswordCharacters") }</p>
			}

			{
				error === 'Firebase: Error (auth/email-already-in-use).' &&
				<p className='invalid'>{ t("invalidEmailAlreadyInUse") }</p>
			}

			{
				error === 'Firebase: Error (auth/invalid-email).' &&
				<p className='invalid'>{ t("invalidEmail") }</p>
			}

			{
				error === "Passwords don't match, please try again." &&
				<p className='invalid'>{ t("invalidPasswordsMatch") }</p>
			}
		</>
	)
}

export default Invalid;
