import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

type StateType = {
	status: 'idle' | 'loading' | 'succeeded' | 'failed'
}

const initialState: StateType = {
	status: 'idle',
}

export const start = createAsyncThunk('asyncThunk/start', async () => {
	return new Promise<void>((resolve) => {
		setTimeout(() => resolve(), 2000)
	})
})

export const asyncThunkSlice = createSlice({
	name: 'asyncThunk',
	initialState,
	reducers: {
		reset(state) {
			if (state.status !== 'loading') state.status = 'idle'
		},
	},
	extraReducers(builder) {
		builder
			.addCase(start.pending, (state) => {
				state.status = 'loading'
			})
			.addCase(start.fulfilled, (state) => {
				state.status = 'succeeded'
			})
			.addCase(start.rejected, (state) => {
				state.status = 'failed'
			})
	},
})

export const { reset } = asyncThunkSlice.actions

export default asyncThunkSlice.reducer
