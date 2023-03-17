import React from 'react';
import { useTranslation } from 'react-i18next';

import './Footer.scss';

import Served from './Served/Served';
import Button from './Button/Button';

function Footer() {
	const { t } = useTranslation();

	return (
		<div className='footer'>
			<div className='_container'>
				<div className='footer__block'>
					<Served />

					<p>{ t("copyright") }</p>

					<Button />
				</div>
			</div>
		</div>
	)
}

export default Footer;
