import React from 'react';
import './App.css';
import ContainerPerguntas from './Components/ContainerPerguntas';
import ContainerImagens from './Components/ContainerImagens';
import {GlobalStyle} from './Components/GlobalStyle'


function App() {
  return (
    <>
      <GlobalStyle />
      <div className='pagina__principal'>  
        <div className="container__principal">
            <ContainerImagens />
            <ContainerPerguntas />
        </div>
      </div>
    </>
  );
}

export default App;
