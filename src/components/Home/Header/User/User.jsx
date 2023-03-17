import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';

import login from 'assets/icons/common icons/color icons/login.svg';

import { removeUser } from 'redux/slices/userSlice';

function User() {
	const { t } = useTranslation();
	const dispatch = useDispatch();
	const [isOpen, setIsOpen] = React.useState(false);

	const { isAuth } = useSelector(state => state.users.currentUser);

	return (
		<>
			{
				!isAuth ?
					<Link to='/auth' className='btn' type='button' onClick={() => setIsOpen(!isOpen)}>
						<img className='btn__icon' src={login} alt='Login icon' />
						{ t("login") }
					</Link>
					:
					<button className='btn' type='button' onClick={() => dispatch(removeUser())}>
						<img className='btn__icon' src={login} alt='Login icon' />
						{ t("logout") }
					</button>
			}
		</>
	)
}

export default User;
