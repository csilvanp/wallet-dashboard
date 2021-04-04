import React from 'react';

import {
  Container,
  LeftSide,
  RightSide,
  Legend,
  LegendContainer
} from './styles';

import {
  ResponsiveContainer,
  BarChart,
  Bar,
  Cell,
  Tooltip
} from 'recharts';

import formatCurrency from '../../utils/formatCurrency';

interface IBarChartBoxProps {
  title: string,
  data: {
    name: string;
    amount: number,
    percent: number,
    color: string
  }[],
}


const BarChartBox: React.FC<IBarChartBoxProps> = ({ title, data }) => {
  return (
    <Container>

      <LeftSide>
        <h3>{title}</h3>
        <LegendContainer>
          {
            data.map(indicator => (
              <Legend key={indicator.name} color={indicator.color}>
                <div>{indicator.percent}%</div>
                <span>{indicator.name}</span>
              </Legend>
            ))
          }
        </LegendContainer>
      </LeftSide>

      <RightSide>
        <ResponsiveContainer>
          <BarChart data={data}>
            <Bar dataKey="amount">
              {data.map((indicator) => (
                <Cell
                  key={indicator.name}
                  fill={indicator.color}
                />
              ))}
            </Bar>
            <Tooltip formatter={(value: any) => formatCurrency(Number(value))} />
          </BarChart>
        </ResponsiveContainer>
      </RightSide>

    </Container>
  )
}

export default BarChartBox;