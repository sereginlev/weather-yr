import React from 'react';

import './Footer.scss';

import nrkLogo from 'assets/icons/common icons/logo-nrk.svg';
import metLogo from 'assets/icons/common icons/logo-met.svg';
import language from 'assets/icons/common icons/color icons/language.svg';

function Footer() {
	return (
		<div className='footer'>
			<div className='_container'>
				<div className='footer__block'>
					<div className='block__served'>
						<span>Yr is served by</span>

						<div className='served__list'>
							<a className='list__link' href="http://www.nrk.no">
								<img src={nrkLogo} alt='NRK logo' />
							</a>
							<a className='list__link' href="http://www.met.no">
								<img src={metLogo} alt='MET logo' />
							</a>
						</div>
					</div>

					<p>Copyright © Norwegian Meteorological Institute and the Norwegian Broadcasting Corporation 2007-2023</p>

					<button className='btn' type='button'>
						<img className='btn__icon' src={language} alt='Choose language icon'/>
						Choose language
					</button>
				</div>
			</div>
		</div>
	)
}

export default Footer;
