import './App.css';
import ContainerPerguntas from './Components/ContainerPerguntas';
//import {ReactComponent as WomanOnline} from './images/illustration-woman-online-desktop.svg';
import womanOnline from './images/illustration-woman-online-desktop.svg';
import background from './images/bg-pattern-desktop.svg';


function App() {
  return (
    <div className="App">
        
        <div className='container__imagens'>
          <img src={background} alt='Background com listras' className='imagem-background' />
          <div className='imagem-sobreposicao'>  
            <img src={womanOnline} alt='Mulher no computador' className='imagem-principal' />
          </div>
        </div>
        
        <ContainerPerguntas />
        
    </div>
  );
}

export default App;
