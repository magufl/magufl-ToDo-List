import React from "react";
import {TodoList} from "../component/todoList.jsx"

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (
		<div className="d-flex py-5 justify-content-center bg-light">

			<TodoList/>

		</div>
	);
};

export default Home;
