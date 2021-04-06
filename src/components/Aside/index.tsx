import React, { useState } from 'react';
import logoImg from '../../assets/logo.svg';

import {
  Container,
  Header,
  LogoImg,
  Title,
  MenuContainer,
  MenuItemLink,
  MenuItemButton,
  ToggleMenu
} from './styles';

import {
  MdDashboard,
  MdArrowDownward,
  MdArrowUpward,
  MdExitToApp,
  MdClose,
  MdMenu
} from 'react-icons/md';

import { useAuth } from '../../hooks/auth';

const Aside: React.FC = () => {
  const [isToggleMenuOpened, setIsToggleMenuOpened] = useState(false);
  const handleToggleMenu = () => {
    setIsToggleMenuOpened(!isToggleMenuOpened);
  }

  const { signOut } = useAuth();

  return (
    <Container menuIsOpen={isToggleMenuOpened}>
      <Header>
        <ToggleMenu onClick={handleToggleMenu}>
          {isToggleMenuOpened ? <MdClose /> : <MdMenu />}
        </ToggleMenu>

        <LogoImg src={logoImg} alt="Logo Wallet" />
        <Title>Wallet</Title>
      </Header>

      <MenuContainer>
        <MenuItemLink href="/">
          <MdDashboard />
          Dashboard
        </MenuItemLink>

        <MenuItemLink href="/list/entry-balance">
          <MdArrowUpward />
          Entradas
        </MenuItemLink>

        <MenuItemLink href="/list/exit-balance">
          <MdArrowDownward />
          Saídas
        </MenuItemLink>

        <MenuItemButton onClick={signOut}>
          <MdExitToApp />
          Sair
        </MenuItemButton>
      </MenuContainer>
    </Container>
  );
}

export default Aside;