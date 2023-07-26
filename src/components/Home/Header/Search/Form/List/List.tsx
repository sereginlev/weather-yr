import React, { Dispatch, SetStateAction } from 'react';
import { useAppDispatch, useAppSelector } from 'hook';
import { useNavigate } from 'react-router-dom';

import styles from 'scss/modules/MyLocations/Header/Search/List.module.scss';

import { fetchFound } from 'redux/slices/foundSlice';
import { fetchSearch } from 'redux/slices/searchSlice';

import Nearby from './Nearby/Nearby';
import Item from './Item/Item';

type ListProps = {
	isOpen: boolean;
	searchValue: string;
	setIsOpen: Dispatch<SetStateAction<boolean>>;
	setIsSearch: Dispatch<SetStateAction<boolean>>;
	setIsNearby: Dispatch<SetStateAction<boolean>>;
}

const List: React.FC<ListProps> = ({ isOpen, setIsOpen, searchValue, setIsSearch, setIsNearby }) => {
	const dispatch = useAppDispatch();
	const navigate = useNavigate();
	const listRef = React.useRef<HTMLUListElement>(null); // ссылка на список найденных городов

	const { searchItems } = useAppSelector(state => state.search); // массив из searchSlice(список городов, которые ищет пользователь)

	//===при клике на элемент списка, обновляются стейты города и страны, который ищет пользователь и закрывается окно списка. стейты нужны для следующего запроса с погодными условиями для выбранного города========================================================================
	const onClickFoundItem = (e:  React.MouseEvent<HTMLUListElement>) => {
		let name = [];

		for (let i = 0; i < searchItems.length; i++) {
			name.push(`${searchItems[i].name}, ${searchItems[i].country}`);

			if (name[i] === (e.target as HTMLUListElement).innerHTML) {
				dispatch(fetchFound(`${searchItems[i].name},${searchItems[i].country}`))
			}
		}

		if ((e.target as HTMLUListElement).innerHTML === 'Nearby') {
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
