import React from 'react';
import { useAppSelector } from 'hook';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import styles from 'scss/modules/ui/Button.module.scss';

import myLocations from 'assets/icons/common icons/color icons/map.svg'

const MyLocations: React.FC = () => {
	const { t } = useTranslation();
	const { isAuth } = useAppSelector(state => state.users.currentUser);

	return (
		<>
			{
				isAuth ?
					<Link to='/mylocations' className={styles.btn} type='button'>
						<img className={styles.icon} src={myLocations} alt='My Locations icon' />
						<p className={styles.text}>{ t("mylocations") }</p>
					</Link>
					:
					null
			}
		</>
	)
}

export default MyLocations;
