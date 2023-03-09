import React from 'react';
import { Link } from 'react-router-dom';
import { getAuth, sendPasswordResetEmail } from "firebase/auth";

import './Main.scss';

import Invalid from '../Invalid/Invalid';

function Main() {
	const [email, setEmail] = React.useState('');// состояние инпута для ввода почты
	const [isSended, setIsSended] = React.useState(false); // показать, что письмо с паролем отправлено
	const [isInvalid, setIsInvalid] = React.useState(false); // показать ошибку при неверно введенной почте

	//===отправить письмо с паролем на указанную почту===================================================================================
	const handleResetPassword = (email) => {
		const auth = getAuth();
		sendPasswordResetEmail(auth, email)
			.then(() => setIsSended(!isSended))
			.catch((error) => {
				setIsInvalid(true);
				console.log(error.code);
				console.log(error.message);
			});
	}

	return (
		<div className='main-auth'>
			{
				isSended ?
					<>
						<p className='main-auth__text'>We have sent an email to your email with further instructions. </p>
						<Link to='/auth' className='main__btn' type='button'>Continue</Link>
					</>
					:
					<>
						<p className='main-auth__text'>Please, enter your email specified at registration.</p>

						<input className='main-auth__input' type='email' value={email} onChange={(e) => setEmail(e.target.value)} />

						<button className='main-auth__btn' type='button' onClick={() => handleResetPassword(email)}>Continue</button>
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
