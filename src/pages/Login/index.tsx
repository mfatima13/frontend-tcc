import React, { FormEvent, useState } from 'react';
import {
  Container,
  Img,
  LabelLogin,
  Input,
  FormLogin,
  LogoContainer,
  RegisterLink
} from './style';
import landing from '../../assets/images/animatioEdit.png';
import logo from '../../assets/images/logo.svg';

import { useAuth } from '../../hooks/AuthContext';

const Login: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const { signIn } = useAuth();

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();

    signIn(username, password);

  }

  return (
    <Container>
      <div className="formContainer">
        <LogoContainer className="logo">
          <img src={logo} alt="KSproject" />
        </LogoContainer>
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