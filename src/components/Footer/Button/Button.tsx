import React from 'react';
import { useTranslation } from 'react-i18next';

import styles from 'scss/modules/Footer/Button.module.scss';

import language from 'assets/icons/common icons/color icons/language.svg';

import english from 'assets/icons/common icons/english.png';
import russian from 'assets/icons/common icons/russian.png';

const Button: React.FC = () => {
	const [isOpen, setIsOpen] = React.useState(false);
	const [windowWidth, setWindowWidth] = React.useState(window.innerWidth);

	const langRef = React.useRef<HTMLButtonElement>(null); // ссылка на кнопку Choose Language
	const rusRef = React.useRef<HTMLSpanElement>(null); // ссылка на кнопку Русский 
	const enRef = React.useRef<HTMLSpanElement>(null); // ссылка на кнопку English

	const { t, i18n } = useTranslation();

	const changeLanguage = (language: string) => {
		i18n.changeLanguage(language);
	}

	//===показать / скрыть меню с выбором языка. при клике вне меню скрыть его===============================================================
	React.useEffect(() => {
		const onClickOutsideBtn = (e: MouseEvent) => {
			if (e.composedPath().includes(langRef.current!)) {
				setIsOpen(!isOpen);
				langRef.current!.classList.add(styles.opened);
			} else {
				setIsOpen(false);
				langRef.current!.classList.remove(styles.opened);
			}

			if (e.target === rusRef.current || e.target === enRef.current) {
				setIsOpen(!isOpen);
				langRef.current!.classList.remove(styles.opened);
			}
		}

		document.addEventListener('click', onClickOutsideBtn);

		return () => {
			document.removeEventListener('click', onClickOutsideBtn);
		}
	}, [langRef, isOpen, rusRef, enRef]);

	React.useEffect(() => {
		const handleWindowWidth = () => {
			setWindowWidth(window.innerWidth);
		}

		window.addEventListener('resize', handleWindowWidth);

		return () => {
			window.removeEventListener('resize', handleWindowWidth);
		}
	}, [])

	return (
		<button className={styles.btn} type='button' ref={langRef}>
			<img className={styles.icon} src={language} alt='Choose language icon' />
			<p className={styles.text}>{t("lang")}</p>

			{
				isOpen &&
				<div className={styles.lang}>
					{
						windowWidth > 1050 ?
							<>
								<span className={styles.langBtn} ref={rusRef} onClick={() => changeLanguage("ru")}>Русский</span>
								<span className={styles.langBtn} ref={enRef} onClick={() => changeLanguage("en")}>English</span>
							</>
							:
							<>
								<img className={styles.img} src={russian} alt='Russian language' onClick={() => changeLanguage("ru")}/>
								<img className={styles.img} src={english} alt='English language' onClick={() => changeLanguage("en")}/>
							</>
					}
				</div>
			}
		</button>
	)
}

export default Button;
