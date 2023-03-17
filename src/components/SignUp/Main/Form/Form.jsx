import React from 'react';
import { useTranslation } from 'react-i18next';

import './Form.scss';

import view from 'assets/icons/common icons/view-password.svg';
import disableView from 'assets/icons/common icons/disable-view-password.svg';

function Form({ handleClick, password, setPassword, confirm, setConfirm }) {
	const { t } = useTranslation();
	const [isView, setIsView] = React.useState(false); // скрыть / показать введенные пароль
	const [isViewConfirm, setIsViewConfirm] = React.useState(false); // скрыть / показать подтверждение пароля
	const [email, setEmail] = React.useState(''); // состояние инпута для почты

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

			{
				isViewConfirm ?
					<div>
						<label className='form__label' htmlFor='confirm'>{ t("authConfirmPassword") }</label>
						<input className='form__input' type='text' id='confirm' value={confirm} onChange={(e) => setConfirm(e.target.value)} />
						<img className='form__input-icon' src={view} alt='Disable showing password' onClick={() => setIsViewConfirm(!isViewConfirm)} />
					</div>
					:
					<div>
						<label className='form__label' htmlFor='confirm'>{ t("authConfirmPassword") }</label>
						<input className='form__input' type='password' id='confirm' value={confirm} onChange={(e) => setConfirm(e.target.value)} />
						<img className='form__input-icon' src={disableView} alt='Show password' onClick={() => setIsViewConfirm(!isViewConfirm)} />
					</div>
			}

			<button className='form__btn' type='button' onClick={() => handleClick(email, password)}>{ t("authContinue") }</button>
		</form>
	)
}

export default Form;