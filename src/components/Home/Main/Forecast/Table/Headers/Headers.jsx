import React from 'react';
import { useTranslation } from 'react-i18next';

import './Headers.scss';

function Headers() {
	const { t } = useTranslation();

	return (
		<div className='table__headers headers'>
			<div className='headers__empty empty'></div>

			<div className='headers__times times'>
				<p className='times__text text'>{ t("night") }</p>
				<p className='times__text text'>{ t("morning") }</p>
				<p className='times__text text'>{ t("afternoon") }</p>
				<p className='times__text text'>{ t("evening") }</p>
			</div>

			<div className='headers__weather weather'>
				<p className='weather__text text'>{ t("temp") }</p>
				<p className='weather__text text'>{ t("precip") }</p>
				<p className='weather__text text'>{ t("wind") }</p>
			</div>

			<div className='headers__empty empty'></div>
		</div>
	)
}

export default Headers;
