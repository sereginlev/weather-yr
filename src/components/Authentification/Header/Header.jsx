import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import styles from 'scss/modules/Authentification/Header.module.scss';

import logo from 'assets/icons/common icons/logo-blue.svg';

function Header() {
	const { t } = useTranslation();

	return (
		<div className={styles.root}>
			<Link to='/' className={styles.logo}>
				<img  src={logo} alt='Company logo' />
			</Link>

			<p className={styles.text}>{ t("servedHeader") }</p>
		</div>
	)
}

export default Header;
