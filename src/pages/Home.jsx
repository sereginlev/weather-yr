import React from 'react';

import 'scss/app.scss';

import Header from 'components/Home/Header/Header';
import Main from 'components/Home/Main/Main';
import Footer from 'components/Footer/Footer';

function Home() {

	React.useEffect(() => {
		document.body.classList.add('home');

		return () => {
			document.body.classList.remove('home');
		};
	});

	return (
		<div className='wrapper'>
			<Header />
			<Main />
			<Footer />
		</div>
	)
}

export default Home;
