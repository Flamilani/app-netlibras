import React, { useState } from 'react';
import { PageArea } from './styled';
import useApi from '../../helpers/API';
import { doLogin } from '../../helpers/AuthHandler';
import { Container, Card, Button, Form, Alert } from 'react-bootstrap';

import { ErrorMessage } from '../../components/MainComponents';

const Login = () => {
const api = useApi();    

const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
const [rememberPassword, setRememberPassword] = useState(false);
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
<Card className="login-form bg-secondary text-white">
  <Card.Header as="h5" className="text-center bg-dark text-white">Login</Card.Header>
  <Card.Body>   
    <Form onSubmit={handleSubmit}>
  <Form.Group>
    <Form.Label className="sr-only">Email</Form.Label>
    <Form.Control type="email" 
    disabled={disabled} value={email}
    onChange={e=>setEmail(e.target.value)}
    placeholder="Email" required />
  </Form.Group>

  <Form.Group>
    <Form.Label className="sr-only">Senha</Form.Label>
    <Form.Control type="password" disabled={disabled} 
    value={password} onChange={e=>setPassword(e.target.value)} 
    placeholder="Senha" required />
  </Form.Group>
  <Form.Group>
    <Form.Check disabled={disabled} checked={rememberPassword} 
    onChange={()=> setRememberPassword(!rememberPassword)} 
    type="checkbox" label="Lembrar-me" />
  </Form.Group>
  <Button disabled={disabled} className="btn btn-danger btn-block">Acessar</Button>
</Form>  
  </Card.Body>
</Card>
{error &&
      <ErrorMessage>
        <Alert variant="danger" className="alert alert-danger alert-form">
          {error}
        </Alert>
       </ErrorMessage>   
}         
     </PageArea>
   </Container>
    );
}

export default Login;