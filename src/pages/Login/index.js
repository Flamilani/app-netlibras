import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { PageArea } from './styled';
import useApi from '../../helpers/API';
import { doLogin } from '../../helpers/AuthHandler';
import { Container, Card, Button, Form } from 'react-bootstrap';

import { ErrorMessage } from '../../components/MainComponents';

const Login = () => {

const api = useApi();    

const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
const [rememberPassword, setRememberPassword] = useState('');
const [disabled, setDisabled] = useState(false); 
const [error, setError] = useState('');

const handleSubmit = async (e) => {
    e.preventDefault();
    setDisabled(true);
    
    const json = await api.login(email, password);

    if(json.error) {
        setError(json.error);
    } else {
        doLogin(json.token, rememberPassword);
        window.location.href = '/';
    }

}


    return (
       <Container>
           <PageArea>
                {error &&
                 <ErrorMessage>{error}</ErrorMessage>   
                }          
<Card className="login-form bg-secondary text-white">
  <Card.Header as="h5" className="text-center bg-dark text-white">Login</Card.Header>
  <Card.Body>  
    <Card.Text>
    <Form>
  <Form.Group controlId="formBasicEmail">
    <Form.Label className="sr-only">Email</Form.Label>
    <Form.Control type="email" placeholder="Email" required autofocus />
  </Form.Group>

  <Form.Group controlId="formBasicPassword">
    <Form.Label className="sr-only">Senha</Form.Label>
    <Form.Control type="password" placeholder="Senha" required />
  </Form.Group>
  <Form.Group controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Lembrar-me" />
  </Form.Group>
  <Link className="btn btn-danger btn-block" to="/perfils">Acessar</Link>
</Form>
    </Card.Text>
  </Card.Body>
</Card>
           </PageArea>
       </Container>
    );
}

export default Login;