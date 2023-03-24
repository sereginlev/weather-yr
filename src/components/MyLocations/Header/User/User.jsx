import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';

import styles from 'scss/modules/ui/Button.module.scss';

import login from 'assets/icons/common icons/color icons/login.svg';

import { removeUser } from 'redux/slices/userSlice';

function User() {
	const { t } = useTranslation();
	const dispatch = useDispatch();

	return (
		<Link to='/' className={styles.btn} type='button' onClick={() => dispatch(removeUser())}>
			<img className={styles.icon} src={login} alt='Login icon' />
			<p className={styles.text}>{t("logout")}</p>
		</Link>
	)
}

export default User;
