import React from 'react';

import styles from 'scss/modules/Home/Main/Current/Block/Icon.module.scss';

function Icon({ current }) {
	return (
		<img className={styles.root} src={current.condition.icon} alt={current.condition.text} />
	)
}

export default Icon;
