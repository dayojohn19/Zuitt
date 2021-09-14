import React from 'react';

/*react-bootstrap components*/
import {
	Container,
	Row,
	Col,
	Jumbotron,
	Button
} from 'react-bootstrap';

export default function Banner(){

	return(

		<Container fluid>
			<Row>
				<Col className="px-0">
					<Jumbotron fluid className="px-3">
					  <h1>Zuitt Coding Bootcamp</h1>
					  <p>Opportunities for everyone, everywhere.</p>
					  <Button variant="primary">Enroll Now!</Button>
					</Jumbotron>
				</Col>
			</Row>
		</Container>
	)
}