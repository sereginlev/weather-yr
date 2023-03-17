import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import './Table.scss';

import Button from 'components/MyLocations/Main/Table/Button/Button';
import Days from './Days/Days';

import { fetchFound } from 'redux/slices/foundSlice';

function Table() {
	const { t } = useTranslation();
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const { favoriteItems } = useSelector(state => state.users.currentUser);

	//===перейти на страницу прогноза любимого города при клике на него=====================================================================
	const onClickItem = (location, e) => {
		const coords = `${location.lat},${location.lon}`;

		dispatch(fetchFound(coords));
		navigate('/');
	}

	return (
		<div className='main-block__table table'>
			{
				favoriteItems &&
					favoriteItems.length === 0 ?
					<p className='table__text'>{ t("emptyLocations")}</p>
					:
					<>
						<Days />

						<ul className='table__values values-table'>
							{
								favoriteItems &&
								favoriteItems.map((item, index) => (
									<li className='values-table__item item' key={index} >
										<div className='item__block' onClick={(e) => onClickItem(item.location, e)}>
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
										</div>
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
