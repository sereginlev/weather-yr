import React from 'react';

import 'components/Authentification/Main/Form/Invalid/Invalid.scss';

function Invalid({ error }) {
	return (
		<>
			{
				error === 'Firebase: Password should be at least 6 characters (auth/weak-password).' &&
				<p className='invalid'>Password should be at least 6 characters.</p>
			}

			{
				error === 'Firebase: Error (auth/email-already-in-use).' &&
				<p className='invalid'>Email already in use.</p>
			}

			{
				error === 'Firebase: Error (auth/invalid-email).' &&
				<p className='invalid'>Invalid email.</p>
			}

			{
				error === "Passwords don't match, please try again." &&
				<p className='invalid'>Passwords don't match, please try again.</p>
			}
		</>
	)
}

export default Invalid;
