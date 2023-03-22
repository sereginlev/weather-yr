import React from 'react';

import styles from 'scss/modules/Home/Main/Table/Hourly/Table.module.scss';

import Header from './Header/Header';
import Item from './Item/Item';

function Table({ item, date }) {
	const currentHour = new Date().getHours();
	const currentDate = new Date().getDate();

	return (
		<div className={styles.root}>
			<Header />

			<ul className={styles.values}>
				{
					currentDate === new Date(date).getDate() ?
						item.map((el, i) => (
							currentHour <= new Date(el.time).getHours() &&
							<Item key={i} el={el} />
						))

						:

						item.map((el, i) => (
							<Item key={i} el={el} />
						))

				}
			</ul>
		</div >
	)
}

export default Table;
