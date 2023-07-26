import React, { ChangeEvent, Dispatch, SetStateAction } from 'react';

import styles from 'scss/modules/MyLocations/Header/Form.module.scss';

import search from 'assets/icons/common icons/color icons/search.svg';
import erase from 'assets/icons/common icons/close.svg';

import List from './List/List';

type FormProps = {
	searchValue: string;
	setSearchValue: Dispatch<SetStateAction<string>>;
	setIsSearch: Dispatch<SetStateAction<boolean>>;
}

const Form: React.FC<FormProps> = ({ searchValue, setSearchValue, setIsSearch }) => {
	const [isOpen, setIsOpen] = React.useState(true); // скрытие / отображение списка найденных городов
	const [isNearby, setIsNearby] = React.useState(false);// отображение пункта Nearby при поиске
	const inputRef = React.useRef<HTMLInputElement>(null); // ссылка на инпут поиска нужного города
	const btnRef = React.useRef(null); // ссылка на кнопку Search
	const formRef = React.useRef<HTMLFormElement>(null); // ссылка на форму поиска

	//===при клике на крестик в поиске очищает поле ввода и список выведенных городов======================================================
	const clearSearchField = () => {
		setSearchValue('');
		inputRef.current!.focus();
		setIsOpen(!isOpen);
	}

	//===при клике на инпут получаем его значение и открываем список найденных городов=====================================================
	const onClickInput = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
		setSearchValue(e.target.value);
		setIsOpen(true);
	}

	//===скрытие поля поиска при клике вне этого поля=======================================================================================
	React.useEffect(() => {
		const onClickOutsideSearch = (e: MouseEvent) => {
			if (e.composedPath().includes(btnRef.current!)) {
				setIsSearch(true);
			} else if (!e.composedPath().includes(formRef.current!)) {
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
		<form className={styles.root} ref={formRef}>

			<img className={styles.icon} src={search} alt='Search icon' />
			<input className={styles.input} ref={inputRef} autoFocus type='text' value={searchValue} placeholder='Search by location or coordinates' onChange={onClickInput} />

			{
				searchValue &&
				<img className={styles.erase} src={erase} alt='Erase printed' onClick={clearSearchField} />
			}

			{
				isOpen && 
				<List isOpen={isOpen} setIsOpen={setIsOpen} searchValue={searchValue} setIsSearch={setIsSearch} setIsNearby={setIsNearby}/>
			}
		</form>
	)
}

export default Form;
