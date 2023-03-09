import React from 'react';
import { Link } from 'react-router-dom';

import './Header.scss';

import logo from 'assets/icons/common icons/logo-blue.svg';

function Header() {

	return (
		<div className='header-auth'>
			<Link to='/'>
				<img className='logo-auth' src={logo} alt='Company logo' />
			</Link>
			<p className='header-auth__text'>Served by the Norwegian Meteorological Institute and NRK</p>
		</div>
	)
}

export default Header;
