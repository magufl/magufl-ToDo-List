import React, { useState, useEffect } from "react";

//create your first component
const Home = () => {
	const [newTodo, setNewTodo] = useState("");
	const [todoList, setTodoList] = useState([{}]);
	const [visible, setVisible] = useState([]);

	const urlToAPI = "https://assets.breatheco.de/apis/fake/todos/user/CL4UD3PT";
	const optionsGetTodos = {method: "GET",	headers: {'Content-Type' : 'application/json'}}


	// get tasks from API at first time app loads
	useEffect(()=>{
		getTodos();
	}, [])

	const getTodos = async () => {
		const response = await fetch(urlToAPI, optionsGetTodos);
		const data = await response.json();
		setTodoList(data);
	}

	// add new task to API
	const updateTodos = async (e, newTask) => {
		if(e.key == "Enter"){
			setNewTodo("");
			let tasks = [...todoList, { label : newTask, done : false }];

			const response = await fetch(urlToAPI, {
				method: "PUT",
				headers: { "Content-Type": "application/json"},
				body: JSON.stringify(tasks)
			})
			// .then(resp => {
			// 	console.log(resp.ok); // will be true if the response is successfull
			// 	console.log(resp.status); // the status code = 200 or code = 400 etc.
			// 	console.log(resp.text()); // will try return the exact result as string
			// 	return resp.json(); // (returns promise) will try to parse the result as json as return a promise that you can .then for results
			// })
			// .then(data => {
			// 	//here is where your code should start after the fetch finishes
			// 	console.log(data); //this will print on the console the exact object received from the server
			// })
			// .catch(error => {
			// 	//error handling
			// 	console.log(error);
			// });
		}
	}
	const normalizeTodo = (task) => {
		if (task !== "") {
	  		let newTodo = task.toLowerCase().trim();;
			// setTodoList([...todoList, newTodo.charAt(0).toUpperCase() + newTodo.slice(1)]);
			newTodo = newTodo.charAt(0).toUpperCase() + newTodo.slice(1);
			return newTodo;
	  	}
	};
  
	const handleTaskMouseEnter = (index) => {
	  setVisible((prevState) => {
		const newState = [...prevState];
		newState[index] = true;
		return newState;
	  });
	};
  
	const handleTaskMouseLeave = (index) => {
	  setVisible((prevState) => {
		const newState = [...prevState];
		newState[index] = false;
		return newState;
	  });
	};
  
	const removeTodo = (index) => {
	  setTodoList(() => {
		const newList = [...todoList];
		newList.splice(index, 1);
		return newList;
	  });
	};
  
	return (
	  <div className="container text-center col-6 vh-100">
		<h1>Todo List</h1>
		<input
		  className="w-100 form-control"
		  value={newTodo}
		  placeholder={todoList.length <= 0 ? "No tasks, add a task!" : "Add a new todo"}
		  onChange={(e) => setNewTodo(e.target.value)}
		  onKeyUp={(e) => updateTodos(e, normalizeTodo(e.target.value))}
		/>
		<ul className="list-group mt-3 shadow">
		  {todoList.map((todo, index) => {
			return (
			  <li
				className="list-group-item list-group-item-action d-flex justify-content-between align-items-center fs-5"
				key={index}
				onMouseEnter={() => handleTaskMouseEnter(index)}
				onMouseLeave={() => handleTaskMouseLeave(index)}
			  >
				{todo.label}
				<i
				  className={`remove-btn fa-regular fa-circle-xmark fs-3 text-danger ${visible[index] ? "" : "invisible"}`}
				  onClick={() => removeTodo(index)}
				></i>
			  </li>
			);
		  })}
		</ul>
	  </div>
	);
  };
  
  export default Home;