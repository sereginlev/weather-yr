import React from 'react';
import { useTranslation } from 'react-i18next';

import './Days.scss';

function Days({ item }) {
	const { t } = useTranslation();

	const days = [t("sunday"), t("monday"), t("tuesday"), t("wednesday"), t("thursday"), t("friday"), t("saturday")];
	const month = [t("january"), t("february"), t("march"), t("april"), t("may"), t("june"), t("jule"), t("august"), t("september"), t("october"), t("november"), t("december")];
	const today = days[new Date().getDay()]; // получение сегодняшнего дня недели, чтобы вывести Today

	return (
		<div className='item__date date'>
			<p className='date__text'>
				{today === days[new Date(item.date).getDay()] ? t("today") : days[new Date(item.date).getDay()]}, {new Date(item.date).getDate()} {month[new Date(item.date).getMonth()]}
			</p>
		</div>
	)
}

export default Days;
