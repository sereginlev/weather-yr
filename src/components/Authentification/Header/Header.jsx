import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import './Header.scss';

import logo from 'assets/icons/common icons/logo-blue.svg';

function Header() {
	const { t } = useTranslation();

	return (
		<div className='header-auth'>
			<Link to='/'>
				<img className='logo-auth' src={logo} alt='Company logo' />
			</Link>
			<p className='header-auth__text'>{ t("servedHeader") }</p>
		</div>
	)
}

export default Header;
