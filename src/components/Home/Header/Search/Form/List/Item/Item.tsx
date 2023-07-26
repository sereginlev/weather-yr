import React from 'react';
import { useAppSelector, useAppDispatch } from 'hook';

import styles from 'scss/modules/MyLocations/Header/Search/Item.module.scss';

import { fetchFound } from 'redux/slices/foundSlice';

type ItemProps = {
	isOpen: boolean;
	searchValue: string;
}

const Item: React.FC<ItemProps> = ({ isOpen, searchValue }) => {
	const dispatch = useAppDispatch();

	const { searchItems } = useAppSelector(state => state.search); // массив из searchSlice(список городов, которые ищет пользователь)
	const { favoriteItems } = useAppSelector(state => state.users.currentUser); // массив из данных о погоде любимых городов

	//===при клике на список с избранными городами выводит его в Location==================================================================
	const onClickFavorite = (e: React.MouseEvent<HTMLLIElement>) => {
		favoriteItems.map(item => {
			if ((e.target as HTMLLIElement).innerHTML === `${item.location.name}, ${item.location.country}`) {
				dispatch(fetchFound(`${item.location.name},${item.location.country}`))
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
