const App = () => {
	return (
		<>
			<h1 className="text-[20px] text-white m-[10px]">count: </h1>
			<button className="w-[100px] text-white bg-blue-400 m-[10px] rounded h-[30px] hover:bg-blue-300 hover:text-gray-700">
				up
			</button>
			<button className="w-[100px] text-white bg-blue-400 m-[10px] rounded h-[30px] hover:bg-blue-300 hover:text-gray-700">
				down
			</button>
			<button className="w-[100px] text-white bg-blue-400 m-[10px] rounded h-[30px] hover:bg-blue-300 hover:text-gray-700">
				reset
			</button>
		</>
	)
}

export default App
