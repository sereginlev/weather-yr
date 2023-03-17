import React from 'react';
import { Link } from 'react-router-dom';
import { getAuth, createUserWithEmailAndPassword, sendEmailVerification } from "firebase/auth";
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import Form from 'components/SignUp/Main/Form/Form';
import Invalid from './Form/Invalid/Invalid';

import { setUser } from 'redux/slices/userSlice.js';

function Main() {
	const { t } = useTranslation();
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const [isInvalid, setIsInvalid] = React.useState(false); // показать ошибку, если она есть при вводе почты или пароля
	const [error, setError] = React.useState(''); // текст ошибки
	const [password, setPassword] = React.useState(''); // состояние инпута для пароля
	const [confirm, setConfirm] = React.useState(''); // состояние инпута подтверждения пароля


	//===регистрация с помощью почты и пароля==============================================================================================
	const handleSignUp = (email, password) => {
		const auth = getAuth();

		createUserWithEmailAndPassword(auth, email, password)
			.then(({ user }) => {
				if (password === confirm) {
					dispatch(setUser({
						email: user.email.toLowerCase(),
						token: user.accessToken,
						id: user.uid,
						isAuth: true,
						favoriteItems: [],
						locations: []
					}));

					sendEmailVerification(auth.currentUser)
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
		<div className='main-auth'>
			<div className='main-auth__block'>
				<h1 className='block__title'>{ t("authCreateAccount")}</h1>

				<Form handleClick={handleSignUp} password={password} setPassword={setPassword} confirm={confirm} setConfirm={setConfirm} />

				{
					isInvalid &&
					<Invalid error={error} />
				}

				<Link className='block__link' to='/auth'>{ t("authAlreadyHaveAnAccount")}</Link>

			</div>
		</div>
	)
}

export default Main;
