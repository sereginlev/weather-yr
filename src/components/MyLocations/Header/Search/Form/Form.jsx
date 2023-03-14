import React from 'react';

import List from './List/List';

import './Form.scss';

import search from 'assets/icons/common icons/color icons/search.svg';
import erase from 'assets/icons/common icons/close.svg';

function Form({ searchValue, setSearchValue, setIsSearch, setIsNearby }) {
	const [isOpen, setIsOpen] = React.useState(true); // скрытие / отображение списка найденных городов
	const inputRef = React.useRef(); // ссылка на инпут поиска нужного города
	const btnRef = React.useRef(); // ссылка на кнопку Search
	const formRef = React.useRef(); // ссылка на форму поиска

	//===при клике на крестик в поиске очищает поле ввода и список выведенных городов======================================================
	const clearSearchField = () => {
		setSearchValue('');
		inputRef.current.focus();
		setIsOpen(!isOpen);
	}

	//===при клике на инпут получаем его значение и открываем список найденных городов=====================================================
	const onClickInput = (e) => {
		setSearchValue(e.target.value);
		setIsOpen(true);
	}

	//===скрытие поля поиска при клике вне этого поля=======================================================================================
	React.useEffect(() => {
		const onClickOutsideSearch = (e) => {
			if (e.composedPath().includes(btnRef.current)) {
				setIsSearch(true);
			} else if (!e.composedPath().includes(formRef.current)) {
				setIsSearch(false);
				setSearchValue('');
			}
		}

		document.addEventListener('click', onClickOutsideSearch);

		return () => {
			document.removeEventListener('click', onClickOutsideSearch);
		}
	}, [])

	return (
		<form className='search' ref={formRef}>

			<img className='search__icon' src={search} alt='Search icon' />
			<input className='search__input' ref={inputRef} autoFocus type='text' value={searchValue} placeholder='Search by location or coordinates' onChange={onClickInput} />

			{
				searchValue &&
				<img className='search__erase' src={erase} alt='Erase printed' onClick={clearSearchField} />
			}

			{
				isOpen && 
				<List isOpen={isOpen} setIsOpen={setIsOpen} searchValue={searchValue} setIsSearch={setIsSearch} setIsNearby={setIsNearby}/>
			}
		</form>
	)
}

export default Form;
