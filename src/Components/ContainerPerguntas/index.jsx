import React from 'react';
import PerguntasERespostas from '../PerguntasERespostas';
import './ContainerPerguntas.css';
import { perguntasRespostasTexto } from '../../info';
import styled from 'styled-components';


const Container = styled.div`
    padding: 0px 20px;
`;

const Titulo = styled.h1`
    font-size: 24px;
    color: hsl(238, 29%, 16%);
    margin-bottom: 40px;

    @media screen and (max-width: 480px){
        text-align: center;
        margin-bottom: 20px;
    };
`;


const ContainerPerguntas = () => {
    return (
        <Container>
            <Titulo>Perguntas Frequentes</Titulo>
            {perguntasRespostasTexto.map(({id, pergunta, resposta}) => {
                return (
                    <PerguntasERespostas key={id} pergunta={pergunta} resposta={resposta} />
                )
            })}
        </Container>
    )
};

export default ContainerPerguntas