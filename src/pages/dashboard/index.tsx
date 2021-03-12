import React from 'react';
import { Container } from './styles';
import ContentHeader from '../../components/ContentHeader';
import SelectInput from '../../components/SelectInput';

const Dashboard: React.FC = () => {
  const options = [
    { value: 'caua', label: 'caua', id: 1 },
    { value: 'victor', label: 'victor', id: 2 },
  ]
  return (
    <Container>
      <ContentHeader title="Dashboard" lineColor="#FFF">
        <SelectInput options={options} />
      </ContentHeader>
    </Container>
  )
}

export default Dashboard;