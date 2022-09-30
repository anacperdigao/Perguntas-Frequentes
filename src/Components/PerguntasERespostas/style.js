import styled from 'styled-components';
import {FaChevronUp, FaChevronDown} from 'react-icons/fa';


export const PerguntasRespostas = styled.div`
    border-bottom: 1px solid hsl(240, 5%, 91%);
    display: flex;
    flex-direction: column;
    justify-content: center;
`

export const PerguntaImagem = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    gap: 20px;
    cursor: pointer;

    @media screen and (max-width: 480px){
        display: grid;
        grid-template-columns: 85% 15%;
        align-items: center;
        justify-content: space-between;
        gap: 15px;
        cursor: pointer;
}
`

export const Respostas = styled.p`
    font-size: 12px;
    color: hsl(240, 6%, 50%);
    margin: 0px 0px 10px 0px;
    line-height: 1.5em;
`

export const FaChevronUpIcon = styled(FaChevronUp)`
    color: var(--soft-red);
`

export const FaChevronDownIcon = styled(FaChevronDown)`
    color: var(--soft-red);
`

export const Perguntas = styled.p`
    margin: 10px 0px 10px 0px;
    color: hsl(238, 29%, 16%);
    font-size: 14px;
    
    :hover{
        color: hsl(14, 88%, 65%); 
    }
`

export const PerguntasClicked = styled.p`
    margin: 10px 0px 10px 0px;
    color: hsl(238, 29%, 16%);
    font-size: 14px;
    font-weight: 600;
    
    :hover{
        color: hsl(14, 88%, 65%); 
    }
`