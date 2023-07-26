import { configureStore } from '@reduxjs/toolkit';
import {
	persistStore,
	persistReducer,
	FLUSH,
	REHYDRATE,
	PAUSE,
	PERSIST,
	PURGE,
	REGISTER
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import current from './slices/currentSlice';
import search from './slices/searchSlice';
import found from './slices/foundSlice';
import user from './slices/userSlice';

const persistConfig = {
	key: 'root',
	storage
}

const users = persistReducer(persistConfig, user);

export const store = configureStore({
	reducer: {
		current,
		search,
		found,
		users
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: {
				ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
			},
		}),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;