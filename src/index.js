import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { store, persistor } from './redux/store';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import './firebase';
import './i18n';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<Suspense fallback={<div>Loading...</div>}>
			<HashRouter>
				<Provider store={store}>
					<PersistGate loading={null} persistor={persistor}>
						<App />
					</PersistGate>
				</Provider>
			</HashRouter>
		</Suspense>
	</React.StrictMode>
);

