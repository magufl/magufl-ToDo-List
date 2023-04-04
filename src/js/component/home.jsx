import React from "react";

//include images into your bundle

import  Card  from "./card.jsx";

//create your first component
const Home = () => {
	const cards = [1, 2, 3, 4]; 
	const cardComponents = []; 
    
	for (let i = 0; i < cards.length; i++) {
	  cardComponents.push(<Card key={cards[i]} />);

	}
  
	return (
		<div className="container-fluid">
		<div className="row justify-content-around">
		  <div className="col-lg-3 col-md-6 mb-4">
			{cardComponents[0]}
		  </div>
		  <div className="col-lg-3 col-md-6 mb-4">
			{cardComponents[1]}
		  </div>
		  <div className="col-lg-3 col-md-6 mb-4">
			{cardComponents[2]}
		  </div>
		  <div className="col-lg-3 col-md-6 mb-4">
			{cardComponents[3]}
		  </div>
		</div>
	  </div>
	);
  };


export default Home;
