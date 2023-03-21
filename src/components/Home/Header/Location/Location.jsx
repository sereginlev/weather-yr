import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import styles from 'scss/modules/Home/Header/Location/Location.module.scss';

import CityAtLogin from './City/CityAtLogin';
import CityWithoutLogin from './City/CityWithoutLogin';
import AddFavorites from './AddFavorites/AddFavorites';

import { fetchFavorites } from 'redux/slices/userSlice';

function Location({ isNearby }) {
	const dispatch = useDispatch();

	const [isOpen, setIsOpen] = React.useState(false); // скрытие / отображение попапа с добавлением города в список избранных
	const addFavRef = React.useRef(); // ссылка на попап с добавлением города в список избранных
	const locationRef = React.useRef(); // ссылка на блок с названием текущего города и страны

	const { locations } = useSelector(state => state.users.currentUser);
	const { location: currentLocation } = useSelector(state => state.current.currentItem);
	const { location: foundLocation } = useSelector(state => state.found.foundItem);
	const { isAuth } = useSelector(state => state.users.currentUser);
	
	//===следит за изменением locations, чтобы добавить город в любимые(в favoriteItems)==================================================
	React.useEffect(() => {
		dispatch(fetchFavorites(locations));
	}, [locations]);

	React.useEffect(() => {
		//===скрыть попап с добавлением города в список избранных, при клике вне этого попапа==============================================================
		const onClickOutsideFav = (e) => {
			if (locationRef.current.contains(e.target)) {
				setIsOpen(true)
			};
			if (addFavRef.current && !addFavRef.current.contains(e.target)) {
				setIsOpen(false)
			};
		};

		document.addEventListener('click', onClickOutsideFav);

		return () => {
			document.removeEventListener('click', onClickOutsideFav);
		};
	}, [isOpen, addFavRef, locationRef]);

	return isAuth ? (
		<div className={styles.root}>
			{
				foundLocation && !isNearby ?
					<div className={styles.block} ref={locationRef}>
						<CityAtLogin location={foundLocation} />
					</div> 
					:
					currentLocation &&
					<div className={styles.block} ref={locationRef}>
						<CityAtLogin location={currentLocation} />
					</div>
			}

			{
				foundLocation && isOpen ?
					<div className={styles.addFav} ref={addFavRef}>
						<AddFavorites location={foundLocation} setIsOpen={setIsOpen} />
					</div> :
					isOpen && currentLocation &&
					<div className={styles.addFav} ref={addFavRef}>
						<AddFavorites location={currentLocation} setIsOpen={setIsOpen} />
					</div>
			}
		</div>
	) : (
		<div className={styles.root}>
			{
				foundLocation && !isNearby ?
					<div className={styles.block} ref={locationRef}>
						<CityWithoutLogin location={foundLocation} />
					</div> :
					currentLocation &&
					<div className={styles.block} ref={locationRef}>
						<CityWithoutLogin location={currentLocation} />
					</div>
			}
		</div>
	)
}

export default Location;
