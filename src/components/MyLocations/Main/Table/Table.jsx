import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import './Table.scss';

import Button from 'components/MyLocations/Main/Table/Button/Button';
import Days from './Days/Days';

function Table() {
	const { favoriteItems } = useSelector(state => state.users.currentUser);

	const forecastday = favoriteItems.map((item, index) => {
		return item.forecast.forecastday
	})
	console.log(forecastday[0])
	return (
		<div className='main-block__table table'>

			<Days item={forecastday[0]} />

			<ul className='table__values values-table'>
				{
					favoriteItems &&
					favoriteItems.map((item, index) => (
						<li className='values-table__item item' key={index}>
							<p className='item__title'>{item.location.name}</p>
							{
								item.forecast.forecastday.map((elem, i) => (
									<div className='item__day day' key={i}>
										<img className='day__icon' src={elem.day.condition.icon} alt={elem.day.condition.text} />
										{
											Math.round(elem.day.avgtemp_c) > 0 ?
												<span className='day__temp plus'>{Math.round(elem.day.avgtemp_c)}°</span>
												:
												<span className='day__temp minus'>{Math.round(elem.day.avgtemp_c)}°</span>
										}
									</div>
								))
							}
							<Button location={item.location} />
						</li>
					))
				}
			</ul>
		</div>
	)
}

export default Table;
