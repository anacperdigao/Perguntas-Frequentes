import './App.css';
import ContainerPerguntas from './Components/ContainerPerguntas';
import {ReactComponent as WomanOnline} from './images/illustration-woman-online-desktop.svg';

function App() {
  return (
    <div className="App">
        <div className='container__imagens'>
          <WomanOnline className='imagem-principal' />
        </div>
        <ContainerPerguntas />
    </div>
  );
}

export default App;
