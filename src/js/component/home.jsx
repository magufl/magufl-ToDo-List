import React from "react";


//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import NavBar from "./NavBar.jsx";
import Hero from "./Hero.jsx";
import Cards from "./Cards.jsx";
import Footer from "./Footer.jsx";



//create your first component
const Home = () => {
	return (
		<>
			<NavBar/>
			<Hero/>
			<Cards/>
			<Footer />
		</>
		
	);
};

export default Home;
