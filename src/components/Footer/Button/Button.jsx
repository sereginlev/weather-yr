import React from 'react';
import { useTranslation } from 'react-i18next';

import './Button.scss';

import language from 'assets/icons/common icons/color icons/language.svg';

function Button() {
	const [isOpen, setIsOpen] = React.useState(false);
	const langRef = React.useRef();
	const rusRef = React.useRef();
	const enRef = React.useRef();

	const { t, i18n } = useTranslation();

	const changeLanguage = (language) => {
		i18n.changeLanguage(language);
	}

	//===показать / скрыть меню с выбором языка. при клике вне меню скрыть его===============================================================
	React.useEffect(() => {
		const onClickOutsideBtn = (e) => {
			if (e.composedPath().includes(langRef.current)) {
				setIsOpen(!isOpen);
				langRef.current.classList.add('opened'); 
			} else {
				setIsOpen(false);
				langRef.current.classList.remove('opened');
			}

			if (e.target === rusRef.current || e.target === enRef.current) {
				setIsOpen(!isOpen);
				langRef.current.classList.remove('opened');
			}
		}

		document.addEventListener('click', onClickOutsideBtn);

		return () => {
			document.removeEventListener('click', onClickOutsideBtn);
		}
	}, [langRef, isOpen, rusRef, enRef])

	return (
		<button className='btn' type='button' ref={langRef}>
			<img className='btn__icon' src={language} alt='Choose language icon' />
			{ t("lang") }
			{
				isOpen &&
				<div className='btn__lang lang'>
					<span className='lang__btn' ref={rusRef} onClick={() => changeLanguage("ru")}>Русский</span>
					<span className='lang__btn' ref={enRef} onClick={() => changeLanguage("en")}>English</span>
				</div>
			}
		</button>
	)
}

export default Button;
