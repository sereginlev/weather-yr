import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import styles from 'scss/modules/MyLocations/Header/Search/List.module.scss';

import { fetchFound } from 'redux/slices/foundSlice';
import { fetchSearch } from 'redux/slices/searchSlice';

import Nearby from './Nearby/Nearby';
import Item from './Item/Item';

function List({ isOpen, setIsOpen, searchValue, setIsSearch, setIsNearby }) {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const listRef = React.useRef(); // ссылка на список найденных городов

	const { searchItems } = useSelector(state => state.search); // массив из searchSlice(список городов, которые ищет пользователь)

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
		navigate('/');
	}

	React.useEffect(() => {
		//===запрос с возвращением списка городов, которые ищет пользователь==================================================================		
		if (searchValue.length >= 3) {
			dispatch(fetchSearch(searchValue));
		}
	}, [searchValue]);

	return (
		<ul className={styles.root} ref={listRef} onClick={onClickFoundItem}>

			<Nearby searchValue={searchValue} />

			<Item isOpen={isOpen} searchValue={searchValue} />
		</ul>
	)
}

export default List;
