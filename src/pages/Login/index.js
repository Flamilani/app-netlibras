import React, { useState } from 'react';
import { PageArea } from './styled';
import useApi from '../../helpers/API';
import { doLogin } from '../../helpers/AuthHandler';
import { Container, Card, CardHeader, CardBody, Button, Form, FormGroup, Label, Input, Alert } from 'reactstrap';

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

    setDisabled(false);

}
    return (
       <Container>
           <PageArea>      
           <Card className="login-form bg-secondary text-white">
        <CardHeader className="text-center bg-dark text-white">Login</CardHeader>
        <CardBody>        
          <Form onSubmit={handleSubmit}>
            <FormGroup>
        <Label className="sr-only" for="email">Email</Label>
        <Input type="email" 
        placeholder="E-mail" 
        value={email}
        onChange={e=>setEmail(e.target.value)} 
        required />
      </FormGroup>
      <FormGroup>
        <Label className="sr-only" for="senha">Senha</Label>
        <Input type="password" 
        placeholder="Senha"
        value={password} 
        onChange={e=>setPassword(e.target.value)} 
        required />
      </FormGroup>
      <FormGroup className="mb-3" check>
        <Label check>
          <Input type="checkbox" 
          disabled={disabled} 
          checked={rememberPassword} 
          onChange={()=> setRememberPassword(!rememberPassword)} />{' '}
          Lembrar-me
        </Label>
      </FormGroup>
      <Button disabled={disabled} className="btn btn-danger btn-block">Acessar</Button>
          </Form>         
        </CardBody>     
      </Card>        
{error && 
        <Alert variant="danger" className="alert alert-danger alert-form">
          {error}
        </Alert>
}         
     </PageArea>
   </Container>
    );
}

export default Login;