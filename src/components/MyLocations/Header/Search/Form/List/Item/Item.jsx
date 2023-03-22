import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import styles from 'scss/modules/MyLocations/Header/Search/Item.module.scss';

import { fetchFound } from 'redux/slices/foundSlice';

function Item({ isOpen, searchValue }) {
	const dispatch = useDispatch();

	const { searchItems } = useSelector(state => state.search); // массив из searchSlice(список городов, которые ищет пользователь)
	const { favoriteItems } = useSelector(state => state.users.currentUser); // массив из данных о погоде любимых городов

	//===при клике на список с избранными городами выводит его в Location==================================================================
	const onClickFavorite = (e) => {
		favoriteItems.map(item => {
			if (e.target.innerHTML === `${item.location.name}, ${item.location.country}`) {
				dispatch(fetchFound(`${item.location.name}, ${item.location.country}`))
			}
		})
	}

	return (
		<>
			{
				searchItems && isOpen && searchValue.length > 0 ?
					searchItems.map(item => (
						<li className={styles.item} key={item.id}>
							{item.name}, {item.country}
						</li>
					)) :
					favoriteItems && favoriteItems.map((item, i) => (
						<li className={styles.itemFav} key={i} onClick={(e) => onClickFavorite(e)}>
							{item.location.name}, {item.location.country}
						</li>
					))
			}
		</>
	)
}

export default Item;
