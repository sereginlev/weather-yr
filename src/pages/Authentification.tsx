import React from 'react';

import 'scss/app.scss';

import Header from 'components/Authentification/Header/Header';
import Main from 'components/Authentification/Main/Main';
import Footer from 'components/Footer/Footer';

const Authentification: React.FC = () => {

	React.useEffect(() => {
		document.body.classList.add('authentification');

		return () => {
			document.body.classList.remove('authentification');
		};
	});

	return (
		<div className='wrapper'>
			<Header />
			<Main/>
			<Footer />
		</div>
	)
}

export default Authentification;
