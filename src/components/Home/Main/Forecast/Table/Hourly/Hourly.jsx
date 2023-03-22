import React from 'react';

import styles from 'scss/modules/Home/Main/Table/Hourly/Hourly.module.scss';

import Days from './Days/Days';
import Table from './Table/Table';
import Sun from './Sun/Sun';
import Buttons from './Buttons/Buttons';

function Hourly({ setIsHourly, item, forecast, index, setIndex }) {
	const wrapperRef = React.useRef();

	React.useEffect(() => {
		//===закрытие окна houry при клике вне его===========================================================================================
		const onClickOutsideHourly = (e) => {
			if (e.target === wrapperRef.current) {
				setIsHourly(false);
			}
		}

		document.addEventListener('click', onClickOutsideHourly)

		return () => {
			document.removeEventListener('click', onClickOutsideHourly);
		};
	})

	return (
		<div className={styles.wrapper} ref={wrapperRef}>

			<div className={styles.root}>
				<div className={styles.header}>
					<Days item={item} />
					<svg className={styles.icon} onClick={() => setIsHourly(false)} xmlns="http://www.w3.org/2000/svg" x="0" y="0" width="34" height="34" viewBox="0 0 24 24" focusable="false" aria-hidden="true"><defs><symbol id="icon-cross" fill="none"><path stroke="#21292B" strokeWidth="1.5px" d="M4 20L20 4M4 4l16 16" fill="none"></path></symbol></defs><use href="#icon-cross" x="0" y="0" width="24" height="24" fill="none"></use></svg>
				</div>

				<Table item={item.hour} date={item.date} />

				<Sun astro={item.astro} />

				<Buttons item={item} forecast={forecast} index={index} setIndex={setIndex} />
			</div>
		</div>
	)
}

export default Hourly;