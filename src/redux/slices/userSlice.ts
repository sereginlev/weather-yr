import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { Status, CurrentItem } from "modules/current";
import { User } from "modules/user";

export const fetchFavorites = createAsyncThunk(
	'user/fetchFavorites',
	async function (locations: string[], { rejectWithValue }) {
		const items: CurrentItem[] = [];

		for (let i = 0; i < locations.length; i++) {
			await fetch(`http://api.weatherapi.com/v1/forecast.json?key=${process.env.REACT_APP_WEATHER_API_KEY}&q=${locations[i]}&days=3`)
			.then(res => res.json())
			.then(data => items.push(data))
			.catch((error: Error) => {
				alert('Server Error! Please, try again.')
				console.log(error.message)
				return rejectWithValue(error.message);
			})
		}

		return items.filter((el, index) => items.indexOf(el) === index) as CurrentItem[];
	}
)

interface UserState {
	users: User[];
	currentUser: User;
	status: Status;
}

const initialState: UserState = {
	users: [],
	currentUser: {} as User,
	status: Status.LOADING
}

export const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		setUser(state, action: PayloadAction<User>) {
			state.users.push(action.payload);
			state.users = state.users.filter((el => f => !el.has(f.email) && el.add(f.email))(new Set()));
		},
		removeUser(state) {
			state.currentUser = {} as User;
		},
		setCurrentUser(state, action: PayloadAction<User>) {
			state.currentUser = action.payload;
		},
		setLocation(state, action: PayloadAction<string>) {
			state.users.map(item => item.id === state.currentUser.id ? item.locations.push(action.payload) : null);
			state.currentUser.locations.push(action.payload);
		},
		removeLocation(state, action: PayloadAction<string>) {
			state.users.map(item => item.id === state.currentUser.id ? item.locations = item.locations.filter(el => el !== action.payload) : null);
			state.users.map(item => item.id === state.currentUser.id ? item.favoriteItems = item.favoriteItems.filter(el => `${el.location.lat},${el.location.lon}` !== action.payload) : null);
			state.currentUser.locations = state.currentUser.locations.filter(item => item !== action.payload);
			state.currentUser.favoriteItems = state.currentUser.favoriteItems.filter(item => `${item.location.lat},${item.location.lon}` !== action.payload);
		}
	},
	extraReducers: (builder) => {
		builder 
			.addCase(fetchFavorites.pending, state => {
				state.status = Status.LOADING;
				state.users.map(item => item.id === state.currentUser.id ? item.id === state.currentUser.id : null);
				state.currentUser.favoriteItems = [];
			})
			.addCase(fetchFavorites.fulfilled, (state, action) => {
				state.status = Status.SUCCESS;
				state.users.map(item => item.id === state.currentUser.id ? item.favoriteItems = action.payload : null);
				state.currentUser.favoriteItems = action.payload;
			})
			.addCase(fetchFavorites.rejected, state => {
				state.status = Status.ERROR;
				state.users.map(item => item.id === state.currentUser.id ? item.favoriteItems = [] : null);
				state.currentUser.favoriteItems = [];
			})
	}
})

export const { setUser, removeUser, setLocation, removeLocation, setCurrentUser } = userSlice.actions;

export default userSlice.reducer;