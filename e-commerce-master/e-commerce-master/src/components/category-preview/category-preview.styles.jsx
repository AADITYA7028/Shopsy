import styled from 'styled-components';

import { Link } from 'react-router-dom';

export const CategoryPreviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;

  @media screen and (max-width: 800px){
    align-items: center;
  }
`;

export const Title = styled(Link)`
  font-size: 28px;
  margin-bottom: 25px;
  padding: 5px 10px;
  border-radius: 10px;
  cursor: pointer;
  transition: background-color 1s ;
  transition: font-size 1s .2s;
  &:hover{
    font-size: 32px;
    background-color: rgba(136, 165, 191, 0.48);
  }

`;

export const Preview = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 20px;

  @media screen and (max-width: 800px){
    grid-template-columns: 1fr 1fr;
    grid-gap: 10px;
  }
`;