import React from 'react';
import * as S from "./style.js"
import ContainerPerguntas from '../ContainerPerguntas';
import ContainerImagens from '../ContainerImagens';


const ContainerGeral = () => {
    return (
        <S.PaginaPrincipal>  
            <S.ContainerPrincipal>
                <ContainerImagens />
                <ContainerPerguntas />
            </S.ContainerPrincipal>
        </S.PaginaPrincipal>
    )
};

export default ContainerGeral;