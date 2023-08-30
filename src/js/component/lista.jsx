import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import React, { useState, useEffect } from "react";

const Lista = () => {
  const [inputValue, setInputValue] = useState("");
  const [tareas, setTareas] = useState([]);

  useEffect(() => {
    iniciar();
  }, []);

  const obtenerLista = () => {
    fetch("https://assets.breatheco.de/apis/fake/todos/user/paztastica")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setTareas(data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const iniciar = () => {
    fetch("https://assets.breatheco.de/apis/fake/todos/user/paztastica", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify([]),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Lista guardada exitosamente:", data);
        obtenerLista();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const guardarListaTareas = () => {
    fetch("https://assets.breatheco.de/apis/fake/todos/user/paztastica", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(tareas),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Lista guardada exitosamente:", data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const eliminarListaTareas = () => {
    fetch("https://assets.breatheco.de/apis/fake/todos/user/paztastica", {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Lista eliminada exitosamente:", data);
        setTareas([]);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const crearTarea = () => {
    const nuevaTarea = { label: inputValue, done: false };
    setTareas([...tareas, nuevaTarea]);
    setInputValue("");
  };

  const eliminarTarea = (index) => {
    const nuevasTareas = [...tareas];
    nuevasTareas.splice(index, 1);
    setTareas(nuevasTareas);
  };

  return (
    <div>
      <ul className="list-group m-5">
        <li className="list-group-item">
          <input
            onChange={(e) => setInputValue(e.target.value)}
            value={inputValue}
            onKeyPress={(e) => {
              if (e.key === "Enter") {
                crearTarea();
              }
            }}
            type="text"
            className="form-control"
            placeholder="Agrega una tarea pendiente"
          />
        </li>
        {tareas.map((item, index) => {
          return (
            <li className="list-group-item" key={index}>
              {item.label}
              <FontAwesomeIcon
                className="float-end"
                icon={faTrashAlt}
                onClick={() => eliminarTarea(index)}
              />
            </li>
          );
        })}
        <li
          className="list-group-item disabled text-center"
          aria-disabled="true"
        >
          {tareas.length} Tareas pendientes
        </li>
      </ul>
      <div className="text-center">
        <button
          onClick={guardarListaTareas}
          className="btn btn-primary text-center"
        >
          Guardar 
        </button>
        <button onClick={eliminarListaTareas} className="btn btn-danger">
          Eliminar 
        </button>
      </div>
    </div>
  );
};

export { Lista };
