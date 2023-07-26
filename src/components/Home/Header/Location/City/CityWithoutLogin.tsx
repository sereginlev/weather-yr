import { Location } from 'modules/current';
import React from 'react';

import styles from 'scss/modules/Home/Header/Location/City.module.scss';

type CityWithoutLoginProps = {
	location: Location;
}

const CityWithoutLogin: React.FC<CityWithoutLoginProps> = ({ location }) => {
	return (
		<>
			<div className={styles.city}>
				<h2 className={styles.name}>{location.name}</h2>
			</div>
			{
				location && location.region.length === 0 ?
					<p className={styles.region}>{location.country}</p> :
					<p className={styles.region}>{location.region}, {location.country}</p>
			}
		</>
	)
}

export default CityWithoutLogin;
