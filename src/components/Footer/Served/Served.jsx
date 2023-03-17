import React from 'react';
import { useTranslation } from 'react-i18next';

import './Served.scss';

import nrkLogo from 'assets/icons/common icons/logo-nrk.svg';
import metLogo from 'assets/icons/common icons/logo-met.svg';

function Served() {
	const { t } = useTranslation();

	return (
		<div className='block__served'>
			<span>{ t("served") }</span>

			<div className='served__list'>
				<a className='list__link' href="http://www.nrk.no">
					<img src={nrkLogo} alt='NRK logo' />
				</a>
				<a className='list__link' href="http://www.met.no">
					<img src={metLogo} alt='MET logo' />
				</a>
			</div>
		</div>
	)
}

export default Served;
