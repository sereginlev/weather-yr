import React from 'react';
import { useTranslation } from 'react-i18next';

import './Buttons.scss';

import arrowLeft from 'assets/icons/common icons/color icons/arrow-left.svg';
import arrowRight from 'assets/icons/common icons/color icons/arrow-right.svg';

function Buttons({ item, forecast, index, setIndex }) {
	const { t } = useTranslation();
	const [isNext, setIsNext] = React.useState(null);
	const [isPrevious, setIsPrevious] = React.useState(null);

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
		<div className='hourly-table__buttons'>
			{
				isPrevious &&
				<button className='btn prev' type='button' onClick={onClickPrevious}>
					<img className='btn__icon' src={arrowLeft} alt='Arrow left' />
					{ t("previousDay") }
				</button>
			}
			{
				isNext &&
				<button className='btn next' type='button' onClick={onClickNext}>
					{ t("nextDay") }
					<img className='btn__icon' src={arrowRight} alt='Arrow right' />
				</button>
			}
		</div>
	)
}

export default Buttons;
