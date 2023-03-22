import React from 'react';
import { useSelector } from 'react-redux';

import styles from 'scss/modules/Home/Main/Forecast.module.scss';

import Current from './Current/Current';
import Table from './Table/Table';

function Forecast() {
	const { current: current } = useSelector(state => state.current.currentItem);
	const { current: found } = useSelector(state => state.found.foundItem);
	const {  forecast: currentForecast } = useSelector(state => state.current.currentItem);
	const {  forecast: foundForecast } = useSelector(state => state.found.foundItem);

	return (
		<div className={styles.root}>
			{
				found !== undefined && Object.keys(found).length > 0 ?
					<>
						<Current current={found} />
						<Table forecast={foundForecast}/>
					</>
					:
					<>
						<Current current={current} />
						<Table forecast={currentForecast}/>
					</>
			}
		</div>
	)
}

export default Forecast;
