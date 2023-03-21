import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import './Form.scss';

import view from 'assets/icons/common icons/view-password.svg';
import disableView from 'assets/icons/common icons/disable-view-password.svg';

import Button from './Button/Button';

function Form({ handleClick }) {
	const { t } = useTranslation();
	const [email, setEmail] = React.useState(''); // состояние инпута для почты
	const [password, setPassword] = React.useState(''); // состояние инпута для пароля
	const [isView, setIsView] = React.useState(false); // скрыть / показать вводимый пароль

	return (
		<form className='block__form'>
			<label className='form__label' htmlFor='email'>{ t("authEmail") }</label>
			<input className='form__input' type='email' id='email' value={email} onChange={(e) => setEmail(e.target.value)} />

			{
				isView ?
					<div>
						<label className='form__label' htmlFor='password'>{ t("authPassword") }</label>
						<input className='form__input' type='text' id='password' value={password} onChange={(e) => setPassword(e.target.value)} />
						<img className='form__input-icon' src={view} alt='Disable showing password' onClick={() => setIsView(!isView)} />
					</div>
					:
					<div>
						<label className='form__label' htmlFor='password'>{ t("authPassword") }</label>
						<input className='form__input' type='password' id='password' value={password} onChange={(e) => setPassword(e.target.value)} />
						<img className='form__input-icon' src={disableView} alt='Show password' onClick={() => setIsView(!isView)} />
					</div>
			}

			<Link to='/resetpassword' className='form__link' type='button'>{ t("authForgotPassword") }</Link>

			<Button handleClick={handleClick} email={email} password={password} />
		</form>
	)
}

export default Form;
