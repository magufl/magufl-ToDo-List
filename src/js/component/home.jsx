import React from "react";

//create your first component
const Home = () => {
	const [newTodo, setNewTodo] = useState("");
	const [todoList, setTodoList] = useState([]);
	const [visible, setVisible] = useState([]);
  
	const normalizeTodo = (e) => {
	  let newTodo = e.target.value.toLowerCase();
	  if (
		e.key == "Enter" &&
		newTodo !== ""
	  ) {
		setTodoList([...todoList, newTodo.charAt(0).toUpperCase() + newTodo.slice(1)]);
		setNewTodo("");
	  }
	};
  
	const handleMouseEnter = (index) => {
	  setVisible((prevState) => {
		console.log(prevState)
		const newState = [...prevState];
		newState[index] = true;
		return newState;
	  });
	};
  
	const handleMouseLeave = (index) => {
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
		  onKeyUp={(e) => normalizeTodo(e)}
		/>
		<ul className="list-group mt-3 shadow">
		  {todoList.map((todo, index) => {
			return (
			  <li
				className="list-group-item list-group-item-action d-flex justify-content-between align-items-center fs-5"
				key={index}
				onMouseEnter={() => handleMouseEnter(index)}
				onMouseLeave={() => handleMouseLeave(index)}
			  >
				{todo}
				<i
				  className={`remove-btn bi bi-x fs-3 text-danger ${visible[index] ? "" : "invisible"}`}
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