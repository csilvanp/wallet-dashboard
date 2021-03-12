import React, { useMemo, useState, useEffect } from 'react';
import ContentHeader from '../../components/ContentHeader';
import SelectInput from '../../components/SelectInput';
import HistoryFinanceCard from '../../components/HistoryFinanceCard';
import gains from '../../repositories/gains';
import expenses from '../../repositories/expenses';
import { Container, Content, Filters } from './styles';

interface IRouteParams {
  match: {
    params: {
      type: string;
    }
  }
}

interface IData {
  id: string;
  description: string;
  amountFormatted: string;
  frequency: string;
  dateFormatted: string;
  tagColor: string;
}

const List: React.FC<IRouteParams> = ({ match }) => {
  const [data, setData] = useState<IData[]>([]);

  const { type } = match.params;
  const title = useMemo(() => {
    return type === 'entry-balance' ? 'Entradas' : 'Saídas';
  }, [type]);

  const lineColor = useMemo(() => {
    return type === 'entry-balance' ? '#F7931B' : '#E44C4E';
  }, [type]);

  const listData = useMemo(() => {
    return type === 'entry-balance' ? gains : expenses;
  }, [type]);

  const months = [
    { value: 1, label: 'Janeiro', id: 1 },
    { value: 2, label: 'Fevereiro', id: 2 },
    { value: 3, label: 'Março', id: 3 },
    { value: 4, label: 'Abril', id: 4 },
    { value: 5, label: 'Maio', id: 5 },
    { value: 6, label: 'Junho', id: 6 },
    { value: 7, label: 'Julho', id: 7 },
    { value: 8, label: 'Agosto', id: 8 },
    { value: 9, label: 'Setembro', id: 9 },
    { value: 10, label: 'Outubro', id: 10 },
    { value: 11, label: 'Novembro', id: 11 },
    { value: 12, label: 'Dezembro', id: 12 },
  ]

  const years = [
    { value: 2020, label: 2020, id: 2020 },
    { value: 2021, label: 2021, id: 2021 },
  ]

  useEffect(() => {
    const response = listData.map(item => {
      return {
        id: String(Math.random() * data.length),
        description: item.description,
        amountFormatted: item.amount,
        frequency: item.frequency,
        dateFormatted: item.date,
        tagColor: item.frequency === 'recorrente' ? '#4E41F0' : '#E44C4E'
      }
    })
    setData(response);
  }, []);

  return (
    <Container>
      <ContentHeader title={title} lineColor={lineColor}>
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
        {
          data.map(item => (
            <HistoryFinanceCard
              key={item.id}
              tagColor={item.tagColor}
              title={item.description}
              subtitle={item.dateFormatted}
              amount={item.amountFormatted}
            />
          ))
        }
      </Content>
    </Container>
  )
}

export default List;