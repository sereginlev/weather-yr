import React from 'react';
import { useSelector } from 'react-redux';

import styles from 'scss/modules/Home/Header/Location/City.module.scss';

function CityAtLogin({ location }) {
	const { locations } = useSelector(state => state.users.currentUser);

	return (
		<>
			<div className={styles.city}>
				<h2 className={styles.name}>{location.name}</h2>
				{
					locations && locations.includes(`${location.lat},${location.lon}`) ?
						<svg x="0" y="0" width="20" height="20" viewBox="0 0 24 24" focusable="false" aria-hidden="true"><path stroke="#ff9d00" strokeLinecap="round" strokeWidth="1.5px" d="M14.922 8.818l-2.646-6.175a.3.3 0 0 0-.552 0L9.078 8.818A.3.3 0 0 1 8.802 9H2.83a.3.3 0 0 0-.192.53l5.185 4.322a.3.3 0 0 1 .08.357l-2.987 6.402a.3.3 0 0 0 .426.384l6.505-3.902a.3.3 0 0 1 .308 0l6.505 3.902a.3.3 0 0 0 .426-.384l-2.987-6.402a.3.3 0 0 1 .08-.357l5.185-4.322a.3.3 0 0 0-.192-.53h-5.973a.3.3 0 0 1-.276-.182z" fill="#ff9d00"></path></svg> :
						<svg x="0" y="0" width="20" height="20" viewBox="0 0 24 24" focusable="false" aria-hidden="true"><path stroke="#21292B" strokeLinecap="round" strokeWidth="1.5px" d="M14.922 8.818l-2.646-6.175a.3.3 0 0 0-.552 0L9.078 8.818A.3.3 0 0 1 8.802 9H2.83a.3.3 0 0 0-.192.53l5.185 4.322a.3.3 0 0 1 .08.357l-2.987 6.402a.3.3 0 0 0 .426.384l6.505-3.902a.3.3 0 0 1 .308 0l6.505 3.902a.3.3 0 0 0 .426-.384l-2.987-6.402a.3.3 0 0 1 .08-.357l5.185-4.322a.3.3 0 0 0-.192-.53h-5.973a.3.3 0 0 1-.276-.182z" fill="none"></path></svg>
				}

			</div>
			{
				location && location.region.length === 0 ?
					<p className={styles.region}>{location.country}</p> :
					<p className={styles.region}>{location.region}, {location.country}</p>
			}
		</>
	)
}

export default CityAtLogin;
