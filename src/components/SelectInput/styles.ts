import styled from 'styled-components';

export const Container = styled.div`
  > select {
    padding: 7px 10px;
    border-radius: 5px;
    margin-left: 7px;
  }

  @media(max-width: 420px){
    > select:first-child {
      margin-bottom: 5px;
    }
  }
`;