import React from 'react';
import { Link } from 'react-router-dom';
import { getAuth, createUserWithEmailAndPassword, sendEmailVerification } from "firebase/auth";
import { useAppDispatch } from 'hook';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import styles from 'scss/modules/Authentification/Main.module.scss';

import Form from 'components/SignUp/Main/Form/Form';
import Invalid from './Form/Invalid/Invalid';

import { setUser } from 'redux/slices/userSlice';

const Main: React.FC = () => {
	const { t } = useTranslation();
	const dispatch = useAppDispatch();
	const navigate = useNavigate();

	const [isInvalid, setIsInvalid] = React.useState(false); // показать ошибку, если она есть при вводе почты или пароля
	const [error, setError] = React.useState(''); // текст ошибки
	const [password, setPassword] = React.useState(''); // состояние инпута для пароля
	const [confirm, setConfirm] = React.useState(''); // состояние инпута подтверждения пароля


	//===регистрация с помощью почты и пароля==============================================================================================
	const handleSignUp = (email: string, password: string) => {
		const auth = getAuth();

		createUserWithEmailAndPassword(auth, email, password)
			.then(({ user }: any) => {
				if (password === confirm) {
					dispatch(setUser({
						email: user.email.toLowerCase(),
						token: user.accessToken,
						id: user.uid,
						isAuth: true,
						favoriteItems: [],
						locations: []
					}));

					sendEmailVerification(auth.currentUser!)
						.then(() => {
							navigate('/confirm');
						})
						.catch(error => {
							setIsInvalid(true);
							setError(error.message);
						});
				} else {
					setIsInvalid(true);
					setError("Passwords don't match, please try again.");
				}
			})
			.catch(error => {
				setIsInvalid(true);
				setError(error.message);
			})
	}

	return (
		<div className={styles.root}>
			<div className={styles.block}>
				<h1 className={styles.title}>{ t("authCreateAccount") }</h1>

				<Form handleClick={handleSignUp} password={password} setPassword={setPassword} confirm={confirm} setConfirm={setConfirm} />

				{
					isInvalid &&
					<Invalid error={error} />
				}

				<Link className={styles.link} to='/auth'>{ t("authAlreadyHaveAnAccount") }</Link>

			</div>
		</div>
	)
}

export default Main;
