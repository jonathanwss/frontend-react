import React from 'react'
import './App.scss'
import {Datatable,Header} from "./Components"
import { Posts } from "./Pages"

const App: React.FC = () => {
	return (
		<>
			<Header></Header>
			<Posts />
			
		</>
	)
}

export default App