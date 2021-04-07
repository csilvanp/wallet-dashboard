import styled from 'styled-components';
import { animateRightToLeft } from '../../utils/animations';

interface ILegendProps {
  color: string;
}

export const Container = styled.div`
  width: 48%;
  height: 260px;
  margin: 10px 0;
  background-color: ${props => props.theme.colors.tertiary};
  color: ${props => props.theme.colors.white};
  border-radius: 7px;
  display: flex;

  animation: ${animateRightToLeft} .5s;

  @media(max-width: 770px){
    display: flex;
    width: 100%;
  }
`;

export const LeftSide = styled.aside`
  padding: 30px;
  > h3 {
    margin-bottom: 20px;
  }

  @media(max-width: 1280px){
    padding: 0 15px 5px;
    margin-bottom: 7px;

    > h3 {
      margin-top: 15px;
      margin-bottom: 7px;
    }
  }

  @media(max-width: 420){
    padding: 15px;
    margin-bottom: 7px;
  }
`;

export const LegendContainer = styled.ul`
  list-style: none;
  max-height: 170px;
  padding-right: 15px;
  overflow-y: scroll; 

  ::-webkit-scrollbar {
    width: 10px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: ${props => props.theme.colors.secondary};
    border-radius: 10px;
  }
  
  ::-webkit-scrollbar-track {
    background-color: ${props => props.theme.colors.tertiary};
  }

  @media(max-width: 1280px){
    display: flex;
    flex-direction: column;
  }
`;

export const Legend = styled.li<ILegendProps>`
  display: flex;
  align-items: center;
  margin-bottom: 7px;
  
  > div {
    background-color: ${props => props.color};
    width: 40px;
    height: 40px;
    border-radius: 5px;
    font-size: 12px;
    line-height: 40px;
    text-align: center;
  }

  > span {
    margin-left: 5px;
  }
  
  @media(max-width: 1280px){
    font-size: 14px;
    margin: 3px 0;

    > div {
      width: 35px;
      height: 35px;
      line-height: 35px;
    }

    > span {
      margin-left: 7px;
    }
  }
`;

export const RightSide = styled.main`
  display: flex;
  flex: 1;
  justify-content: center;

  @media(max-width: 1280px){
    height: 100%;
  }
`;