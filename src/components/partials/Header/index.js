import React, { useState } from 'react';
import {
  Container, Form, Input, Button,
  Collapse, Navbar, NavbarToggler, NavbarBrand, Nav
} from 'reactstrap';
import { Link } from 'react-router-dom';
import { HeaderArea } from './styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import Logo from '../../../assets/imgs/logo_navbar.png'

import { isLogged } from '../../../helpers/AuthHandler';

const Header = () => {
   let logged = isLogged();
   
   const [collapsed, setCollapsed] = useState(true);
   const toggleNavbar = () => setCollapsed(!collapsed);
    
    return (
        <HeaderArea>        
  {/*        <Navbar collapseOnSelect expand="sm" bg="dark" variant="dark">
         <Container fluid>
         <Navbar.Brand>
           <Link to="/" className="navbar-brand">
             <img src={Logo} className="logo-header" alt="Logo NetLibras" /></Link>
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
</Navbar> */}
<Navbar color="dark" expand="md" className="text-white">
<Container fluid>
        <NavbarBrand tag={Link} to="/">          
              <img src={Logo} className="logo-header" alt="Logo NetLibras" />
        </NavbarBrand>
        <NavbarToggler onClick={toggleNavbar} />
        <Collapse isOpen={collapsed} navbar>
          {logged && 
        <Nav className="mr-auto" navbar>   
         <Link className="nav-link" to="/lista">Minha Lista</Link>    
           <Link className="nav-link" to="/series">Séries</Link>
           <Link className="nav-link mr-4" to="/filmes">Filmes</Link>
         </Nav>
         }
        {logged &&            
      <Form inline>
      <Input type="text" placeholder="Busca Títulos" />
      <Button variant="light" className="posicao-busca"><FontAwesomeIcon icon={faSearch} /></Button>
      </Form>
           }
           {!logged && 
          <Nav className="ml-auto" navbar>    
            <Link className="nav-link mr-4" to="/cadastro">Cadastra-se</Link>
            <Link className="btn btn-danger" to="/login">Login</Link>             
          </Nav> 
             } 
        </Collapse>
        </Container>
      </Navbar>
</HeaderArea>
    );
}

export default Header;