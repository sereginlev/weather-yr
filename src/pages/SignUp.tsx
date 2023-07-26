import React from 'react';

import Header from 'components/Authentification/Header/Header';
import Main from 'components/SignUp/Main/Main';
import Footer from 'components/Footer/Footer';

const Register: React.FC = () => {
  return (
	 <div className='wrapper'>
		<Header />
		<Main />
		<Footer />
	 </div>
  )
}

export default Register;
