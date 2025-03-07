import { useDispatch, useSelector } from 'react-redux'
import { up, down, reset, upByAmount } from './store/slices/counterSlice'
import { RootStateType } from './store/store'
const App = () => {
	const dispatch = useDispatch()
	const count = useSelector((state: RootStateType) => state.counter.count)

	return (
		<>
			<h1 className="text-[20px] text-white m-[10px]">count: {count}</h1>
			<button
				onClick={() => dispatch(up())}
				className="w-[100px] text-white bg-blue-400 m-[10px] rounded h-[30px] hover:bg-blue-300 hover:text-gray-700"
			>
				up
			</button>
			<button
				onClick={() => dispatch(down())}
				className="w-[100px] text-white bg-blue-400 m-[10px] rounded h-[30px] hover:bg-blue-300 hover:text-gray-700"
			>
				down
			</button>
			<button
				onClick={() => dispatch(reset())}
				className="w-[100px] text-white bg-blue-400 m-[10px] rounded h-[30px] hover:bg-blue-300 hover:text-gray-700"
			>
				reset
			</button>
			<button
				onClick={() => dispatch(upByAmount(10))}
				className="w-[100px] text-white bg-blue-400 m-[10px] rounded h-[30px] hover:bg-blue-300 hover:text-gray-700"
			>
				add 10
			</button>
		</>
	)
}

export default App
