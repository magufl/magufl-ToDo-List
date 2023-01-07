import React from "react";
import Navbar from "./navbar.jsx"
import Jumbotron from "./Jumbotron.jsx";
import Card from "./Card.jsx";
import Footer from "./Footer.jsx";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (<>
	<Navbar />
	<Jumbotron />
	<div className= "card-group">
	<Card />
	<Card />
	<Card />
	<Card />
	</div>
	<Footer />
	</>
	);
};

export default Home;
