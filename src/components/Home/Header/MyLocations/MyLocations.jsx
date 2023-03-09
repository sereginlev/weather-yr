import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import myLocations from 'assets/icons/common icons/color icons/map.svg'

function MyLocations() {

	const { isAuth } = useSelector(state => state.users.currentUser);

	return (
		<>
			{
				isAuth ?
					<Link to='/mylocations' className='btn' type='button'>
						<img className='btn__icon' src={myLocations} alt='My Locations icon' />
						My Locations
					</Link>
					:
					null
			}
		</>
	)
}

export default MyLocations;
