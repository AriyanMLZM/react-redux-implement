import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './slices/counterSlice'
import asyncThunkReducer from './slices/asyncThunkSlice'
import entityAdaptorReducer from './slices/entityAdaptorSlice'

const store = configureStore({
	reducer: {
		counter: counterReducer,
		asyncThunk: asyncThunkReducer,
		entityAdaptor: entityAdaptorReducer,
	},
})

export type RootStateType = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store
