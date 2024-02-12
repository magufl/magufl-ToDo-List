import React from "react";
import { useState} from "react";
let Card = (props) => {
    
    return <div className="col">
        <div className= {"card h-100 p-4 "}>
            <img src="https://images.pexels.com/photos/574070/pexels-photo-574070.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            </div>
            <div className="card-footer d-flex justify-content-center">
                <button type="button" className="btn btn-primary">Find out more!</button>
            </div>
        </div>
    </div>

}
let Cards = () => {
    return <>
        <div className="container mt-3">
            <div className="row row-cols-1 row-cols-md-4 g-4 cards-general">
                <Card title="Oe"/>
                <Card />
                <Card />
                <Card />
            </div>

        </div>
    </>
}
export default Cards