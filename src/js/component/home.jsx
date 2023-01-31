// notice that we have to import react for every component!
import React from "react";

//include your components into your bundle
//here we will import all our components to make the home page component <Home />
import CardComponent from "./card.jsx";

//create your first component
const Home = () => {
	return (
        // a component always has to have only one parent node (tag) with every child and sibling nodes inside.
        // hence this <div />, because we will add the other components inside Div
		<div>
			<CardComponent />
		</div>
	);
};

export default Home;