import React, { useMemo, useState } from 'react';
import emojis from '../../utils/emojis';
import Toggle from '../Toggle';
import { useTheme } from '../../hooks/theme';

import {
  Container,
  Profile,
  Welcome,
  UserName
} from './styles';

const MainHeader: React.FC = () => {
  const { toggleTheme, theme } = useTheme();
  const [darkTheme, setDarkTheme] = useState(() => theme.title === 'dark' ? true : false);

  const handleChangeTheme = () => {
    setDarkTheme(!darkTheme);
    toggleTheme();
  }

  const emoji = useMemo(() => {
    const index = Math.floor(Math.random() * emojis.length);
    return emojis[index];
  }, []);
  return (
    <Container>
      <Toggle
        leftLabel="Light"
        rightLabel="Dark"
        checked={darkTheme}
        onChange={handleChangeTheme}
      />
      <Profile>
        <Welcome>Olá, {emoji}</Welcome>
        <UserName>Cauã Silva</UserName>
      </Profile>
    </Container>
  )
}

export default MainHeader;