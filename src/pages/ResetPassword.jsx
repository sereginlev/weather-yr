import React from 'react';

// import 'components/ResetPassword/Main/Main.scss';

import Header from 'components/Authentification/Header/Header';
import Main from 'components/ResetPassword/Main/Main';
import Footer from 'components/Footer/Footer';

function ResetPassword() {
  return (
	 <div className='wrapper'>
		<Header />
		<Main />
		<Footer />
	 </div>
  )
}

export default ResetPassword;
