import React from 'react';
import { useTranslation } from 'react-i18next';

import './Main.scss';

import Table from './Table/Table';

function Main() {
	const { t } = useTranslation();

	return (
		<div className='main _container'>
			<div className='main__block main-block'>
				<h1 className='main-block__title'>{ t("mylocations") }</h1>
				<Table />
			</div>
		</div>
	)
}

export default Main;