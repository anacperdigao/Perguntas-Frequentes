import styled from 'styled-components';
import {veryDarkDesaturatedBlue} from "../UI/variaveis"

export const Container = styled.div`
    padding: 0px 20px;
`;

export const Titulo = styled.h1`
    font-size: 24px;
    color: ${veryDarkDesaturatedBlue};
    margin-bottom: 40px;

    @media screen and (max-width: 480px){
        text-align: center;
        margin-bottom: 20px;
    };
`;

