import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './slices/counterSlice'
import AsyncThunkReducer from './slices/asyncThunkSlice'

const store = configureStore({
	reducer: {
		counter: counterReducer,
		asyncThunk: AsyncThunkReducer,
	},
})

export type RootStateType = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store
