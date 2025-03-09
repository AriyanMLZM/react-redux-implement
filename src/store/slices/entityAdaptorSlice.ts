import { createSlice, createEntityAdapter } from '@reduxjs/toolkit'
import { RootStateType } from '../store'

const dataAdapter = createEntityAdapter({
	selectId: (item: { id: number; title: string }) => item.id,
})

const initialState = dataAdapter.getInitialState({
	count: 0,
})

export const entityAdaptorSlice = createSlice({
	name: 'entityAdaptor',
	initialState,
	reducers: {
		add: (state) => {
			if (state.count < 10) {
				++state.count
				dataAdapter.addOne(state, {
					id: state.count,
					title: `Item ${state.count}`,
				})
			}
		},
		reset: (state) => {
			state.count = 0
			dataAdapter.removeAll(state)
		},
	},
})

export const { selectAll } = dataAdapter.getSelectors(
	(state: RootStateType) => state.entityAdaptor
)

export const { add, reset } = entityAdaptorSlice.actions

export default entityAdaptorSlice.reducer
