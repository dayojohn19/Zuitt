import React from 'react';

import {Card, 
    Button
} from 'react-bootstrap';

export default function SampleCourse() {
    return (


<Card>
  <Card.Body>
    <Card.Title>Sample Course</Card.Title>
    <Card.Text>
      Description:
      This is a sample course offering
    </Card.Text>
    <Card.Text>
        Price: PhP 40,000
        
    </Card.Text>
    <Button variant="primary">Enroll</Button>
  </Card.Body>
</Card>

    )
}



