import styled from 'styled-components';

export const CheckoutContainer = styled.div`
  width: 65%;
  min-height: 60vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 50px auto 0;

  @media screen and (max-width: 800px) {
    margin: auto;
    width: 90%;
    font-size: 13px;
  }
`;

export const Total = styled.span`
  margin-top: 30px;
  margin-left: auto;
  font-size: 36px;
`;