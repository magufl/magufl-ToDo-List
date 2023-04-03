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
	  <div className=" d-flex justify-content-around">
		{cardComponents}
	  </div>
	);
  };


export default Home;
