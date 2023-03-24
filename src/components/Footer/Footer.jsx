import React from 'react';
import { useTranslation } from 'react-i18next';

import styles from 'scss/modules/Footer/Footer.module.scss';

import Served from './Served/Served';
import Button from './Button/Button';

function Footer() {
	const { t } = useTranslation();

	return (
		<div className={styles.root}>
			<div className='container'>
				<div className={styles.block}>
					<Served />

					<p className={styles.text}>{ t("copyright") }</p>

					<Button />
				</div>
			</div>
		</div>
	)
}

export default Footer;
