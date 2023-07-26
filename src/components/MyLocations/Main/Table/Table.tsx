import React from 'react';
import { useAppDispatch, useAppSelector } from 'hook';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import styles from 'scss/modules/MyLocations/Main/Table/Table.module.scss';

import Days from './Days/Days';
import List from './List/List';

import { fetchFound } from 'redux/slices/foundSlice';
import { Location } from 'modules/current';

const Table: React.FC = () => {
	const { t } = useTranslation();
	const dispatch = useAppDispatch();
	const navigate = useNavigate();

	const { favoriteItems } = useAppSelector(state => state.users.currentUser);

	//===перейти на страницу прогноза любимого города при клике на него=====================================================================
	const onClickItem = (location: Location) => {
		const coords = `${location.lat},${location.lon}`;

		dispatch(fetchFound(coords));
		navigate('/');
	}

	return (
		<div className={styles.root}>
			{
				favoriteItems &&
					favoriteItems.length === 0 ?
					<p className={styles.text}>{ t("emptyLocations")}</p>
					:
					<>
						<Days />

						<List favoriteItems={favoriteItems} onClickItem={onClickItem}/>
					</>
			}
		</div>
	)
}

export default Table;
