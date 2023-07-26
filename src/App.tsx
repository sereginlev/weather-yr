import React from 'react';
import { useAppDispatch } from 'hook';
import { Routes, Route } from 'react-router-dom';

import Home from 'pages/Home';
import Authentification from 'pages/Authentification';
import SignUp from 'pages/SignUp';
import Confirm from 'pages/Confirm';
import ResetPassword from 'pages/ResetPassword';
import MyLocations from 'pages/MyLocations';

import { fetchCurrent } from './redux/slices/currentSlice';

function App() {
	const dispatch = useAppDispatch();
	
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
			<Route path='/' element={<Home />} />
			<Route path='/auth' element={<Authentification />} />
			<Route path='/signup' element={<SignUp />} />
			<Route path='/confirm' element={<Confirm />} />
			<Route path='/resetpassword' element={<ResetPassword />} />
			<Route path='/mylocations' element={<MyLocations />} />
		</Routes>
	);
}

export default App;