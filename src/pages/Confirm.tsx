import React from 'react';

import Header from 'components/Authentification/Header/Header';
import Main from 'components/Confirm/Main/Main';
import Footer from 'components/Footer/Footer';

const Confirm: React.FC = () => {
  return (
	 <div className='wrapper'>
		<Header />
		<Main />
		<Footer />
	 </div>
  )
}

export default Confirm;
