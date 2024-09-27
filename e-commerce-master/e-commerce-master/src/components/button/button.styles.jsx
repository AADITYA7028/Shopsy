import styled from "styled-components";
import {SpinnerContainer} from "../spinner/spinner.styles";
export const BaseButton = styled.button`
  min-width: 165px;
  width: auto;
  height: 50px;
  line-height: 50px;
  /* padding: 0 35px 0 35px; */
  font-size: 15px;
  background-color: #343a40;
  color: white;
  text-transform: uppercase;
  font-weight: bolder;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.5s;

  &:hover {
    background-color: #e9ecef;
    color: black;
    border: 1px solid black;
  }

  @media screen and (max-width: 800px){
    font-size: 14px;
    min-width: 140px;
  }
`;

export const GoogleSignInButton = styled(BaseButton)`
  
  background-color: #4285f4;
  color: white;
  font-size: 13px;
  transition: all 0.5s;

  &:hover {
    border: none;
    border-radius: 15px;
    color: #212529;
    box-shadow: 0 0 10px #adb5bd;
  }
`;

export const invertedButton = styled(BaseButton)`
  background-color: white;
  color: black;
  transition: all 0.5s; 
  border: 1px solid #adb5bd;
  &:hover {
    background-color: #adb5bd;
    color: white;
    border: 1px solid white;
  }
`;

export const ButtonSpinner = styled(SpinnerContainer)`
  width: 30px;
  height: 30px;
`;
