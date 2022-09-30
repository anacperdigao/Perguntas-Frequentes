import React from 'react';
import PerguntasERespostas from '../PerguntasERespostas';
import { perguntasRespostasTexto } from '../../info';
import * as S from "./style.js"


const ContainerPerguntas = () => {
    return (
        <S.Container>
            <S.Titulo>Perguntas Frequentes</S.Titulo>
            {perguntasRespostasTexto.map(({id, pergunta, resposta}) => {
                return (
                    <PerguntasERespostas key={id} pergunta={pergunta} resposta={resposta} />
                )
            })}
        </S.Container>
    )
};

export default ContainerPerguntas