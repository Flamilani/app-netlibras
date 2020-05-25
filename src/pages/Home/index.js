import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Jumbotron, Button, Row, Col } from 'react-bootstrap';
const Home = () => {
    return (
        <div>  
           
<Container>
  <Row>
    <Col sm={8}>1 of 2</Col>
    <Col sm={4}>
    <Jumbotron className="text-center">
  <h2>Venha se divertir na NETLIBRAS</h2>
  <p>
  Aqui tem filmes de Surdos <br /> em Libras para assistir!
  </p>
  <p>
  <Link className="btn btn-danger" to="/cadastro">Cadastra-se</Link>
  </p>
</Jumbotron>
    </Col>
  </Row>
</Container>
        </div>

      
    );
}

export default Home;