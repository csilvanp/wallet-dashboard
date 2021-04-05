import React from 'react';
import { Container } from './styles';

interface IMessageBoxProps {
  title: string;
  description: string;
  footerText: string;
  icon: string;
}

const MessageBox: React.FC<IMessageBoxProps> = ({
  title, description, footerText, icon
}) => (
  <Container>
    <header>
      <h3>
        {title}
        <img src={icon} alt={title} />
      </h3>
      <p>{description}</p>
    </header>
    <footer>
      <span>{footerText}</span>
    </footer>
  </Container>
);

export default MessageBox;