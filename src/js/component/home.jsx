import React from "react";

//include images into your bundle
import Navbar from "./navbar.jsx";
import Card from "./card.jsx";
import Footer from "./footer.jsx"

//create your first component
const Home = () => {
	return (
		<>
			<Navbar/>
			<div className="row">
			<Card/>
			<Card/>
			<Card/>
			</div>
			<Footer/>
		</>
	);
};

export default Home;
