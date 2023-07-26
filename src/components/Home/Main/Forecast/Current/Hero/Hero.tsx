import React from 'react';
import { useTranslation } from 'react-i18next';

import styles from 'scss/modules/Home/Main/Current/Hero/Hero.module.scss';

import recent from 'assets/icons/common icons/recent.svg';

const Hero: React.FC = () => {
	const { t } = useTranslation();

	return (
		<div className={styles.root}>
			<img className={styles.icon} src={recent} alt='Current conditions' />
			<h3 className={styles.title}>
				{t("current")}
			</h3>
		</div>
	)
}

export default Hero;