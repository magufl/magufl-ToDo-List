import React, {useState} from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	const [ inputValue, setInputValue] = useState("");
	const [todos,setTodos] = useState([]);
	return (
		<div className="container">
			<h1>My to dos</h1>
			<hr />
			<input
			 	type="text" 
				onChange={(e) => setInputValue(e.target.value)}
				value={inputValue}
				onKeyDown={(e)=> e.key ==="Enter" ? setTodos(todos.concat(inputValue))+ setInputValue(""):null}

				placeholder="What you do need to do?" 
				/>
			<ul>
				{todos.map((item,index) =>(
				
					<li key={item}>{item} <i onClick={() =>
					setTodos(todos.filter(
						(t,currentIndex)=> 
						index != currentIndex
						))} className="fas fa-trash"></i></li>
				
				))}	
			</ul>
			
			<div>{todos.length} tasks </div>
		</div>
	);
};

export default Home;
