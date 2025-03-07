import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './slices/counterSlice'

const store = configureStore({
	reducer: {
		counter: counterReducer,
	},
})

export type RootStateType = ReturnType<typeof store.getState>

export default store
