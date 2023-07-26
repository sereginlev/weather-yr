import React from 'react';
import { useAppSelector } from 'hook';

import styles from 'scss/modules/MyLocations/Header/Search/Nearby.module.scss';

type NearbyProps = {
	searchValue: string;
}

const Nearby: React.FC<NearbyProps> = ({ searchValue }) => {
	const { favoriteItems } = useAppSelector(state => state.users.currentUser); // массив из данных о погоде любимых городов

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
