import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import styles from 'scss/modules/Home/Header/Logo.module.scss';

import logo from 'assets/icons/common icons/logo-blue.svg';

import { fetchFound } from 'redux/slices/foundSlice';

function Logo() {
	const dispatch = useDispatch();

	//===показать прогноз по текущим координатам============================================================================================
	const onClickLogo = () => {
		dispatch(fetchFound({}))
	}

	return (
		<div className={styles.logo} onClick={onClickLogo}>
			<Link to='/'>
				<img className={styles.icon} src={logo} alt='Company Logo' width='50px' />
			</Link>
		</div>
	)
}

export default Logo;
