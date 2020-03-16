import React from 'react';
import { Container } from 'react-bootstrap'

function MainContainer(props) {
  return (
    <>
      {props.fluid ?
        <Container fluid>
          {props.children}
        </Container>
        :
        <Container>
          {props.children}
        </Container>}
    </>
  )
}

export default MainContainer;
