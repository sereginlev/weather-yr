import React from 'react';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

import './Header.scss';

import styles from 'scss/modules/Home/Header/Header.module.scss';

import Logo from './Logo/Logo';
import Search from './Search/Search';
import User from './User/User';
import MyLocations from './MyLocations/MyLocations';

function Header() {
	const { t } = useTranslation();
	const { email } = useSelector(state => state.users.currentUser);
	return (
		<div className={styles.root}>
			<div className={styles.container}>
				<div className={styles.block}>
					{
						email ?
							<p className={styles.text}>{email}</p>
							:
							<p className={styles.text}>{ t("servedHeader") }</p>
					}
					<Logo />
					<Search />
					<MyLocations />
					<User />
				</div>
			</div>
		</div>
	)
}

export default Header;
