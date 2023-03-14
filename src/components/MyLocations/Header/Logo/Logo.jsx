import React from 'react';
import { Link } from 'react-router-dom';

import './Logo.scss';

import logo from 'assets/icons/common icons/logo-blue.svg';

function Logo() {
  return (
	 <div className='logo'>
		<Link to='/'>
			<img className='logo__icon' src={logo} alt='Company Logo' width='50px'/>
		</Link>
	 </div>
  )
}

export default Logo;
