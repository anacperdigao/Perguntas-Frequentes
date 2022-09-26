import './PerguntasERespostas.css';

const PerguntasERespostas = ({pergunta, resposta}) => {
    return(
        <div className='perguntas-respostas'>
            <p className='perguntas'>{pergunta}</p>
            <p className='resposta'>{resposta}</p>
        </div>
    )
}

export default PerguntasERespostas