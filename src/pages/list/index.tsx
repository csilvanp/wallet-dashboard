import React from 'react';
import ContentHeader from '../../components/ContentHeader';
import SelectInput from '../../components/SelectInput';
import { Container } from './styles';

const List: React.FC = () => {
  const options = [
    { value: 'caua', label: 'caua' },
    { value: 'victor', label: 'victor' },
  ]
  return (
    <Container>
      <ContentHeader title="Listas" lineColor="#FFF">
        <SelectInput options={options} />
      </ContentHeader>
    </Container>
  )
}

export default List;