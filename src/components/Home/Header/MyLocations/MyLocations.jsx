import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import styles from 'scss/modules/Home/Button.module.scss';

import myLocations from 'assets/icons/common icons/color icons/map.svg'

function MyLocations() {
	const { t } = useTranslation();
	const { isAuth } = useSelector(state => state.users.currentUser);

	return (
		<>
			{
				isAuth ?
					<Link to='/mylocations' className={styles.btn} type='button'>
						<img className={styles.icon} src={myLocations} alt='My Locations icon' />
						{ t("mylocations") }
					</Link>
					:
					null
			}
		</>
	)
}

export default MyLocations;
