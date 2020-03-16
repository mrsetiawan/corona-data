import React from 'react';
import { Card } from 'react-bootstrap'

function MyCard(props) {
  return (
    <Card bg={props.bg}>
      <Card.Body>
        {props.children}
      </Card.Body>
    </Card>
  )
}

export default MyCard;
