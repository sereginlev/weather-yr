import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import styles from 'scss/modules/Authentification/Form.module.scss';

import view from 'assets/icons/common icons/view-password.svg';
import disableView from 'assets/icons/common icons/disable-view-password.svg';

import Button from './Button/Button';

type FormProps = {
	handleClick: (email: string, password: string) => void;
}

const Form: React.FC<FormProps> = ({ handleClick }) => {
	const { t } = useTranslation();
	
	const [email, setEmail] = React.useState(''); // состояние инпута для почты
	const [password, setPassword] = React.useState(''); // состояние инпута для пароля
	const [isView, setIsView] = React.useState(false); // скрыть / показать вводимый пароль

	return (
		<form className={styles.root}>
			<label className={styles.label} htmlFor='email'>{ t("authEmail") }</label>
			<input className={styles.input} type='email' id='email' value={email} onChange={(e) => setEmail(e.target.value)} />

			{
				isView ?
					<div className={styles.block}>
						<label className={styles.label} htmlFor='password'>{ t("authPassword") }</label>
						<input className={styles.input} type='text' id='password' value={password} onChange={(e) => setPassword(e.target.value)} />
						<img className={styles.icon} src={view} alt='Disable showing password' onClick={() => setIsView(!isView)} />
					</div>
					:
					<div className={styles.block}>
						<label className={styles.label} htmlFor='password'>{ t("authPassword") }</label>
						<input className={styles.input} type='password' id='password' value={password} onChange={(e) => setPassword(e.target.value)} />
						<img className={styles.icon} src={disableView} alt='Show password' onClick={() => setIsView(!isView)} />
					</div>
			}

			<Link to='/resetpassword' className={styles.link} type='button'>{ t("authForgotPassword") }</Link>

			<Button handleClick={handleClick} email={email} password={password} />
		</form>
	)
}

export default Form;
