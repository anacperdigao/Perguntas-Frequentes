import './PerguntasERespostas.css';
import {ReactComponent as IconArrow} from '../../images/icon-arrow-down.svg';

const PerguntasERespostas = ({pergunta, resposta}) => {
    return(
        <div className='perguntas-respostas'>
            <div className='pergunta-imagem'>
                <p className='perguntas'>{pergunta}</p>
                <IconArrow />
            </div>
            <p className='respostas'>{resposta}</p>
        </div>
    )
}

export default PerguntasERespostas
