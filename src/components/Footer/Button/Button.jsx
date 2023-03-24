import React from 'react';
import { useTranslation } from 'react-i18next';

import styles from 'scss/modules/Footer/Button.module.scss';

import language from 'assets/icons/common icons/color icons/language.svg';

function Button() {
	const [isOpen, setIsOpen] = React.useState(false);
	const langRef = React.useRef(); // ссылка на кнопку Choose Language
	const rusRef = React.useRef(); // ссылка на кнопку Русский 
	const enRef = React.useRef(); // ссылка на кнопку English

	const { t, i18n } = useTranslation();

	const changeLanguage = (language) => {
		i18n.changeLanguage(language);
	}

	//===показать / скрыть меню с выбором языка. при клике вне меню скрыть его===============================================================
	React.useEffect(() => {
		const onClickOutsideBtn = (e) => {
			if (e.composedPath().includes(langRef.current)) {
				setIsOpen(!isOpen);
				langRef.current.classList.add(styles.opened); 
			} else {
				setIsOpen(false);
				langRef.current.classList.remove(styles.opened);
			}

			if (e.target === rusRef.current || e.target === enRef.current) {
				setIsOpen(!isOpen);
				langRef.current.classList.remove(styles.opened);
			}
		}

		document.addEventListener('click', onClickOutsideBtn);

		return () => {
			document.removeEventListener('click', onClickOutsideBtn);
		}
	}, [langRef, isOpen, rusRef, enRef])

	return (
		<button className={styles.btn} type='button' ref={langRef}>
			<img className={styles.icon} src={language} alt='Choose language icon' />
			<p className={styles.text}>{ t("lang") }</p>

			{
				isOpen &&
				<div className={styles.lang}>
					<span className={styles.langBtn} ref={rusRef} onClick={() => changeLanguage("ru")}>Русский</span>
					<span className={styles.langBtn} ref={enRef} onClick={() => changeLanguage("en")}>English</span>
				</div>
			}
		</button>
	)
}

export default Button;
