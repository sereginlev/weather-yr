import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import './Logo.scss';

import logo from 'assets/icons/common icons/logo-blue.svg';

import { fetchFound } from 'redux/slices/foundSlice';

function Logo() {
	const dispatch = useDispatch();

	//===показать прогноз по текущим координатам============================================================================================
	const onClickLogo = () => {
		dispatch(fetchFound({}))
	}

	return (
		<div className='logo' onClick={onClickLogo}>
			<Link to='/'>
				<img className='logo__icon' src={logo} alt='Company Logo' width='50px' />
			</Link>
		</div>
	)
}

export default Logo;