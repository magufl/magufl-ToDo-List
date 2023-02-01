// notice that we have to import react for every component!
import React from "react";

//include your components into your bundle
//here we will import all our components to make the home page component <Home />
import CardComponent from "./card.jsx";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


//create your first component
const Home = () => {
	return (
       <Container>
		<Row>
			<Col> <CardComponent/></Col>
			<Col> <CardComponent/></Col>
			<Col> <CardComponent/></Col>
			<Col> <CardComponent/></Col>
		</Row>
	   </Container>
		
	);
};

export default Home;