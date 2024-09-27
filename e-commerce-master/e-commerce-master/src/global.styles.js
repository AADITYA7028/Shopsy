import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    body{
        font-family: 'Mukta', sans-serif;
        padding: 0 40px;
        background-color: #edf2f4;

        @media screen and (max-width: 800px){
            padding: 10px;
        }
    }
    a {
        text-decoration: none;
        color: black;
    }

    * {
        box-sizing: border-box;
    }
`;