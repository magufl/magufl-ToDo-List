import React from "react";
import { Navbar } from "./navbar.js";
import { Jumbotron } from "./jumbotron.js";
import { Card } from "./card.js";
//create your first component
export function Home() {
	const tittle = ["Hola", "oi", "Hello"];
	return (
		<div className="text-center mt-5">
			<Navbar />
			<Jumbotron />
			<div className="row">
				{tittle.map((item, index) => {
					return <Card key={index} text={item} />;
				})}
			</div>
		</div>
	);
}
