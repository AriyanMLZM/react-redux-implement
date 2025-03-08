import { useDispatch, useSelector } from 'react-redux'
import { RootStateType, AppDispatch } from '../store/store'
import { start, reset } from '../store/slices/asyncThunkSlice'

const AsyncThunk = () => {
	const dispatch = useDispatch<AppDispatch>()
	const status = useSelector((state: RootStateType) => state.asyncThunk.status)
	return (
		<>
			<h2 className="m-[10px] text-white text-[20px]">- Async Thunk</h2>
			<h2 className="m-[10px] text-white text-[20px]">status: {status}</h2>
			<button
				onClick={() => dispatch(start())}
				className="w-[100px] text-white bg-blue-400 m-[10px] rounded h-[30px] hover:bg-blue-300 hover:text-gray-700"
			>
				start
			</button>
			<button
				onClick={() => dispatch(reset())}
				className="w-[100px] text-white bg-blue-400 m-[10px] rounded h-[30px] hover:bg-blue-300 hover:text-gray-700"
			>
				reset
			</button>
		</>
	)
}

export default AsyncThunk
