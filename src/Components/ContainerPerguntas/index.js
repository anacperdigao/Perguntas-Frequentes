import PerguntasERespostas from '../PerguntasERespostas';
import './ContainerPerguntas.css';

const ContainerPerguntas = () => {
    return (
        <div className='container__perguntas'>
            <PerguntasERespostas />
            <PerguntasERespostas />
            <PerguntasERespostas />
            <PerguntasERespostas />
            <PerguntasERespostas />
        </div>
    )
};

export default ContainerPerguntas