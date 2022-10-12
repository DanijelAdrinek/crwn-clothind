import styled from 'styled-components';

export const HeaderBlock = styled.div`
  text-transform: capitalize;
  width: 23%;

  &:last-child {
      width: 8%;
  }

  @media screen and (max-width: 800px) {
    width: 22%;
    
    &:last-child {
      width: 12%;
      margin-left: -20px;
    }
  }
`;