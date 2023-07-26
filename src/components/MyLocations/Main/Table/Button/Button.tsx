import React from 'react';
import { useAppDispatch } from 'hook';
import { useTranslation } from 'react-i18next';

import styles from 'scss/modules/MyLocations/Main/Table/Button.module.scss';

import close from 'assets/icons/common icons/close.svg';
import remove from 'assets/icons/common icons/color icons/remove.svg';

import { removeLocation } from 'redux/slices/userSlice';
import { Location } from 'modules/current';

type ButtonProps = {
	location: Location;
}

const Button: React.FC<ButtonProps> = ({ location }) => {
	const { t } = useTranslation();
	const dispatch = useAppDispatch();

	const [isOpen, setIsOpen] = React.useState(false);

	const popupRef = React.useRef(null);
	const buttonRef = React.useRef<HTMLButtonElement>(null);

	//===удаление города из избранных (из локал стореджа и userSlice тоже)===========================================================
	const removeFavLocation = (location: Location) => {
		const coords = `${location.lat},${location.lon}`;

		dispatch(removeLocation(coords));

		setIsOpen(false);
	}
	
	//===закрытие попапа при клике вне его=================================================================================================
	React.useEffect(() => {
		const onClickOutsidePopup = (e: MouseEvent) => {
			if (buttonRef.current && buttonRef.current.contains((e.target as Node))) {
				setIsOpen(!isOpen);
			} 
			if (popupRef.current && popupRef.current !== e.target) {
				setIsOpen(!isOpen);
			}
		}

		document.addEventListener('click', onClickOutsidePopup);

		return () => {
			document.removeEventListener('click', onClickOutsidePopup);
		}
	}, [popupRef, isOpen]);

	return (
		<>
			<button className={styles.btn} type='button' ref={buttonRef}>
				<svg  width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M13 5C13 4.44772 12.5523 4 12 4C11.4477 4 11 4.44772 11 5C11 5.55228 11.4477 6 12 6C12.5523 6 13 5.55228 13 5Z" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
					<path d="M13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13C12.5523 13 13 12.5523 13 12Z" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
					<path d="M13 19C13 18.4477 12.5523 18 12 18C11.4477 18 11 18.4477 11 19C11 19.5523 11.4477 20 12 20C12.5523 20 13 19.5523 13 19Z" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
				</svg>
			</button>

			{
				isOpen &&
				<div className={styles.popup} ref={popupRef}>
					<div className={styles.remove} onClick={() => removeFavLocation(location)}>
						<img className={styles.icon} src={remove} alt='Remove from my locations' />
						<p className={styles.removeText}>{ t("removeFromMyLocations") }</p>
					</div>
					<div className={styles.close} onClick={() => setIsOpen(false)}>
						<img className={styles.icon} src={close} alt='Close popup' />
						<p className={styles.closeText}>{ t("close") }</p>
					</div>
				</div>
			}
		</>
	)
}

export default Button;
