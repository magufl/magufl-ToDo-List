import React from "react";
//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import { Navbar } from "./Navbar.jsx"
import { Jumbotron } from "./Jumbotron.jsx"
import { Card } from "./Card.jsx"

//create your first component
const Home = () => {
  return (
    <div>
      <Navbar/>
      <Jumbotron/>
      <div className="Cards container">
        <div className="row">
          <div className="col-md-3">
            <Card img="https://via.placeholder.com/500x325" />
          </div>
          <div className="col-md-3">
            <Card img="https://via.placeholder.com/500x325" />
          </div>
          <div className="col-md-3">
            <Card img="https://via.placeholder.com/500x325" />
          </div>
          <div className="col-md-3">
            <Card img="https://via.placeholder.com/500x325" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;