import React from 'react';

import './Buttons.scss';

import arrowLeft from 'assets/icons/common icons/color icons/arrow-left.svg';
import arrowRight from 'assets/icons/common icons/color icons/arrow-right.svg';

function Buttons({ item, forecast }) {
	const [isNext, setIsNext] = React.useState(null);
	const [isPrevious, setIsPrevious] = React.useState(null);

	React.useEffect(() => {
		for (let i = 0; i < forecast.length; i++) {
			if (item.date === forecast[i].date && i === 0) {
				setIsNext(true);
				setIsPrevious(false);
				break;
			} else if (item.date === forecast[i].date && i === (forecast.length - 1)) {
				setIsNext(false);
				setIsPrevious(true);
				break;
			} else {
				setIsNext(true);
				setIsPrevious(true);
			}
		}
	},[]);

	return (
		<div className='hourly-table__buttons'>
			{
				isPrevious &&
				<button className='btn prev' type='button'>
					<img className='btn__icon' src={arrowLeft} alt='Arrow left' />
					Previous day
				</button>
			}
			{
				isNext &&
				<button className='btn next' type='button'>
					Next day
					<img className='btn__icon' src={arrowRight} alt='Arrow right' />
				</button>
			}
		</div>
	)
}

export default Buttons;
