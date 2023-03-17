import React from 'react';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

import './Header.scss';

import Logo from './Logo/Logo';
import Search from './Search/Search';
import User from './User/User';
import MyLocations from './MyLocations/MyLocations';

function Header() {
	const { t } = useTranslation();
	const { email } = useSelector(state => state.users.currentUser);
	return (
		<div className='header'>
			<div className='_container'>
				<div className='header__block'>
					{
						email ?
							<p className='header__text'>{email}</p>
							:
							<p className='header__text'>{ t("servedHeader") }</p>
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
