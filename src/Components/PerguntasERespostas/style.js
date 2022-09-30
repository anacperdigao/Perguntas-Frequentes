import styled from 'styled-components';
import {FaChevronUp, FaChevronDown} from 'react-icons/fa';
import {lightGrayishBlue, darkGrayishBlue, softRed, veryDarkDesaturatedBlue} from "../UI/variaveis"


export const PerguntasRespostas = styled.div`
    border-bottom: 1px solid ${lightGrayishBlue};
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
    color: ${darkGrayishBlue};
    margin: 0px 0px 10px 0px;
    line-height: 1.5em;
`

export const FaChevronUpIcon = styled(FaChevronUp)`
    color: ${softRed};
`

export const FaChevronDownIcon = styled(FaChevronDown)`
    color: ${softRed};
`

export const Perguntas = styled.p`
    margin: 10px 0px 10px 0px;
    color: ${veryDarkDesaturatedBlue};
    font-size: 14px;
    
    :hover{
        color: ${softRed}; 
    }
`

export const PerguntasClicked = styled(Perguntas)`
    font-weight: 600;
`