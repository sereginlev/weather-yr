import React from 'react';
import { Link } from 'react-router-dom';

import './Main.scss';

function Main() {
	return (
		<div className='main-auth'>
			<p className='main-auth__text'>An email has been sent to the specified email address to verify that the email address is correct. Please follow the link to complete registration.</p>
			<Link className='main-auth__btn' to='/auth'>Continue</Link>
		</div>
	)
}

export default Main;
