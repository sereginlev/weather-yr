import React from 'react';
import { useAppSelector } from 'hook';

import styles from 'scss/modules/Home/Main/Forecast.module.scss';

import Current from './Current/Current';
import Table from './Table/Table';

const Forecast: React.FC = () => {
	const { current: current } = useAppSelector(state => state.current.currentItem);
	const { current: found } = useAppSelector(state => state.found.foundItem);
	const {  forecast: currentForecast } = useAppSelector(state => state.current.currentItem);
	const {  forecast: foundForecast } = useAppSelector(state => state.found.foundItem);

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
