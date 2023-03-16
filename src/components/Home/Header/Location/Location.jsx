import React from 'react';

import { useSelector, useDispatch } from 'react-redux';

import './Location.scss';

import { setLocation, removeLocation, fetchFavorites } from 'redux/slices/userSlice';

function Location({ isNearby }) {
	const dispatch = useDispatch();

	const [isOpen, setIsOpen] = React.useState(false); // скрытие / отображение попапа с добавлением города в список избранных
	const addFavRef = React.useRef(); // ссылка на попап с добавлением города в список избранных
	const locationRef = React.useRef(); // ссылка на блок с названием текущего города и страны

	const { locations } = useSelector(state => state.users.currentUser);
	const { location: currentLocation } = useSelector(state => state.current.currentItem);
	const { location: foundLocation } = useSelector(state => state.found.foundItem);
	const { isAuth } = useSelector(state => state.users.currentUser);

	//===добавление города в избранные города (хранится в локал сторедж через userSlice). дальше будет использоваться для вывода погодных условий на другой странице===================
	const addFavLocation = (location) => {
		const coords = `${location.lat},${location.lon}`;

		if (locations && locations.includes(coords)) {
			return
		} else {
			dispatch(setLocation(`${location.lat},${location.lon}`));
		};

		setIsOpen(false);
	};
	
	//===следит за изменением locations, чтобы добавить город в любимые(в favoriteItems)==================================================
	React.useEffect(() => {
		dispatch(fetchFavorites(locations));
	}, [locations]);

	//===удаление города из избранных (из локал стореджа и userSlice тоже)===========================================================
	const removeFavLocation = (location) => {
		const coords = `${location.lat},${location.lon}`;

		dispatch(removeLocation(coords));
		setIsOpen(false);
	}

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
	}, [isOpen, addFavRef]);
	// console.log(foundLocation && isNearby);
	// console.log(foundLocation);
	console.log(isNearby);
	return isAuth ? (
		<div className='location'>
			{
				foundLocation && !isNearby ?
					<div className='location__block' ref={locationRef}>
						<div className='city'>
							<h2 className='city__name'>{foundLocation.name}</h2>
							{
								locations && locations.includes(`${foundLocation.lat},${foundLocation.lon}`) ?
									<svg x="0" y="0" width="20" height="20" viewBox="0 0 24 24" focusable="false" aria-hidden="true"><path stroke="#ff9d00" strokeLinecap="round" strokeWidth="1.5px" d="M14.922 8.818l-2.646-6.175a.3.3 0 0 0-.552 0L9.078 8.818A.3.3 0 0 1 8.802 9H2.83a.3.3 0 0 0-.192.53l5.185 4.322a.3.3 0 0 1 .08.357l-2.987 6.402a.3.3 0 0 0 .426.384l6.505-3.902a.3.3 0 0 1 .308 0l6.505 3.902a.3.3 0 0 0 .426-.384l-2.987-6.402a.3.3 0 0 1 .08-.357l5.185-4.322a.3.3 0 0 0-.192-.53h-5.973a.3.3 0 0 1-.276-.182z" fill="#ff9d00"></path></svg> :
									<svg x="0" y="0" width="20" height="20" viewBox="0 0 24 24" focusable="false" aria-hidden="true"><path stroke="#21292B" strokeLinecap="round" strokeWidth="1.5px" d="M14.922 8.818l-2.646-6.175a.3.3 0 0 0-.552 0L9.078 8.818A.3.3 0 0 1 8.802 9H2.83a.3.3 0 0 0-.192.53l5.185 4.322a.3.3 0 0 1 .08.357l-2.987 6.402a.3.3 0 0 0 .426.384l6.505-3.902a.3.3 0 0 1 .308 0l6.505 3.902a.3.3 0 0 0 .426-.384l-2.987-6.402a.3.3 0 0 1 .08-.357l5.185-4.322a.3.3 0 0 0-.192-.53h-5.973a.3.3 0 0 1-.276-.182z" fill="none"></path></svg>
							}

						</div>
						{
							foundLocation && foundLocation.region.length === 0 ?
								<p className='region'>{foundLocation.country}</p> :
								<p className='region'>{foundLocation.region}, {foundLocation.country}</p>
						}
					</div> 
					:
					currentLocation &&
					<div className='location__block' ref={locationRef}>
						<div className='city'>
							<h2 className='city__name'>{currentLocation.name}</h2>
							{
								locations && locations.includes(`${currentLocation.lat},${currentLocation.lon}`) ?
									<svg x="0" y="0" width="20" height="20" viewBox="0 0 24 24" focusable="false" aria-hidden="true"><path stroke="#ff9d00" strokeLinecap="round" strokeWidth="1.5px" d="M14.922 8.818l-2.646-6.175a.3.3 0 0 0-.552 0L9.078 8.818A.3.3 0 0 1 8.802 9H2.83a.3.3 0 0 0-.192.53l5.185 4.322a.3.3 0 0 1 .08.357l-2.987 6.402a.3.3 0 0 0 .426.384l6.505-3.902a.3.3 0 0 1 .308 0l6.505 3.902a.3.3 0 0 0 .426-.384l-2.987-6.402a.3.3 0 0 1 .08-.357l5.185-4.322a.3.3 0 0 0-.192-.53h-5.973a.3.3 0 0 1-.276-.182z" fill="#ff9d00"></path></svg> :
									<svg x="0" y="0" width="20" height="20" viewBox="0 0 24 24" focusable="false" aria-hidden="true"><path stroke="#21292B" strokeLinecap="round" strokeWidth="1.5px" d="M14.922 8.818l-2.646-6.175a.3.3 0 0 0-.552 0L9.078 8.818A.3.3 0 0 1 8.802 9H2.83a.3.3 0 0 0-.192.53l5.185 4.322a.3.3 0 0 1 .08.357l-2.987 6.402a.3.3 0 0 0 .426.384l6.505-3.902a.3.3 0 0 1 .308 0l6.505 3.902a.3.3 0 0 0 .426-.384l-2.987-6.402a.3.3 0 0 1 .08-.357l5.185-4.322a.3.3 0 0 0-.192-.53h-5.973a.3.3 0 0 1-.276-.182z" fill="none"></path></svg>
							}

						</div>
						{
							currentLocation && currentLocation.region === 0 ?
								<p className='region'>{currentLocation.country}</p> :
								<p className='region'>{currentLocation.region}, {currentLocation.country}</p>
						}
					</div>
			}

			{
				foundLocation && isOpen ?
					<div className='add-fav' ref={addFavRef}>
						{
							locations && locations.includes(`${foundLocation.lat},${foundLocation.lon}`) ?
								<button className='add-fav__action' type='button' onClick={() => removeFavLocation(foundLocation)}>
									<svg x="0" y="0" width="20" height="20" viewBox="0 0 24 24" focusable="false" aria-hidden="true"><path stroke="#ff9d00" strokeLinecap="round" strokeWidth="1.5px" d="M14.922 8.818l-2.646-6.175a.3.3 0 0 0-.552 0L9.078 8.818A.3.3 0 0 1 8.802 9H2.83a.3.3 0 0 0-.192.53l5.185 4.322a.3.3 0 0 1 .08.357l-2.987 6.402a.3.3 0 0 0 .426.384l6.505-3.902a.3.3 0 0 1 .308 0l6.505 3.902a.3.3 0 0 0 .426-.384l-2.987-6.402a.3.3 0 0 1 .08-.357l5.185-4.322a.3.3 0 0 0-.192-.53h-5.973a.3.3 0 0 1-.276-.182z" fill="#ff9d00"></path></svg>
									<p className='action__text'>Remove from "My locations"</p>
								</button> :

								<button className='add-fav__action' type='button' onClick={() => addFavLocation(foundLocation)}>
									<svg x="0" y="0" width="20" height="20" viewBox="0 0 24 24" focusable="false" aria-hidden="true"><path stroke="#21292B" strokeLinecap="round" strokeWidth="1.5px" d="M14.922 8.818l-2.646-6.175a.3.3 0 0 0-.552 0L9.078 8.818A.3.3 0 0 1 8.802 9H2.83a.3.3 0 0 0-.192.53l5.185 4.322a.3.3 0 0 1 .08.357l-2.987 6.402a.3.3 0 0 0 .426.384l6.505-3.902a.3.3 0 0 1 .308 0l6.505 3.902a.3.3 0 0 0 .426-.384l-2.987-6.402a.3.3 0 0 1 .08-.357l5.185-4.322a.3.3 0 0 0-.192-.53h-5.973a.3.3 0 0 1-.276-.182z" fill="none"></path></svg>
									<p className='action__text'>Add to "My locations"</p>
								</button>
						}
						<div className='divider'></div>
						<div className='add-fav__info'>
							{
								foundLocation && foundLocation.region.length == 0 ?
									<p className='info__text'>{foundLocation.country}</p> :
									<p className='info__text'>{foundLocation.region}, {foundLocation.country}</p>
							}
							<p className='info__coords'>{foundLocation.lat}, {foundLocation.lon}</p>
						</div>
					</div> :
					isOpen && currentLocation &&
					<div className='add-fav' ref={addFavRef}>
						{
							locations && locations.includes(`${currentLocation.lat},${currentLocation.lon}`) ?
								<button className='add-fav__action' type='button' onClick={() => removeFavLocation(currentLocation)}>
									<svg x="0" y="0" width="20" height="20" viewBox="0 0 24 24" focusable="false" aria-hidden="true"><path stroke="#ff9d00" strokeLinecap="round" strokeWidth="1.5px" d="M14.922 8.818l-2.646-6.175a.3.3 0 0 0-.552 0L9.078 8.818A.3.3 0 0 1 8.802 9H2.83a.3.3 0 0 0-.192.53l5.185 4.322a.3.3 0 0 1 .08.357l-2.987 6.402a.3.3 0 0 0 .426.384l6.505-3.902a.3.3 0 0 1 .308 0l6.505 3.902a.3.3 0 0 0 .426-.384l-2.987-6.402a.3.3 0 0 1 .08-.357l5.185-4.322a.3.3 0 0 0-.192-.53h-5.973a.3.3 0 0 1-.276-.182z" fill="#ff9d00"></path></svg>
									<p className='action__text'>Remove from "My locations"</p>
								</button> :

								<button className='add-fav__action' type='button' onClick={() => addFavLocation(currentLocation)}>
									<svg className='add-icon' x="0" y="0" width="20" height="20" viewBox="0 0 24 24" focusable="false" aria-hidden="true"><path stroke="#21292B" strokeLinecap="round" strokeWidth="1.5px" d="M14.922 8.818l-2.646-6.175a.3.3 0 0 0-.552 0L9.078 8.818A.3.3 0 0 1 8.802 9H2.83a.3.3 0 0 0-.192.53l5.185 4.322a.3.3 0 0 1 .08.357l-2.987 6.402a.3.3 0 0 0 .426.384l6.505-3.902a.3.3 0 0 1 .308 0l6.505 3.902a.3.3 0 0 0 .426-.384l-2.987-6.402a.3.3 0 0 1 .08-.357l5.185-4.322a.3.3 0 0 0-.192-.53h-5.973a.3.3 0 0 1-.276-.182z" fill="none"></path></svg>
									<p className='action__text'>Add to "My locations"</p>
								</button>
						}
						<div className='divider'></div>
						<div className='add-fav__info'>
							{
								currentLocation && currentLocation.region.length == 0 ?
									<p className='info__text'>{currentLocation.country}</p> :
									<p className='info__text'>{currentLocation.region}, {currentLocation.country}</p>
							}
							<p className='info__coords'>{currentLocation.lat}, {currentLocation.lon}</p>
						</div>
					</div>
			}

		</div>
	) : (
		<div className='location'>
			{
				foundLocation && !isNearby ?
					<div className='location__block' ref={locationRef}>
						<div className='city'>
							<h2 className='city__name'>{foundLocation.name}</h2>
						</div>
						{
							foundLocation && foundLocation.region.length === 0 ?
								<p className='region'>{foundLocation.country}</p> :
								<p className='region'>{foundLocation.region}, {foundLocation.country}</p>
						}
					</div> :
					currentLocation &&
					<div className='location__block' ref={locationRef}>
						<div className='city'>
							<h2 className='city__name'>{currentLocation.name}</h2>
						</div>
						{
							currentLocation && currentLocation.region === 0 ?
								<p className='region'>{currentLocation.country}</p> :
								<p className='region'>{currentLocation.region}, {currentLocation.country}</p>
						}
					</div>
			}
		</div>
	)
}

export default Location;
