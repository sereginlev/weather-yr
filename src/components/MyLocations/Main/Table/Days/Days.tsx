import React from 'react';

import styles from 'scss/modules/MyLocations/Main/Table/Days.module.scss';

const Days: React.FC = () => {
	const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

	const immediateDays: string[] = [];

	//===получаем ближайшие три дня и помещаем их в массив immediateDays===================================================================
	const getImmediateDays = () => {
		for (let i = 0; i < 3; i++) {

			if (new Date().getDay() + i > 6) {
				immediateDays.push(days[new Date().getDay() + i - 7]);
			} else {
				immediateDays.push(days[new Date().getDay() + i]);	
			}
		}
		return immediateDays;
	}
	getImmediateDays();

	return (
		<div className={styles.root}>
			{
				immediateDays.map((el, index) => (
					<p className={styles.text} key={index}>
						{el}
					</p>
				))
			}
		</div>
	)
}

export default Days;