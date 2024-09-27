import styled from 'styled-components';

export const CartItemContainer = styled.div`
  width: 100%;
  display: flex;
  height: 80px;
  margin-bottom: 15px;
  img {
    width: 30%;
  }

  @media screen and (max-width: 480px){
    width: 90%;
    height: 100%;
    box-shadow: rgba(0, 0, 0, 0.15) 0px 5px 15px -5px;
    img{
      width: 200px;
      height: 160px;
      border-right: 1px dashed black;
    }
  }
`;

export const SymbolContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`

export const SpanContanier = styled.div`
  text-align: center;
  width:25px;
  padding: auto;
`;

export const ItemDetails = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 10px 20px;
  span {
    font-size: 16px;
  }

  @media screen and (max-width: 480px){
    height: 160px;
    justify-content: space-between;

  }
`;