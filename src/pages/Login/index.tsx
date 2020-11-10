import React, { FormEvent, useState } from 'react';
import { 
  Container, 
  Img, 
  LabelLogin, 
  Input, 
  FormLogin, 
  RegisterLink 
} from './style';
import landing from '../../assets/images/animatioEdit.png';
import api from '../../services/api';
import { useHistory } from 'react-router-dom';


function Login() {  
  const history = useHistory();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();

    const response = await api.post('/users-api/rest-auth/login/', {
      "username": username,
      "password": password,
    });
    
    /*console.log(response.status);
    if (response.status === 400) {
      console.log('usuário invalido');
    }*/
    const { key } = response.data;

    localStorage.setItem('token', key);

    if (localStorage.getItem('token')){
      history.push('/home');
    }
  }
  
  return (
    <Container>
      <div className="formContainer">
        <div className="logo">
          
        </div>
          <form onSubmit={handleSubmit}>
            <FormLogin>
              <LabelLogin>Username</LabelLogin>
              <Input 
                //type="email"
                placeholder="Username"
                value={username}
                onChange={event => setUsername(event.target.value)}
              />
              <LabelLogin>Password</LabelLogin>
              <Input 
                type='password' 
                placeholder='password'
                value={password}
                onChange={event => setPassword(event.target.value)}
              />
              <button type='submit'>Entrar</button>
              <span>Esqueceu a senha?</span>
            </FormLogin>
          </form>
        
        <RegisterLink className="registerLink"><span>Ainda não tem conta? Cadastre-se</span></RegisterLink>
      </div>
      <div className="ilustrationContainer">

        <Img src={landing} alt="" />
      </div>
    </Container>
  );
}

export default Login;