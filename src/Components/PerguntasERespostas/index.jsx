import React from 'react';
import { useState } from 'react';
import * as S from './style'


const PerguntasERespostas = ({pergunta, resposta}) => {
    
    const [abreResposta, setAbreResposta] = useState(false)

    return(
        <S.PerguntasRespostas>
            <S.PerguntaImagem onClick={() => setAbreResposta(!abreResposta)}>
                {abreResposta 
                ? <S.PerguntasClicked>{pergunta}</S.PerguntasClicked> 
                : <S.Perguntas>{pergunta}</S.Perguntas>}
                {abreResposta ? <S.FaChevronUpIcon /> : <S.FaChevronDownIcon />}
            </S.PerguntaImagem>
            
            {abreResposta && <S.Respostas>{resposta}</S.Respostas>} 
        </S.PerguntasRespostas>
    )
}

export default PerguntasERespostas
