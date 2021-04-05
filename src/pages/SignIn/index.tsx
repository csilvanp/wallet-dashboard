import React from 'react';
import logoImg from '../../assets/logo.svg';

import Input from '../../components/Input';

import {
  Container,
  Logo,
  Form,
  FormTitle
} from './styles';

const SignIn: React.FC = () => {
  return (
    <Container>
      <Logo>
        <img src={logoImg} alt="Wallet" />
        <h2>Wallet</h2>
      </Logo>

      <Form onSubmit={() => { }}>
        <FormTitle>Entrar</FormTitle>

        <Input
          placeholder="Email"
          type="email"
          required
        />
        <Input
          placeholder="Senha"
          type="password"
          required
        />

        <button type="submit">Acessar</button>
      </Form>
    </Container>
  )
}

export default SignIn;