import React from 'react';
import { Container, ToggleLabel, ToggleSelector } from './styles';

interface IToggleProps {
  leftLabel: string;
  rightLabel: string;
  checked: boolean;
  onChange(): void;
}

const Toggle: React.FC<IToggleProps> = ({
  leftLabel, rightLabel, checked, onChange
}) => (
  <Container>
    <ToggleLabel>{leftLabel}</ToggleLabel>
    <ToggleSelector
      checked={checked}
      uncheckedIcon={false}
      checkedIcon={false}
      onChange={onChange}
    />
    <ToggleLabel>{rightLabel}</ToggleLabel>
  </Container>
)

export default Toggle;