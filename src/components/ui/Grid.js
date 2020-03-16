import React from 'react';
import { Col } from 'react-bootstrap'

function Grid(props) {
  return (
    <Col md={props.size} className='mb-4'>
      {props.children}
    </Col>
  )
}

export default Grid;
