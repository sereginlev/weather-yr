import React from 'react';

import styles from 'scss/modules/Home/Main/Table/List.module.scss';

import Days from '../Days/Days';
import Periods from '../Periods/Periods';
import Values from '../Values/Values';
import OpenHourlyForecast from '../OpenHourlyForecast/OpenHourlyForecast';

import { Forecast, Forecastday } from 'modules/current';

type ListProps = {
	forecast: Forecast;
	onClickItem: (i: number) => void;
}

const List: React.FC<ListProps> = ({ forecast, onClickItem }) => {
	return (
		<ul className={styles.root}>
			{
				forecast !== undefined &&
				forecast.forecastday.map((item, i) => (
					<li className={styles.item} key={i} onClick={() => onClickItem(i)}>
						<Days item={item} />
						<Periods item={item} />
						<Values item={item} />
						<OpenHourlyForecast />
					</li>
				))
			}
		</ul>
	)
}

export default List;
