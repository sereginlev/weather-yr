import React from 'react';
import { useDispatch } from 'react-redux';
import { Routes, Route } from 'react-router-dom';

import Home from 'pages/Home';
import Authentification from 'pages/Authentification';
import SignUp from 'pages/SignUp';
import Confirm from 'pages/Confirm';
import ResetPassword from 'pages/ResetPassword';
import MyLocations from 'pages/MyLocations';

import { fetchCurrent } from './redux/slices/currentSlice';

function App() {
	const dispatch = useDispatch();
	
	React.useEffect(() => {
		//===запрос с возвращением погодных условий по координатам пользователя. выполняется при входе на главную страницу======================
		navigator.geolocation.getCurrentPosition((pos) => {
			let lat = Number(pos.coords.latitude.toFixed(2));
			let lon = Number(pos.coords.longitude.toFixed(2));

			const location = `q=${lat},${lon}`

			dispatch(fetchCurrent(location));
		});
	}, []);

	return (
		<Routes>
			<Route exact path='https://witchcult-today.github.io/weather-yr/' element={<Home />} />
			<Route exact path='https://witchcult-today.github.io/weather-yr/auth' element={<Authentification />} />
			<Route exact path='https://witchcult-today.github.io/weather-yr/signup' element={<SignUp />} />
			<Route exact path='https://witchcult-today.github.io/weather-yr/confirm' element={<Confirm />} />
			<Route exact path='https://witchcult-today.github.io/weather-yr/resetpassword' element={<ResetPassword />} />
			<Route exact path='https://witchcult-today.github.io/weather-yr/mylocations' element={<MyLocations />} />
		</Routes>
	);
}

export default App;