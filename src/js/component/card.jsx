import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Row from 'react-bootstrap/Row';

function CardComponent() {
  return (
    <CardGroup>
        <Row xs={4} md={4} className="g-4">
      <Card>
        <Card.Img variant="top" src="holder.js/100px325" />
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
          </Card.Text>
        </Card.Body>
        <Card.Footer>
                <Button variant="primary">Find Out More!</Button>
        </Card.Footer>
      </Card>
      </Row>  
      <Row xs={4} md={4} className="g-4">
      <Card>
        <Card.Img variant="top" src="holder.js/100px325" />
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
          </Card.Text>
        </Card.Body>
        <Card.Footer>
                <Button variant="primary">Find Out More!</Button>
        </Card.Footer>
      </Card>
      </Row>  
      <Row xs={4} md={4} className="g-4">
      <Card>
        <Card.Img variant="top" src="holder.js/100px325" />
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
          </Card.Text>
        </Card.Body>
        <Card.Footer>
                <Button variant="primary">Find Out More!</Button>
        </Card.Footer>
      </Card>
      </Row>
      <Row xs={4} md={4} className="g-4">
      <Card>
        <Card.Img variant="top" src="holder.js/100px325" />
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
          </Card.Text>
        </Card.Body>
        <Card.Footer>
                <Button variant="primary">Find Out More!</Button>
        </Card.Footer>
      </Card>
      </Row>
    </CardGroup>
  );
}

export default CardComponent;