import styled from 'styled-components';
import {softViolet, softBlue} from "../UI/variaveis"


export const PaginaPrincipal = styled.div`
  padding: 0px 0px;
  background: linear-gradient(to bottom, ${softViolet}, ${softBlue});
  background-repeat: no-repeat;
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;  
`;


export const ContainerPrincipal = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;
  align-items: center;
  justify-content:space-around;
  width: 900px;
  min-height: 70%;
  background-color: white;
  border-radius: 20px;
  padding: 20px 10px;
  
  @media screen and (max-width: 480px){
    grid-template-rows: 50% 50%;
    grid-template-columns: none;
    width: 270px;
    padding: 0px 10px 60px 10px;
  }
`;


