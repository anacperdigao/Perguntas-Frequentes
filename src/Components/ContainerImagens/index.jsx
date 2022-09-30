import React from 'react';
import womanOnline from '../../assets/images/illustration-woman-online-desktop.svg';
import background from '../../assets/images/bg-pattern-desktop.svg';
import * as S from "./style.js"


const ContainerImagens = () => {
    return (
        <S.ContainerImagens>
            <S.ImagemBackground src={background} alt='Background com listras' />
            <S.ImagemSobreposicao>  
                <S.ImagemPrincipal src={womanOnline} alt='Mulher no computador' />
            </S.ImagemSobreposicao>
        </S.ContainerImagens>
    )
}

export default ContainerImagens;