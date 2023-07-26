import React from 'react';
import { useTranslation } from 'react-i18next';

import styles from 'scss/modules/Footer/Served.module.scss';

import nrkLogo from 'assets/icons/common icons/logo-nrk.svg';
import metLogo from 'assets/icons/common icons/logo-met.svg';

const Served: React.FC = () => {
	const { t } = useTranslation();

	return (
		<div className={styles.root}>
			<span className={styles.text}>{ t("served") }</span>

			<div className={styles.list}>
				<a className={styles.link} href="http://www.nrk.no" target="_blank">
					<img src={nrkLogo} alt='NRK logo' />
				</a>
				<a className={styles.link} href="http://www.met.no" target="_blank">
					<img src={metLogo} alt='MET logo' />
				</a>
			</div>
		</div>
	)
}

export default Served;
