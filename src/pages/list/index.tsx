import React from 'react';
import ContentHeader from '../../components/ContentHeader';
import SelectInput from '../../components/SelectInput';
import HistoryFinanceCard from '../../components/HistoryFinanceCard';

import { Container, Content } from './styles';

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

      <Content>
        <HistoryFinanceCard
          cardColor='#313862'
          tagColor='#E44C4E'
          title="Conta de Luz"
          subtitle="17/12/2020"
          amount="R$ 130,00"
        />

        <HistoryFinanceCard
          cardColor='#313862'
          tagColor='#E44C4E'
          title="Conta de Luz"
          subtitle="17/12/2020"
          amount="R$ 130,00"
        />

        <HistoryFinanceCard
          cardColor='#313862'
          tagColor='#E44C4E'
          title="Conta de Luz"
          subtitle="17/12/2020"
          amount="R$ 130,00"
        />

        <HistoryFinanceCard
          cardColor='#313862'
          tagColor='#E44C4E'
          title="Conta de Luz"
          subtitle="17/12/2020"
          amount="R$ 130,00"
        />

        <HistoryFinanceCard
          cardColor='#313862'
          tagColor='#E44C4E'
          title="Conta de Luz"
          subtitle="17/12/2020"
          amount="R$ 130,00"
        />

        <HistoryFinanceCard
          cardColor='#313862'
          tagColor='#E44C4E'
          title="Conta de Luz"
          subtitle="17/12/2020"
          amount="R$ 130,00"
        />

        <HistoryFinanceCard
          cardColor='#313862'
          tagColor='#E44C4E'
          title="Conta de Luz"
          subtitle="17/12/2020"
          amount="R$ 130,00"
        />

        <HistoryFinanceCard
          cardColor='#313862'
          tagColor='#E44C4E'
          title="Conta de Luz"
          subtitle="17/12/2020"
          amount="R$ 130,00"
        />
      </Content>
    </Container>
  )
}

export default List;