import React from 'react';

import './Days.scss';

function Days({ item }) {
	const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
	const immediateDays = [];

	//===получаем ближайшие три дня и помещаем их в массив immediateDays===================================================================
	const getImmediateDays = () => {
		for (let i = 0; i < 3; i++) {
			immediateDays.push(days[new Date().getDay() + i]);
		}
		return immediateDays;
	}
	getImmediateDays();

	return (
		<div className='table__header header-list'>
			{
				immediateDays.map((el, index) => (
					<p className='header-list__text' key={index}>
						{el}
					</p>
				))
			}
		</div>
	)
}

export default Days;