import React from 'react';
import { useTranslation } from 'react-i18next';

import './Invalid.scss';

function Invalid() {
	const { t } = useTranslation();

	return (
		<p className='invalid'>{ t("invalidEmail") }</p>
	)
}

export default Invalid;
