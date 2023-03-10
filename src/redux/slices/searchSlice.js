import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchSearch = createAsyncThunk(
	'current/fetchSearchCurrent',
	async (searchValue, rejectWithValue) => {
		try {
			const { data } = await axios.get(`http://api.weatherapi.com/v1/search.json?key=${process.env.REACT_APP_WEATHER_API_KEY}&q=${searchValue}`)

			return data;
		} catch (error) {
			return rejectWithValue(error.message);
		}
	}
)

const initialState = {
	searchItems: [],
	foundLocation: '',
	status: ''
}

export const searchSlice = createSlice({
	name: 'search',
	initialState,
	reducers: {
		setSearchItems(state, action) {
			state.searchItems = action.payload;
		},
		setFoundLocation(state, action) {
			state.foundLocation = action.payload;
		}
	},
	extraReducers: {
		[fetchSearch.pending]: (state) => {
			state.status = 'loading';
			state.searchItems = [];
		},
		[fetchSearch.fulfilled]: (state, action) => {
			state.status = 'success';
			state.searchItems = action.payload;
		},
		[fetchSearch.rejected]: (state) => {
			state.status = 'error';
			state.searchItems = [];
		}
	}
})

export const { setSearchItems, setFoundLocation } = searchSlice.actions;

export default searchSlice.reducer;