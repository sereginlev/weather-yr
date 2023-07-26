import React, { Dispatch, SetStateAction } from 'react';
import { useAppSelector, useAppDispatch } from 'hook';
import { useTranslation } from 'react-i18next';

import styles from 'scss/modules/Home/Header/Location/AddFavorites.module.scss';

import { setLocation, removeLocation } from 'redux/slices/userSlice';
import { Location } from 'modules/current';

type AddFavoritesProps = {
	location: Location;
	setIsOpen: Dispatch<SetStateAction<boolean>>;
}

const AddFavorites: React.FC<AddFavoritesProps> = ({ location, setIsOpen }) => {
	const dispatch = useAppDispatch();
	const { t } = useTranslation();

	const { locations } = useAppSelector(state => state.users.currentUser);

	//===добавление города в избранные города (хранится в локал сторедж через userSlice). дальше будет использоваться для вывода погодных условий на другой странице===================
	const addFavLocation = (location: Location) => {
		const coords = `${location.lat},${location.lon}`;

		if (locations && locations.includes(coords)) {
			return
		} else {
			dispatch(setLocation(`${location.lat},${location.lon}`));
		};

		setIsOpen(false);
	};

	//===удаление города из избранных (из локал стореджа и userSlice тоже)===========================================================
	const removeFavLocation = (location: Location) => {
		const coords = `${location.lat},${location.lon}`;

		dispatch(removeLocation(coords));
		setIsOpen(false);
	}

	return (
		<>
			{
				locations && locations.includes(`${location.lat},${location.lon}`) ?
					<button className={styles.action} type='button' onClick={() => removeFavLocation(location)}>
						<svg className={styles.remove} x="0" y="0" width="20" height="20" viewBox="0 0 24 24" focusable="false" aria-hidden="true"><path stroke="#ff9d00" strokeLinecap="round" strokeWidth="1.5px" d="M14.922 8.818l-2.646-6.175a.3.3 0 0 0-.552 0L9.078 8.818A.3.3 0 0 1 8.802 9H2.83a.3.3 0 0 0-.192.53l5.185 4.322a.3.3 0 0 1 .08.357l-2.987 6.402a.3.3 0 0 0 .426.384l6.505-3.902a.3.3 0 0 1 .308 0l6.505 3.902a.3.3 0 0 0 .426-.384l-2.987-6.402a.3.3 0 0 1 .08-.357l5.185-4.322a.3.3 0 0 0-.192-.53h-5.973a.3.3 0 0 1-.276-.182z" fill="#ff9d00"></path></svg>
						<p className={styles.actionText}>{t("removeFromMyLocations")}</p>
					</button> :

					<button className={styles.action} type='button' onClick={() => addFavLocation(location)}>
						<svg className={styles.add} x="0" y="0" width="20" height="20" viewBox="0 0 24 24" focusable="false" aria-hidden="true"><path stroke="#21292B" strokeLinecap="round" strokeWidth="1.5px" d="M14.922 8.818l-2.646-6.175a.3.3 0 0 0-.552 0L9.078 8.818A.3.3 0 0 1 8.802 9H2.83a.3.3 0 0 0-.192.53l5.185 4.322a.3.3 0 0 1 .08.357l-2.987 6.402a.3.3 0 0 0 .426.384l6.505-3.902a.3.3 0 0 1 .308 0l6.505 3.902a.3.3 0 0 0 .426-.384l-2.987-6.402a.3.3 0 0 1 .08-.357l5.185-4.322a.3.3 0 0 0-.192-.53h-5.973a.3.3 0 0 1-.276-.182z" fill="none"></path></svg>
						<p className={styles.actionText}>{t("addToMyLocations")}</p>
					</button>
			}

			<div className={styles.divider}></div>

			<div className={styles.info}>
				{
					location && location.region.length == 0 ?
						<p className={styles.infoText}>{location.country}</p> :
						<p className={styles.infoText}>{location.region}, {location.country}</p>
				}
				<p className={styles.coords}>{location.lat}, {location.lon}</p>
			</div>
		</>
	)
}

export default AddFavorites;
