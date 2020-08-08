import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Jumbotron, Row, Col } from 'react-bootstrap';
import Logo from '../../assets/imgs/logo_home.png'

const Home = () => {
    return (
        <div>  
           
<Container>
  <Row>
    <Col sm={8}>1 of 2</Col>
    <Col sm={4}>
    <Jumbotron className="text-center text-white bg-dark fundo-home">
  <img src={Logo} className="logo-home mb-3" alt="Logo Home" />
  <p>
  Aqui tem filmes de Surdos <br /> em Libras para assistir!
  </p>
  <p className="mt-4">
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