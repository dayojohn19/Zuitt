import React from 'react';

import {Card, CardGroup, Button} from 'react-bootstrap';

export default function CourseCard() {
    return (

<CardGroup>
  <Card>
    <Card.Body>
      <Card.Title>Be Part of Our Community</Card.Title>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This content is a little bit longer.
      </Card.Text>
    </Card.Body>
  </Card>
  <Card>
    <Card.Body>
      <Card.Title>Learn From Home</Card.Title>
      <Card.Text>
        This card has supporting text below as a natural lead-in to additional
        content.{' '}
      </Card.Text>
    </Card.Body>
  </Card>
  <Card>
    <Card.Body>
      <Card.Title>Study Now, Pay Later</Card.Title>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This card has even longer content than the first to
        show that equal height action.
      </Card.Text>
    </Card.Body>
  </Card>
</CardGroup>
    )
}




