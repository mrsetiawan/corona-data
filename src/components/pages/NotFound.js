import React from 'react';
import Container from '../ui/MainContainer'
import { Link } from 'react-router-dom'
function NotFound() {
  return (
    <Container>
      <h3>Corona Data Site Error - Page Not Found</h3>
      <p> We were unable to find that page. Please go to the home page by clicking the link below. </p>
      <Link to='/'>
        <p>Home Page</p>
      </Link>
    </Container>
  )
}

export default NotFound;
