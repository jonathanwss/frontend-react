import React from 'react'
import './App.scss'
import {Datatable,Header} from "./Components"

const columns = [{description:"Titulo", key: "title"}, {description:"Conteúdo", key: "content"}];
const data = [{ "title": "Title 1", "content": "Lorem ipsum" },
{ "title": "Title 2", "content": "Lorem ipsum" },
{ "title": "Title 3", "content": "Lorem ipsum" },
{ "title": "Title 4", "content": "Lorem ipsum" },
{ "title": "Title 5", "content": "Lorem ipsum" }]

const App: React.FC = () => {
	return (
		<>
			<Header></Header>
			<div style={{ padding: 10 }}>
				<Datatable key={"datatable"} title={"Ultimas postagens"} data={data} columns={columns} ></Datatable>
			</div>
			
		</>
	)
}

export default App