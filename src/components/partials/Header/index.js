import React from 'react';
import { Link } from 'react-router-dom';
import { HeaderArea } from './styled';
import { Container, Nav, Navbar, Form, FormControl, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

// import { isLogged } from '../../../helpers/AuthHandler';

const Header = () => {
   // let logged = false;
    
    return (
        <HeaderArea>        
         <Navbar collapseOnSelect expand="sm" bg="dark" variant="dark">
         <Container>
         <Navbar.Brand>
           <Link to="/" className="navbar-brand">NETLIBRAS</Link>
         </Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">   
    <Link className="nav-link" to="/series">Séries</Link>
    <Link className="nav-link mr-4" to="/filmes">Filmes</Link>
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Busca Títulos" />
      <Button variant="light" className="posicao-busca"><FontAwesomeIcon icon={faSearch} /></Button>
      <Nav>   
      <Link className="nav-link mr-4" to="/lista">Minha Lista</Link>
      <Link className="nav-link mr-4" to="/cadastro">Cadastra-se</Link>
      </Nav>
      <Link className="btn btn-danger" to="/login">Login</Link>
    </Form>
  </Navbar.Collapse>
  </Container>
</Navbar>
</HeaderArea>
    );
}

export default Header;