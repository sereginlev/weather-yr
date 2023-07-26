import { PayloadAction } from '@reduxjs/toolkit';
import { CurrentItem, Status } from 'modules/current';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchFound = createAsyncThunk(
	'found/fetchFound',
	async (location: string, { rejectWithValue }) => {
		console.log(location)
		try {
			const { data } = await axios.get<CurrentItem>(`http://api.weatherapi.com/v1/forecast.json?key=${process.env.REACT_APP_WEATHER_API_KEY}&q=${location}&days=3`)

			return data as CurrentItem;
		} catch (error: any) {
			alert('Server Error! Please, try again.')
			return rejectWithValue(error.message);
		}
	}
)

interface FoundState {
	foundItem: CurrentItem;
	status: Status;
}

const initialState: FoundState = {
	foundItem: {} as CurrentItem,
	status: Status.LOADING
}

export const foundSlice = createSlice({
	name: 'found',
	initialState,
	reducers: {
		setFoundItem(state, action: PayloadAction<CurrentItem>) {
			state.foundItem = action.payload;
		}
	},
	extraReducers: (builder) => {
		builder 
			.addCase(fetchFound.pending, state => {
				state.status = Status.LOADING;
				state.foundItem = {} as CurrentItem;
			})
			.addCase(fetchFound.fulfilled, (state, action) => {
				state.status = Status.SUCCESS;
				state.foundItem = action.payload;
			})
			.addCase(fetchFound.rejected, state => {
				state.status = Status.ERROR;
				state.foundItem = {} as CurrentItem;
			})
	}
})

export const { setFoundItem } = foundSlice.actions;

export default foundSlice.reducer;