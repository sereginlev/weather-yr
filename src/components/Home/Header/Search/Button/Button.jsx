import React from 'react';
import { useTranslation } from 'react-i18next';

import styles from 'scss/modules/Home/Button.module.scss';

import search from 'assets/icons/common icons/color icons/search.svg';

function Button({ setSearchValue, setIsSearch }) {
	const { t } = useTranslation();

	const btnRef = React.useRef(); // ссылка на кнопку Search
	const formRef = React.useRef(); // ссылка на форму поиска

	//===при клике вне поиска скрывает его==================================================================================================
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
			<button className={styles.btn} ref={btnRef}>
				<img className={styles.icon} src={search} alt='Search icon' />
				{ t("search") }
			</button>
		)
	}

	export default Button;
