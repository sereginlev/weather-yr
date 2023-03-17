import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

import './List.scss';

import { fetchFound } from 'redux/slices/foundSlice';
import { fetchSearch } from 'redux/slices/searchSlice';

function List({ isOpen, setIsOpen, searchValue, setIsSearch, setIsNearby, isNearby }) {
	const { t } = useTranslation();
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

	//===при клике на элемент списка, обновляются стейты города и страны, который ищет пользователь и закрывается окно списка. стейты нужны для следующего запроса с погодными условиями для выбранного города======================================================================
	const onClickFoundItem = (e) => {
		let name = [];

		for (let i = 0; i < searchItems.length; i++) {
			name.push(`${searchItems[i].name}, ${searchItems[i].country}`);

			if (name[i] === e.target.innerHTML) {
				dispatch(fetchFound(`${searchItems[i].name},${searchItems[i].country}`))
			}
		}

		//===при клике на Nearby показывается прогноз по координатам пользователя============================================================= 
		if (e.target.innerHTML === 'Nearby') {
			setIsNearby(true);
			navigator.geolocation.getCurrentPosition((pos) => {
				let lat = Number(pos.coords.latitude.toFixed(2));
				let lon = Number(pos.coords.longitude.toFixed(2));

				const location = `q=${lat},${lon}`

				dispatch(fetchFound(location));
			});
			setIsOpen(!isOpen);
			setIsSearch(false);
		} else {
			setIsOpen(!isOpen);
			setIsSearch(false);
			setIsNearby(false);
		}
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
					<li className='nearby'>
						{ t("nearby") }
					</li>
					:
					<li className='_nearby'>
						{ t("nearby") }
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
