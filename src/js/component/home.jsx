import React from "react";

//include your components into your bundle

import NavbarComponent from "./navbar.jsx";
import Jumbotron from "./jumbotron.jsx";

//create your first component
const Home = () => {
	return (
		<div>
		<NavbarComponent 
			badge="Start Bootstrap"
			buttons={["Home", "About", "Services", "Contact"]}
		/>
     	<Jumbotron 
        header="A Warm Welcome!"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
        buttonLabel="Let's Go!" 
        />
		</div>
	);
};

export default Home;
