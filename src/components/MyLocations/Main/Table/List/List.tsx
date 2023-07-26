import React from 'react';

import styles from 'scss/modules/MyLocations/Main/Table/List.module.scss';

import Button from 'components/MyLocations/Main/Table/Button/Button';
import { CurrentItem, Location } from 'modules/current';

type ListProps = {
	favoriteItems: CurrentItem[];
	onClickItem: (location: Location, e: React.MouseEvent<HTMLDivElement>) => void;
}

const List: React.FC<ListProps> = ({ favoriteItems, onClickItem }) => {
	return (
		<ul className={styles.root}>
			{
				favoriteItems &&
				favoriteItems.map((item, index) => (
					<li className={styles.item} key={index} >
						<div className={styles.block} onClick={(e) => onClickItem(item.location, e)}>
							<p className={styles.title}>{item.location.name}</p>
							{
								item.forecast.forecastday.map((elem, i) => (
									<div className={styles.day} key={i}>
										<img className={styles.icon} src={elem.day.condition.icon} alt={elem.day.condition.text} />
										{
											Math.round(elem.day.avgtemp_c) > 0 ?
												<span className={styles.plus}>{Math.round(elem.day.avgtemp_c)}°</span>
												:
												<span className={styles.minus}>{Math.round(elem.day.avgtemp_c)}°</span>
										}
									</div>
								))
							}
						</div>
						
						<Button location={item.location} />
					</li>
				))
			}
		</ul>
	)
}

export default List;
