import { Forecast } from 'modules/current';
import React from 'react';

import styles from 'scss/modules/Home/Main/Table/Table.module.scss';

import Headers from './Headers/Headers';
import Hourly from './Hourly/Hourly';
import List from './List/List';

type TableProps = {
	forecast: Forecast;
}

const Table: React.FC<TableProps> = ({ forecast }) => {
	const [isHourly, setIsHourly] = React.useState(false);
	const [index, setIndex] = React.useState(0);

	//===при клике на день открывает почасовой прогноз========================================================================================
	const onClickItem = (i: number) => {
		setIsHourly(!isHourly);
		setIndex(i);
	}

	return (
		<div className={styles.root}>
			<Headers />

			<List forecast={forecast} onClickItem={onClickItem}/>
			
			{
				isHourly &&
				<Hourly setIsHourly={setIsHourly} item={forecast.forecastday[index]} forecast={forecast.forecastday} index={index} setIndex={setIndex}/>
			}
		</div>
	)
}

export default Table;
