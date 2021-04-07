import styled from 'styled-components';

interface ITitleContainerProps {
  lineColor: string;
}

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;

  @media(max-width: 420px){
    margin-bottom: 15px;
  }
`;

export const TitleContainer = styled.div<ITitleContainerProps>`
  > h1 {
    color: ${props => props.theme.colors.white};
    &::after{
      content: '';
      display: block;
      width: 55px;
      border-bottom: 10px solid ${props => props.lineColor}
    }
  }
  padding-right: 10px;
`;

export const Controllers = styled.div`
  display: flex;

  @media(max-width: 420px){
    flex-direction: column;
    align-items: center;
  }
`;