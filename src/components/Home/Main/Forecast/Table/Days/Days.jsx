import React from 'react';

import './Days.scss';

function Days({ item }) {
	const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
	const month = ['January', 'February', 'March', 'April', 'May', 'June', 'Jule', 'August', 'September', 'October', 'November', 'December'];
	const today = days[new Date().getDay()]; // получение сегодняшнего дня недели, чтобы вывести Today

	return (
		<div className='item__date date'>
			<p className='date__text'>
				{today === days[new Date(item.date).getDay()] ? 'Today' : days[new Date(item.date).getDay()]} {new Date(item.date).getDate()} {month[new Date(item.date).getMonth()]}
			</p>
		</div>
	)
}

export default Days;
