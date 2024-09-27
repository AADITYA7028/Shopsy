import styled from 'styled-components';

export const AuthenticationContainer = styled.div`
  display: flex;
  width: 900px;
  justify-content: space-between;
  margin: 30px auto;


  @media screen and (max-width: 480px){
    width: 300px;
    flex-direction: column;
    gap: 50px;
  }
`;

export const SwitchButton = styled.button`
  border: none;
  border-bottom : 1px solid black;
  background-color: white;
  cursor: pointer;
  font-weight: bold;
`;

export const Link = styled.span`
  display: flex;
  justify-content: center;
  gap: 5px
`;