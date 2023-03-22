import React from 'react';

import styles from 'scss/modules/Home/Main/Current/Current.module.scss';

import Hero from './Hero/Hero';
import Icon from './Block/Icon/Icon';
import Temperature from './Block/Temperature/Temperature';
import Precipitation from './Block/Precipitation/Precipitation';
import Wind from './Block/Wind/Wind';

function Current({ current }) {
	return (
		<div className={styles.root}>
			<Hero />

			{
				current !== undefined &&
				<div className={styles.block}>
					<Icon current={current} />

					<Temperature current={current} />

					<Precipitation current={current} />

					<Wind current={current} />
				</div>
			}
		</div>
	)
}

export default Current;
