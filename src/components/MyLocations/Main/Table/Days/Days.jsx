import React from 'react';

import './Days.scss';

function Days({ item }) {
	const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

	return (
		<div className='table__header header-list'>
			{
				item.map((el, index) => (
					<p className='header-list__text' key={index}>
						{days[new Date(el.date).getDay()]}
					</p>
				))
			}
		</div>
	)
}

export default Days;