import React from 'react';
import { PageArea } from './styled';
import { Container, Card, Button, Form } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import { faGoogle } from '@fortawesome/free-brands-svg-icons'

const Register = () => {
    return (
        <div>  
           
<Container>
<PageArea>
<Card className="register-form bg-secondary text-white">
  <Card.Header as="h5" className="text-center bg-dark text-white">Novo Cadastro</Card.Header>
  <Card.Body>
     <Card.Text>
     <Form>
     <Form.Group controlId="formBasicEmail">
    <Form.Label className="sr-only">Nome Completo</Form.Label>
    <Form.Control type="text" placeholder="Nome Completo" />
  </Form.Group>
  <Form.Group controlId="formBasicEmail">
    <Form.Label className="sr-only">Celular</Form.Label>
    <Form.Control type="tel" placeholder="Celular" />
  </Form.Group>
  <Form.Group controlId="formBasicEmail">
    <Form.Label className="sr-only">Email</Form.Label>
    <Form.Control type="email" placeholder="Email" />
  </Form.Group>
  <Form.Group controlId="formBasicPassword">
    <Form.Label className="sr-only">Senha</Form.Label>
    <Form.Control type="password" placeholder="Senha" />
  </Form.Group>
  <Button variant="success" size="lg" block>Cadastra-se</Button>
  <hr className="line-footer" />
  <Button variant="primary" size="sm" block><FontAwesomeIcon icon={faFacebook} size="lg" /> Continuar com Facebook</Button>
  <Button variant="danger" size="sm" block><FontAwesomeIcon icon={faGoogle} size="lg" /> Continuar com Google</Button>
</Form>
    </Card.Text>
  </Card.Body>
</Card>
</PageArea>
</Container>
        </div>

      
    );
}

export default Register;