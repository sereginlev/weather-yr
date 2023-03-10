import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import './List.scss';

import { fetchFound } from 'redux/slices/foundSlice';
import { fetchSearch } from 'redux/slices/searchSlice';

function List({ isOpen, setIsOpen, searchValue, setIsSearch, setIsNearby }) {
	const dispatch = useDispatch();
	const listRef = React.useRef(); // ссылка на список найденных городов

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

	//===при клике на элемент списка, обновляются стейты города и страны, который ищет пользователь и закрывается окно списка. стейты нужны для следующего запроса с погодными условиями для выбранного города========================================================================
	const onClickFoundItem = (e) => {
		let name = [];

		for (let i = 0; i < searchItems.length; i++) {
			name.push(`${searchItems[i].name}, ${searchItems[i].country}`);

			if (name[i] === e.target.innerHTML) {
				dispatch(fetchFound(`${searchItems[i].name},${searchItems[i].country}`))
			}
		}

		if (e.target.innerHTML === 'Nearby') {
			setIsNearby(true);
		}

		setIsOpen(!isOpen);
		setIsSearch(false);
	}

	React.useEffect(() => {
		//===запрос с возвращением списка городов, которые ищет пользователь==================================================================		
		if (searchValue.length >= 3) {
			dispatch(fetchSearch(searchValue));
		}
	}, [searchValue]);

	return (
		<ul className='search__list' ref={listRef} onClick={onClickFoundItem}>
			{
				searchValue.length > 0 || favoriteItems.length > 0 ?
					<li className='nearby' >
						Nearby
					</li>
					:
					<li className='_nearby' >
						Nearby
					</li>
			}


			{
				searchItems && isOpen && searchValue.length > 0 ?
					searchItems.map(item => (
						<li className='list__item' key={item.id}>
							{item.name}, {item.country}
						</li>
					)) :
					favoriteItems && favoriteItems.map((item, i) => (
						<li className='list__item-fav' key={i} onClick={(e) => onClickFavorite(e)}>
							{item.location.name}, {item.location.country}
						</li>
					))
			}
		</ul>
	)
}

export default List;
