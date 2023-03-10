import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchFavorites = createAsyncThunk(
	'user/fetchFavorites',
	async function (locations) {
		const items = [];
		for (let i = 0; i < locations.length; i++) {
			await fetch(`http://api.weatherapi.com/v1/current.json?key=${process.env.REACT_APP_WEATHER_API_KEY}&q=${locations[i]}`)
			.then(res => res.json())
			.then(data => items.push(data))
			.catch((e) => {
				alert('Error:', e)
				console.log('Error:', e)
			})
		}
		return items;
	}
)

const initialState = {
	users: [],
	currentUser: {}
}

export const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		setUser(state, action) {
			state.users.push(action.payload);
			state.users = state.users.filter((el => f => !el.has(f.email) && el.add(f.email))(new Set()));
		},
		removeUser(state) {
			state.currentUser = {};
		},
		setCurrentUser(state, action) {
			state.currentUser = action.payload;
		},
		setLocation(state, action) {
			state.users.map(item => item.id === state.currentUser.id ? item.locations.push(action.payload) : null);
			state.currentUser.locations.push(action.payload);
		},
		removeLocation(state, action) {
			state.users.map(item => item.id === state.currentUser.id ? item.locations = item.locations.filter(el => el !== action.payload) : null);
			state.users.map(item => item.id === state.currentUser.id ? item.favoriteItems = item.favoriteItems.filter(el => el !== action.payload) : null);
			state.currentUser.locations = state.currentUser.locations.filter(item => item !== action.payload);
			state.currentUser.favoriteItems = state.currentUser.favoriteItems.filter(item => item !== action.payload);
		}
	},
	extraReducers: {
		[fetchFavorites.pending]: (state) => {
			state.status = 'loading';
			state.users.map(item => item.id === state.currentUser.id ? item.id === state.currentUser.id : null);
			state.currentUser.favoriteItems = [];
		},
		[fetchFavorites.fulfilled]: (state, action) => {
			state.status = 'success';
			state.users.map(item => item.id === state.currentUser.id ? item.favoriteItems = action.payload : null);
			state.currentUser.favoriteItems = action.payload;
		},
		[fetchFavorites.rejected]: (state) => {
			state.status = 'error';
			state.users.map(item => item.id === state.currentUser.id ? item.favoriteItems = [] : null);
			state.currentUser.favoriteItems = [];
		}
	}
})

export const { setUser, removeUser, setLocation, removeLocation, setCurrentUser } = userSlice.actions;

export default userSlice.reducer;