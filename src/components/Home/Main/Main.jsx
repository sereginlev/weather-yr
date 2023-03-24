import React from 'react';

import styles from 'scss/modules/Home/Main/Main.module.scss';

import Forecast from './Forecast/Forecast';

function Main() {

	return (
		<div className={styles.root}>
			<div className='container'>
				<Forecast />
			</div>
		</div>
	)
}

export default Main;
