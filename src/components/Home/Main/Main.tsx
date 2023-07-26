import React from 'react';

import styles from 'scss/modules/Home/Main/Main.module.scss';

import Forecast from './Forecast/Forecast';

const Main: React.FC = () => {

	return (
		<div className={styles.root}>
			<div className='container'>
				<Forecast />
			</div>
		</div>
	)
}

export default Main;
