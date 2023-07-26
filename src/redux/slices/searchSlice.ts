import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { Status } from 'modules/current';
import { SearchItem } from 'modules/search';

export const fetchSearch = createAsyncThunk(
	'current/fetchSearchCurrent',
	async (searchValue: string, { rejectWithValue }) => {
		try {
			const { data } = await axios.get<SearchItem[]>(`http://api.weatherapi.com/v1/search.json?key=${process.env.REACT_APP_WEATHER_API_KEY}&q=${searchValue}`)

			return data as SearchItem[];
		} catch (error: any) {
			alert('Server Error! Please, try again.')
			return rejectWithValue(error.message);
		}
	}
)

interface SearchState {
	searchItems: SearchItem[];
	foundLocation: string;
	status: Status;
}

const initialState: SearchState = {
	searchItems: [],
	foundLocation: '',
	status: Status.LOADING
}

export const searchSlice = createSlice({
	name: 'search',
	initialState,
	reducers: {
		setSearchItems(state, action: PayloadAction<SearchItem[]>) {
			state.searchItems = action.payload;
		},
		setFoundLocation(state, action: PayloadAction<string>) {
			state.foundLocation = action.payload;
		}
	},
	extraReducers: (builder) => {
		builder
			.addCase(fetchSearch.pending, state => {
				state.status = Status.LOADING;
				state.searchItems = [];
			})
			.addCase(fetchSearch.fulfilled, (state, action) => {
				state.status = Status.SUCCESS;
				state.searchItems = action.payload;
			})
			.addCase(fetchSearch.rejected, state => {
				state.status = Status.ERROR;
				state.searchItems = [];
			})
	}
})

export const { setSearchItems, setFoundLocation } = searchSlice.actions;

export default searchSlice.reducer;