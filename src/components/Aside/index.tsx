import React, { useState } from 'react';
import logoImg from '../../assets/logo.svg';
import Toggle from '../Toggle';

import { useAuth } from '../../hooks/auth';
import { useTheme } from '../../hooks/theme';

import {
  Container,
  Header,
  LogoImg,
  Title,
  MenuContainer,
  MenuItemLink,
  MenuItemButton,
  ToggleMenu,
  ThemeToggleFooter
} from './styles';

import {
  MdDashboard,
  MdArrowDownward,
  MdArrowUpward,
  MdExitToApp,
  MdClose,
  MdMenu
} from 'react-icons/md';


const Aside: React.FC = () => {
  const [isToggleMenuOpened, setIsToggleMenuOpened] = useState(false);
  const handleToggleMenu = () => {
    setIsToggleMenuOpened(!isToggleMenuOpened);
  }

  const { signOut } = useAuth();
  const { toggleTheme, theme } = useTheme();

  const [darkTheme, setDarkTheme] = useState(() => theme.title === 'dark' ? true : false);

  const handleChangeTheme = () => {
    setDarkTheme(!darkTheme);
    toggleTheme();
  }

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

      <ThemeToggleFooter menuIsOpen={isToggleMenuOpened}>
        <Toggle
          leftLabel="Light"
          rightLabel="Dark"
          checked={darkTheme}
          onChange={handleChangeTheme}
        />
      </ThemeToggleFooter>
    </Container>
  );
}

export default Aside;