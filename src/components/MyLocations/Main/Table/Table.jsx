import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import './Table.scss';

import Button from 'components/MyLocations/Main/Table/Button/Button';
import Days from './Days/Days';

import { fetchFound } from 'redux/slices/foundSlice';

function Table() {
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const { favoriteItems } = useSelector(state => state.users.currentUser);

	//===переменная, для отображения дней недели в заголовке таблицы========================================================================
	const forecastday = favoriteItems && favoriteItems.map(item => item.forecast.forecastday);

	const onClickItem = (location) => {
		const coords = `${location.lat},${location.lon}`;

		dispatch(fetchFound(coords));
		navigate('/');
	}
	console.log(favoriteItems)
	return (
		<div className='main-block__table table'>

			{
				favoriteItems.length === 0 ?
					<p className='table__text'>You don't have favorite locations.</p>
					:
					<>
						<Days item={forecastday[0]} />

						<ul className='table__values values-table'>
							{
								favoriteItems &&
								favoriteItems.map((item, index) => (
									<li className='values-table__item item' key={index} onClick={() => onClickItem(item.location)}>
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
					</>
			}


		</div>
	)
}

export default Table;
