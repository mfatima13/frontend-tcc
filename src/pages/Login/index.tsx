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

import { useAuth } from '../../contexts/auth';

const Login: React.FC = () => {  
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const { signIn, signed } = useAuth();

  console.log(signed);

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();

    signIn(username, password);

  }
  
  return (
    <Container>
      <div className="formContainer">
        <div className="logo">
          
        </div>
          <form>
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
              <button onClick={handleSubmit}>Entrar</button>
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