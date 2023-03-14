import React from 'react';

import Header from 'components/MyLocations/Header/Header';
import Main from 'components/MyLocations/Main/Main';
import Footer from 'components/Footer/Footer';

function MyLocations() {

	React.useEffect(() => {
		document.body.classList.add('my-locations');

		return () => {
			document.body.classList.remove('my-locations');
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

export default MyLocations;
