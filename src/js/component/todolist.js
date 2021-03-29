import React, { useState, useEffect } from "react";
import { unstable_batchedUpdates } from "react-dom";

export function TodoList() {
	// para tareas individuales
	const [task, setTask] = useState();
	//usuario
	const [user, setUser] = useState();
	//url endpoint
	const [url, setUrl] = useState("");
	// para almacenar grupos de tareas
	const [todoList, setTodoList] = useState([]);

	const handleChange = e => {
		setTask(e.target.value);
		setTodoList(newTask => [...newTask, { label: task, done: false }]);
		console.log(todoList);
		setTask("");
		//update();
	};
	const handleUser = e => {
		setUser(e.target.value);
		setUrl(`https://assets.breatheco.de/apis/fake/todos/user/${user}`);
		//create();
	};
	const deleteTask = id => {
		todoList.splice(id, 1);
		console.log("lista actualizada" + todoList);
		setTodoList(todoList);
		//update();
		getData();
	};
	// init
	useEffect(() => {
		getData();
	}, []);

	// servicios
	// mostrar
	const getData = async () => {
		await fetch(
			"https://assets.breatheco.de/apis/fake/todos/user/Kamari1974",
			{
				method: "GET",
				headers: {
					"Content-Type": "application/json",
					Accept: "application/json"
				}
			}
		)
			.then(function(response) {
				return response.json();
			})
			.then(function(myJson) {
				setTodoList(myJson);
			});
	};
	// delete
	const listUserTask = () => {
		fetch(url, {
			method: "DELETE",
			headers: {
				"Content-Type": "aplication/json"
			}
		});
	};
	return (
		<div className="col d-flex justify-content-center todo">
			<div className="card  text-center" style={{ width: "18rem" }}>
				<div className="card-header">
					{" "}
					<h1>TodoList</h1>{" "}
					<button
						type="button"
						onClick={() => getData()}
						className="btn btn-success mt-3">
						Refresh
					</button>{" "}
				</div>

				<ul className="list-group list-group-flush">
					<li className="list-group-item">
						{" "}
						<input
							className="taskbox form-control"
							placeholder="Escribe tus tareas"
							onKeyPress={e =>
								e.key === "Enter" ? handleChange(e) : ""
							}
							onChange={e => setTask(e.target.value)}
							value={task}
						/>
					</li>

					{todoList.map((result, i) => (
						<li className="list-group-item task" key={i}>
							<div className="container">
								<div className="row">
									<div
										className="col"
										onClick={() => deleteTask(result.id)}>
										&#10003;
										{result.label}
									</div>
									<div
										className="close col col-lg-1"
										onClick={() => deleteTask(result.id)}>
										&times;
									</div>
								</div>
							</div>
						</li>
					))}

					<li className="list-group-item">
						Tareas {todoList.length}
					</li>
				</ul>
			</div>
		</div>
	);
}
