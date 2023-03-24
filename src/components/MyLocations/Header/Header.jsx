import React from 'react';
import { useSelector } from 'react-redux';

import styles from 'scss/modules/MyLocations/Header/Header.module.scss';

import Logo from './Logo/Logo';
import Search from './Search/Search';
import User from './User/User';

function Header() {
	const { email } = useSelector(state => state.users.currentUser);

	return (
		<div className={styles.root}>
			<div className='container'>
				<div className={styles.block}>

					<p className={styles.text}>{email}</p>

					<Logo />

					<div className={styles.user}>
						<Search />
						<User />
					</div>
				</div>
			</div>
		</div>
	)
}

export default Header;
