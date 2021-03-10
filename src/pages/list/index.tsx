import React from 'react';
import ContentHeader from '../../components/ContentHeader';
import SelectInput from '../../components/SelectInput';
import HistoryFinanceCard from '../../components/HistoryFinanceCard';

import { Container, Content, Filters } from './styles';

const List: React.FC = () => {
  const months = [
    { value: 1, label: 'Janeiro' },
    { value: 2, label: 'Fevereiro' },
    { value: 3, label: 'Março' },
    { value: 4, label: 'Abril' },
    { value: 5, label: 'Maio' },
    { value: 6, label: 'Junho' },
    { value: 7, label: 'Julho' },
    { value: 8, label: 'Agosto' },
    { value: 9, label: 'Setembro' },
    { value: 10, label: 'Outubro' },
    { value: 11, label: 'Novembro' },
    { value: 12, label: 'Dezembro' },
  ]

  const years = [
    { value: 2020, label: 2020 },
    { value: 2021, label: 2021 },
  ]
  return (
    <Container>
      <ContentHeader title="Listas" lineColor="#FFF">
        <SelectInput options={months} />
        <SelectInput options={years} />
      </ContentHeader>

      <Filters>
        <button
          type="button"
          className="tag-filter tag-filter-recurrent">
          Recorrentes
        </button>

        <button
          type="button"
          className="tag-filter tag-filter-eventual">
          Eventuais
        </button>
      </Filters>

      <Content>
        <HistoryFinanceCard
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