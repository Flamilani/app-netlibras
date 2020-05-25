import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Jumbotron } from 'react-bootstrap';

const NotFound = () => {
    return (
     <Container>
        <Jumbotron className="text-center">
        <h1>404</h1>
        <p>
        Página não encontrada!
        </p>
        <p>
        <Link className="btn btn-danger" to="/">Retornar para Home</Link>      
        </p>
      </Jumbotron>  
      </Container>
    );
}

export default NotFound;