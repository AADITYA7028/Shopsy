import styled from "styled-components";

export const PaymentFormContainer = styled.div`
    height : 300px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    h2{
        font-size: 20px;
        margin-bottom: 20px;
    }
    @media screen and (max-width: 800px){
       button{
        margin-top: 20px;
        min-width: 125px;
       }
    }
`

export const FormContainer = styled.form`
    height: 100px;
    min-width: 500px;

    @media screen and (max-width: 800px){
        min-width: 250px;
    }
`