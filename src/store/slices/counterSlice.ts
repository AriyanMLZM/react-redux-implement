import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	count: 0,
}

export const counterSlice = createSlice({
	name: 'counter',
	initialState,
	reducers: {
		up: (state) => {
			state.count += 1
		},
		down: (state) => {
			state.count -= 1
		},
		reset: (state) => {
			state.count = 0
		},
		upByAmount: (state, action) => {
			state.count += action.payload
		},
	},
})

export const { up, down, reset, upByAmount } =
	counterSlice.actions

export default counterSlice.reducer
