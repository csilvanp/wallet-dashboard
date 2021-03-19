import React, { useState, useMemo } from 'react';
import { Container, Content } from './styles';
import ContentHeader from '../../components/ContentHeader';
import SelectInput from '../../components/SelectInput';
import WalletBox from '../../components/WalletBox';
import MessageBox from '../../components/MessageBox';
import expenses from '../../repositories/expenses';
import gains from '../../repositories/expenses';
import listOfMonths from '../../utils/months';
import happyImg from '../../assets/happy.svg';

const Dashboard: React.FC = () => {
  const [monthSelected, setMonthSelected] = useState<number>(new Date().getMonth() + 1);
  const [yearSelected, setYearSelected] = useState<number>(new Date().getFullYear());

  const years = useMemo(() => {
    let uniqueYears: number[] = [];

    [...expenses, ...gains].forEach(item => {
      const date = new Date(item.date);
      const year = date.getFullYear();
      if (!uniqueYears.includes(year)) {
        uniqueYears.push(year);
      }
    });
    return uniqueYears.map(year => {
      return {
        value: year,
        label: year
      }
    });
  }, []);

  const months = useMemo(() => {
    return listOfMonths.map((month, index) => {
      return {
        value: index + 1,
        label: month
      }
    });
  }, []);

  const handleMonthSelected = (month: string) => {
    try {
      const parseMonth = Number(month);
      setMonthSelected(parseMonth);
    } catch (error) {
      throw new Error('Invalid month value. Only accept 0 - 24.');
    }
  }

  const handleYearSelected = (year: string) => {
    try {
      const parseYear = Number(year);
      setYearSelected(parseYear);
    } catch (error) {
      throw new Error('Invalid year value. Only accept integer numbers.');
    }
  }


  return (
    <Container>
      <ContentHeader title="Dashboard" lineColor="#F7931B">
        <SelectInput
          options={months}
          onChange={(e) => handleMonthSelected(e.target.value)}
          defaultValue={monthSelected}
        />
        <SelectInput
          options={years}
          onChange={(e) => handleYearSelected(e.target.value)}
          defaultValue={yearSelected}
        />
      </ContentHeader>

      <Content>
        <WalletBox
          title="Saldo"
          amount={150.00}
          footerLabel={"Atualizado com base nas entradas e saídas"}
          icon='dollar'
          color="#4E41F0 "
        />

        <WalletBox
          title="Entradas"
          amount={5000.00}
          footerLabel={"Atualizado com base nas entradas e saídas"}
          icon='arrowUp'
          color="#F7931B"
        />

        <WalletBox
          title="Saídas"
          amount={4850.00}
          footerLabel={"Atualizado com base nas entradas e saídas"}
          icon='arrowDown'
          color="#E44C4E"
        />

        <MessageBox
          title="Muito bem!"
          description="Sua carteira está positiva!"
          footerText="Continue assim. Considere investir seu saldo"
          icon={happyImg}
        />
      </Content>
    </Container>
  )
}

export default Dashboard;