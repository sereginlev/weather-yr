import React from 'react';
import { Link } from 'react-router-dom';
import { useAppSelector, useAppDispatch } from 'hook';
import { useTranslation } from 'react-i18next';

import styles from 'scss/modules/ui/Button.module.scss';

import login from 'assets/icons/common icons/color icons/login.svg';

import { removeUser } from 'redux/slices/userSlice';

const User: React.FC = () => {
	const { t } = useTranslation();
	const dispatch = useAppDispatch();
	const [isOpen, setIsOpen] = React.useState(false);

	const { isAuth } = useAppSelector(state => state.users.currentUser);

	return (
		<>
			{
				!isAuth ?
					<Link to='/auth' className={styles.btn} type='button' onClick={() => setIsOpen(!isOpen)}>
						<img className={styles.icon} src={login} alt='Login icon' />
						<p className={styles.text}>{ t("login") }</p>
					</Link>
					:
					<button className={styles.btn} type='button' onClick={() => dispatch(removeUser())}>
						<img className={styles.icon} src={login} alt='Login icon' />
						<p className={styles.text}>{ t("logout") }</p>
					</button>
			}
		</>
	)
}

export default User;
