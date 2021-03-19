import React from 'react';
// import {
// PieChart, Pie, Cell, ResponsiveContainer
// } from 'recharts';
import { Container, LeftSide, Legend, LegendContainer, RightSide } from './styles';

const PieChart: React.FC = () => (
  <Container>
    <LeftSide>
      <h3>Relação</h3>
      <LegendContainer>
        <Legend color="#F7931B">
          <div>5%</div>
          <span>Entradas</span>
        </Legend>
        <Legend color="#E44C4E">
          <div>95%</div>
          <span>Saídas</span>
        </Legend>
        <Legend color="#E44C4E">
          <div>95%</div>
          <span>Saídas</span>
        </Legend>
        <Legend color="#E44C4E">
          <div>95%</div>
          <span>Saídas</span>
        </Legend>
        <Legend color="#E44C4E">
          <div>95%</div>
          <span>Saídas</span>
        </Legend>
        <Legend color="#E44C4E">
          <div>95%</div>
          <span>Saídas</span>
        </Legend>
      </LegendContainer>
    </LeftSide>

    <RightSide>

    </RightSide>
  </Container>
);

export default PieChart;