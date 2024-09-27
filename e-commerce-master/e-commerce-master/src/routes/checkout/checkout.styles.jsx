import styled from 'styled-components';

export const CheckoutContainer = styled.div`
  width: 55%;
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 50px auto 0;

  @media screen and (max-width: 800px){
    width: 70%;
  }
`;

export const SmallContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const CheckoutHeader = styled.div`
  width: 100%;
  padding: 10px 0;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid darkgrey;
`;

export const HeaderBlock = styled.div`
  text-transform: capitalize;
  width: 23%;
  &:last-child {
    width: 8%;
  }
`;

export const Total = styled.span`
  margin :30px 0 30px auto ;
  font-size: 36px;

  @media screen and (max-width: 480px){
    margin: 50px auto 0 200px;
    font-size: 20px;
    font-weight: bold;
    padding: 10px;
    border-top: 1px solid rgba(136, 165, 191, 0.48);
    box-shadow: rgba(136, 165, 191, 0.48) 6px 0px 0px 0px, rgba(255, 255, 255, 0.8) -6px 0px 0px 0px;
  }
`;