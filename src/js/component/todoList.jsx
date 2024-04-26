//1. Import react + hooks

import React, { useState } from "react";

// 5 y 2. export y crear componente

export const TodoList = () => {

    //3. código js que necesitamos
    //delarar estados uno para cada input
    const [tarea, setTarea] = useState (" ");
    const [listado, setListado] = useState (['hola', 'adios']);
    function handleTarea (){
        setTarea (event.target.value)
    }
   const handleSubmit = (event) => {
    event.preventDefault();
    tarea.trim() !== '' ? setListado([...listado, tarea]) & setTarea ('') : setTarea ('')
   }

    //4. return de lo que queramos que haga
    return (
        <>
        <div className="container col-10 col-sm-8 col-md-6">
            <form className="my-2" onSubmit={handleSubmit}>
                <h1 className="text-center">Your To Do list👇</h1>
                <div className="mb-3 ">
                    <label htmlFor="exampleInputEmail1" className="form-label">ii</label>
                    <input type="text" className="form-control" id="task-input" placeholder="Add your new task" aria-describedby="emailHelp" value={tarea} onChange={handleTarea}/>
                </div>                
            </form>
            <h2>All your tasks:</h2>
            <ul className="list-group mt-2">
                {listado.map((item, id) => <li key={id} className="list-group-item">
                    {item} 
                    <span>
                    <i className="fa-solid fa-trash"></i>
                    </span>
                </li>)}

                <li className="list-group-item text-end bg-light fw-lighter">
                    {listado.length} pending tasks 
                </li>
            </ul>
        </div>
        </>

    )

}