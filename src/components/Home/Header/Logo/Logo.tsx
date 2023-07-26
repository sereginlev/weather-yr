import React from 'react';
import { Link } from 'react-router-dom';
import { useAppDispatch } from 'hook';

import styles from 'scss/modules/Home/Header/Logo.module.scss';

import logo from 'assets/icons/common icons/logo-blue.svg';

import { fetchCurrent } from 'redux/slices/currentSlice';

const Logo: React.FC = () => {
	const dispatch = useAppDispatch();

	//===показать прогноз по текущим координатам============================================================================================
	const onClickLogo = () => {
		//===запрос с возвращением погодных условий по координатам пользователя. выполняется при входе на главную страницу======================
		navigator.geolocation.getCurrentPosition((pos) => {
			let lat = Number(pos.coords.latitude.toFixed(2));
			let lon = Number(pos.coords.longitude.toFixed(2));

			const location = `q=${lat},${lon}`

			dispatch(fetchCurrent(location));
		});
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
