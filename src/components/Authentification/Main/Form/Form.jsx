import React from 'react';
import { Link } from 'react-router-dom';

import './Form.scss';

import view from 'assets/icons/common icons/view-password.svg';
import disableView from 'assets/icons/common icons/disable-view-password.svg';

function Form({ handleClick, isSignUp }) {
	const [email, setEmail] = React.useState(''); // состояние инпута для почты
	const [password, setPassword] = React.useState(''); // состояние инпута для пароля
	const [isView, setIsView] = React.useState(false); // скрыть / показать вводимый пароль

	return (
		<form className='block__form'>
			<label className='form__label' htmlFor='email'>Email Address</label>
			<input className='form__input' type='email' id='email' value={email} onChange={(e) => setEmail(e.target.value)} />

			{
				isView ?
					<div>
						<label className='form__label' htmlFor='password'>Password</label>
						<input className='form__input' type='text' id='password' value={password} onChange={(e) => setPassword(e.target.value)} />
						<img className='form__input-icon' src={view} alt='Disable showing password' onClick={() => setIsView(!isView)} />
					</div>
					:
					<div>
						<label className='form__label' htmlFor='password'>Password</label>
						<input className='form__input' type='password' id='password' value={password} onChange={(e) => setPassword(e.target.value)} />
						<img className='form__input-icon' src={disableView} alt='Show password' onClick={() => setIsView(!isView)} />
					</div>
			}

			<Link to='/resetpassword' className='form__link' type='button'>Forgot your password?</Link>

			<button className='form__btn' type='button' onClick={() => handleClick(email, password)}>Continue</button>
		</form>
	)
}

export default Form;
