import React from 'react';

import './Main.scss';

import Table from './Table/Table';

function Main() {
	return (
		<div className='main _container'>
			<div className='main__block main-block'>
				<h1 className='main-block__title'>My Locations</h1>
				<Table />
			</div>
		</div>
	)
}

export default Main;