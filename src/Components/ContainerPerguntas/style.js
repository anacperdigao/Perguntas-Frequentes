import styled from 'styled-components';


export const Container = styled.div`
    padding: 0px 20px;
`;

export const Titulo = styled.h1`
    font-size: 24px;
    color: hsl(238, 29%, 16%);
    margin-bottom: 40px;

    @media screen and (max-width: 480px){
        text-align: center;
        margin-bottom: 20px;
    };
`;

