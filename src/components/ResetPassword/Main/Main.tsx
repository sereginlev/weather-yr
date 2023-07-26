import React from 'react';
import { Link } from 'react-router-dom';
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import { useTranslation } from 'react-i18next';

import styles from 'scss/modules/Authentification/Main.module.scss';

import Invalid from '../Invalid/Invalid';

const Main: React.FC = () => {
	const { t } = useTranslation();

	const [email, setEmail] = React.useState('');// состояние инпута для ввода почты
	const [isSended, setIsSended] = React.useState(false); // показать, что письмо с паролем отправлено
	const [isInvalid, setIsInvalid] = React.useState(false); // показать ошибку при неверно введенной почте

	//===отправить письмо с паролем на указанную почту===================================================================================
	const handleResetPassword = (email: string) => {
		const auth = getAuth();
		sendPasswordResetEmail(auth, email)
			.then(() => {
				setIsSended(!isSended);
				setIsInvalid(false);
			})
			.catch((error) => {
				setIsInvalid(true);
				console.log(error.code);
				console.log(error.message);
			});
	}

	return (
		<div className={styles.root}>
			{
				isSended ?
					<>
						<p className={styles.text}>{ t("authForgotPasswordConfirm") }</p>
						<Link to='/auth' className={styles.btn} type='button'>{ t("authContinue") }</Link>
					</>
					:
					<>
						<p className={styles.text}>{ t("authForgotPasswordText") }</p>

						<input className={styles.input} type='email' value={email} onChange={(e) => setEmail(e.target.value)} />

						<button className={styles.btn} type='button' onClick={() => handleResetPassword(email)}>{ t("authContinue") }</button>
					</>
			}

			{
				isInvalid &&
				<Invalid />
			}
		</div>
	)
}

export default Main;
