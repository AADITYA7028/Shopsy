import styled from 'styled-components';

import Button from '../button/button.component';

export const CartDropdownContainer = styled.div`
  position: absolute;
  width: 240px;
  height: 340px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  border: 1px solid black;
  background-color: #edf2f4;
  top: 90px;
  right: 40px;
  z-index: 5;

  ${Button} {
    margin-top: auto;
  }
`;

export const EmptyMessage = styled.span`
  font-size: 18px;
  margin: 50px auto;
`;

export const CartItems = styled.div`
  height: 240px;
  display: flex;
  flex-direction: column;
  align-items: space-between;

  @media screen and (max-width: 480px){
    margin-top: 20px ;
    align-items: center;
    justify-content: center;
    gap: 25px;
    height: 100%;
    border-left: 1px dashed rgba(136, 165, 191, 0.48);
  }
`;