import React from 'react';
import { useSelector } from 'react-redux';

import './Header.scss';

import Logo from './Logo/Logo';
import Search from './Search/Search';
import User from './User/User';

function Header() {
	const { email } = useSelector(state => state.users.currentUser);

	return (
		<div className='header-mylocations'>
			<div className='_container'>
				<div className='header__block'>
					{
						email ?
							<p className='header__text'>{email}</p>
							:
							<p className='header__text'>Served by the Norwegian Meteorological Institute and NRK</p>
					}
					<Logo />

					<div className='header__block-user'>
						<Search />
						<User />
					</div>
				</div>
			</div>
		</div>
	)
}

export default Header;
