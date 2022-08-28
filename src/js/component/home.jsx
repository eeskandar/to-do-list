import React from "react";
import { useState } from "react";

const Home = () => {

	const [stuffs, setStuffs] = useState('')
	const [closing, setClosing] = useState(false)
	const [list, setList] = useState ([])
	const [waiting, setWaiting] = useState (true)
	
	// for submitting
	function submit (event) {
		if(event.key === "Enter" && stuffs !== "") {
			setWaiting(false)
			setList([...list, stuffs])
			setStuffs('')
		}
	}

	// for mapping
	const Mapping = list.map((task, i) => {
			return (
					<li key={i} className="list-group-item col-10 mx-auto" 
					onMouseEnter={(event) => setClosing(true)} onMouseLeave={(event) => setClosing(false)}>
						{task}
						<button key={i} type="button"
						className={`btn-close float-end ${closing? "" : "invisible"}`}
						onClick={(event) => deleteTask(i)}></button>
					</li>
			)
		})	
	
	// for deleting
	function deleteTask (i) {
		const newTask = list.filter((task, index)=> {
			if (task == list[i]) {
				return false
			}
			return true
		})
			if (newTask.length == 0){
				setWaiting (true)
			}
			setList(newTask)
	}

	// display
	return (
		<div className="container-fluid">
			<h1 className="row justify-content-center">ToDos</h1>
			<div className="row col-10 mx-auto">
					<input id="tasker" 
					type="text"
					className="form-control" 
					onChange={(event) => {setStuffs(event.target.value)}} 
					value = {stuffs}
					onKeyDown={submit}
					placeholder="What needs to be done"></input>
			</div>
			<div>
				{waiting? (
					<div className="list-group-item col-10 mx-auto border-0 disabled">Try adding a new task! 😎</div>
				) : (
				<ul className="p-0">
					{Mapping}
					<div className="list-group-item col-10 mx-auto border-0 disabled">I know you can do it! Only {list.length} left to go!</div>
				</ul>)}
			</div>
		</div>
	);
};

export default Home;

// gracias por tanto y disculpen por tan poco, caballeros 😥