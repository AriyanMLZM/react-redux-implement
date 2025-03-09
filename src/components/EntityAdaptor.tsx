import { useDispatch, useSelector } from 'react-redux'
import { add, reset, selectAll } from '../store/slices/entityAdaptorSlice'
import { AppDispatch, RootStateType } from '../store/store'

const EntityAdaptor = () => {
	const dispatch = useDispatch<AppDispatch>()
	const count = useSelector((state: RootStateType) => state.entityAdaptor.count)
	const items = useSelector(selectAll)

	return (
		<>
			<h1 className="text-[20px] text-white m-[10px]">- Entity Adaptor</h1>
			<h2 className="text-[20px] text-white m-[10px]">items: {count}</h2>
			<button
				onClick={() => dispatch(add())}
				className="w-[100px] text-white bg-blue-400 m-[10px] rounded h-[30px] hover:bg-blue-300 hover:text-gray-700"
			>
				add item
			</button>
			<button
				onClick={() => dispatch(reset())}
				className="w-[100px] text-white bg-blue-400 m-[10px] rounded h-[30px] hover:bg-blue-300 hover:text-gray-700"
			>
				reset
			</button>
			{items.map((item) => (
				<div className="flex justify-center items-center m-[10px] rounded w-[100px] h-[40px] bg-[#222] text-white">
					{item.title}
				</div>
			))}
		</>
	)
}

export default EntityAdaptor
