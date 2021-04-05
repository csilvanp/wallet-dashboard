import React, { useState } from 'react';
import logoImg from '../../assets/logo.svg';

import Input from '../../components/Input';
import Button from '../../components/Button';

import { useAuth } from '../../hooks/auth';

import {
  Container,
  Logo,
  Form,
  FormTitle
} from './styles';

const SignIn: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const { signIn } = useAuth();

  return (
    <Container>
      <Logo>
        <img src={logoImg} alt="Wallet" />
        <h2>Wallet</h2>
      </Logo>

      <Form onSubmit={() => signIn(email, password)}>
        <FormTitle>Entrar</FormTitle>

        <Input
          placeholder="Email"
          type="email"
          required
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          placeholder="Senha"
          type="password"
          required
          onChange={(e) => setPassword(e.target.value)}
        />

        <Button type="submit">Acessar</Button>
      </Form>
    </Container>
  )
}

export default SignIn;