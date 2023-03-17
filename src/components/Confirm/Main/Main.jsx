import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import './Main.scss';

function Main() {
	const { t } = useTranslation();

	return (
		<div className='main-auth'>
			<p className='main-auth__text'>{ t("authConfirmEmail") }</p>
			<Link className='main-auth__btn' to='/auth'>{ t("authContinue") }</Link>
		</div>
	)
}

export default Main;
