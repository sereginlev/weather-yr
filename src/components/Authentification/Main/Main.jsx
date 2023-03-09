import React from 'react';
import { Link } from 'react-router-dom';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import './Main.scss';

import Form from './Form/Form';
import Socials from './Socials/Socials';
import Invalid from './Form/Invalid/Invalid';

import { setCurrentUser } from 'redux/slices/userSlice.js';

function Login() {
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const [isInvalid, setIsInvalid] = React.useState(false);// показать ошибку, если она есть при вводе почты или пароля
	const [isSignUp, setIsSignUp] = React.useState(false); // показывать инпут подтверждения при регистрации. при логине не показывать

	const { users } = useSelector(state => state.users);

	//===вход по почте и паролю===========================================================================================================
	const handleSignIn = (email, password) => {
		const auth = getAuth();

		signInWithEmailAndPassword(auth, email, password)
			.then(() => {
				users.forEach(item => item.email === email ? dispatch(setCurrentUser(item)) : setIsInvalid(!isInvalid));
				navigate('/');
			})
			.catch(error => {
				console.log(error);
				setIsInvalid(!isInvalid);
			})
	}

	return (
		<div className='main-auth'>
			<div className='main-auth__block'>
				<h1 className='block__title'>Log in or create an account</h1>

				<Form handleClick={handleSignIn} isSignUp={isSignUp}/>
				{
					isInvalid &&
					<Invalid />
				}
				<span>or</span>

				<Socials />

				<Link className='block__link' to='/signup' onClick={() => setIsSignUp(!isSignUp)}>Don't have an account? Sign up</Link>
			</div>
		</div>
	)
}

export default Login;
