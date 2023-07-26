import React, { Dispatch, SetStateAction } from 'react';
import { useAppDispatch, useAppSelector } from 'hook';
import { useTranslation } from 'react-i18next';

import styles from 'scss/modules/ui/Button.module.scss';

import search from 'assets/icons/common icons/color icons/search.svg';

import { fetchFavorites } from 'redux/slices/userSlice';

type ButtonProps = {
	setSearchValue: Dispatch<SetStateAction<string>>;
	setIsSearch: Dispatch<SetStateAction<boolean>>;
}

const Button: React.FC<ButtonProps> = ({ setSearchValue, setIsSearch }) => {
	const { t } = useTranslation();
	const dispatch = useAppDispatch();

	const btnRef = React.useRef<HTMLButtonElement>(null); // ссылка на кнопку Search
	const formRef = React.useRef<HTMLFormElement>(null); // ссылка на форму поиска

	const { locations } = useAppSelector(state => state.users.currentUser);

	const onClickSearch = () => {
		dispatch(fetchFavorites(locations));
	}

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
			<button className={styles.btn} ref={btnRef} onClick={onClickSearch}>
				<img className={styles.icon} src={search} alt='Search icon' />
				<p className={styles.text}>{ t("search") }</p>
			</button>
		)
	}

	export default Button;
