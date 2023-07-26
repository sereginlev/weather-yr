import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { CurrentItem, Status } from "modules/current";

export const fetchCurrent = createAsyncThunk(
	'current/fetchCurrent',
	async (location: string, { rejectWithValue }) => {
			try {
				const { data } = await axios.get<CurrentItem>(`http://api.weatherapi.com/v1/forecast.json?key=${process.env.REACT_APP_WEATHER_API_KEY}&${location}&days=9`)
				
				return data as CurrentItem;
			} catch (error: any) {
				alert('Server Error! Please, try again.')
				return rejectWithValue(error.message);
			}
	}
)

interface CurrentState {
	currentItem: CurrentItem;
	status: Status;
}

const initialState: CurrentState = {
	currentItem: {} as CurrentItem,
	status: Status.LOADING
}

export const currentSlice = createSlice({
	name: 'current',
	initialState,
	reducers: {
		setCurrentItem(state, action: PayloadAction<CurrentItem>) {
			state.currentItem = action.payload;
		}
	},
	extraReducers: (builder) => {
		builder
			.addCase(fetchCurrent.pending, state => {
				state.status = Status.LOADING;
				state.currentItem = {} as CurrentItem;
			})
			.addCase(fetchCurrent.fulfilled, (state, action) => {
				state.status = Status.SUCCESS;
				state.currentItem = action.payload;
			})
			.addCase(fetchCurrent.rejected, state => {
				state.status = Status.ERROR;
				state.currentItem = {} as CurrentItem;
			})
	}
})

export const { setCurrentItem } = currentSlice.actions;

export default currentSlice.reducer;