import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  flex-direction: column;
  min-height: 100vh;

  > h1 {
    font-weight: normal;
    font-size: 4rem;
    margin-top: 5rem;
  }

  margin: -5rem;
`;

export const CountdownContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export const BigText = styled.p`
  font-weight: bold;
  font-size: 6rem;
  line-height: 1;
  margin: 1rem 2rem;
`;

export const Countdown = styled.div`
  text-align: center;

  > span {
    font-size: 1.3rem;
  }
`;
