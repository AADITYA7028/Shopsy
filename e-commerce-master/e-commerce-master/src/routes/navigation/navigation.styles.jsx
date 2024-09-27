import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavContainer = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;
  background-color: wh;

  @media screen and (max-width: 800px){
    height: 60px;
    padding: 12px;
    margin-bottom: 20px;
  } 
`;

export const LogoContainer = styled(Link)`
  height: 100%;
  width: 130px;
  padding: 25px;

  @media screen and (max-width: 800px){
    width: 80px;
    padding: 0;
  }
`;

export const NavLinks = styled.div`
  width: 50%;
  height: 100%;
  font-size: 18px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 10px;

  @media screen and (max-width: 800px){
    width: 80%;
    gap: 0;
  }
`;

export const NavLink = styled(Link)`
  padding: 10px 15px;
  cursor: pointer;
`;