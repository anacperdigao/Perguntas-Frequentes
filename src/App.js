import './App.css';
import ContainerPerguntas from './Components/ContainerPerguntas';
import {ReactComponent as WomanOnline} from './images/illustration-woman-online-desktop.svg';

function App() {
  return (
    <div className="App">
      <div className='container__geral'>
        <div className='container__imagens'>
          <WomanOnline />
        </div>
        <ContainerPerguntas />
      </div>
    </div>
  );
}

export default App;
