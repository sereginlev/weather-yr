import React, { Dispatch, SetStateAction } from 'react';
import { useTranslation } from 'react-i18next';

import styles from 'scss/modules/Home/Main/Table/Hourly/Button.module.scss';

import arrowLeft from 'assets/icons/common icons/color icons/arrow-left.svg';
import arrowRight from 'assets/icons/common icons/color icons/arrow-right.svg';
import { Forecastday } from 'modules/current';

type ButtonProps = {
	item: Forecastday;
	forecast: Forecastday[];
	index: number;
	setIndex: Dispatch<SetStateAction<number>>;
}

const Buttons: React.FC<ButtonProps> = ({ item, forecast, index, setIndex }) => {
	const { t } = useTranslation();
	
	const [isNext, setIsNext] = React.useState<boolean | null>(null);
	const [isPrevious, setIsPrevious] = React.useState<boolean | null>(null);

	//===показать следующий день при клике на кнопку next day=============================================================================
	const onClickNext = () => {
		setIndex(index + 1);
	}

	//===показать предыдущий день при клике на кнопку previous day=========================================================================
	const onClickPrevious = () => {
		setIndex(index - 1);
	}

	//===отображение кнопок previous day и next day========================================================================================
	React.useEffect(() => {
		if (index === 0) {
			setIsPrevious(false);
			setIsNext(true);
		} else if (index === forecast.length - 1) {
			setIsPrevious(true);
			setIsNext(false);
		} else {
			setIsPrevious(true);
			setIsNext(true);
		}
	}, [isNext, isPrevious, index]);

	return (
		<div className={styles.root}>
			{
				isPrevious &&
				<button className={styles.prev} type='button' onClick={onClickPrevious}>
					<img className={styles.icon} src={arrowLeft} alt='Arrow left' />
					{ t("previousDay") }
				</button>
			}
			{
				isNext &&
				<button className={styles.next} type='button' onClick={onClickNext}>
					{ t("nextDay") }
					<img className={styles.icon} src={arrowRight} alt='Arrow right' />
				</button>
			}
		</div>
	)
}

export default Buttons;
