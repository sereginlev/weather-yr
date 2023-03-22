import React from 'react';
import { useSelector } from 'react-redux';

import styles from 'scss/modules/MyLocations/Header/Search/Nearby.module.scss';

function Nearby({ searchValue }) {
	const { favoriteItems } = useSelector(state => state.users.currentUser); // массив из данных о погоде любимых городов

	return (
		<>
			{
				searchValue.length > 0 || favoriteItems.length > 0 ?
					<li className={styles.nearbyWithItems} >
						Nearby
					</li>
					:
					<li className={styles.nearbyWithoutItems} >
						Nearby
					</li>
			}
		</>
	)
}

export default Nearby;
