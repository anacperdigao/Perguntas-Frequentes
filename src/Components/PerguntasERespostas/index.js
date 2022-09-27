import './PerguntasERespostas.css';
import {ReactComponent as IconArrow} from '../../images/icon-arrow-down.svg';

const PerguntasERespostas = ({pergunta, resposta}) => {
    
    const abreResposta = () => {
        console.log('cliquei')
    }
    
    
    return(
        <div className='perguntas-respostas'>
            <div onClick={abreResposta} className='pergunta-imagem'>
                <p className='perguntas'>{pergunta}</p>
                <IconArrow />
            </div>
            <p className='respostas' hidden>{resposta}</p>
        </div>
    )
}

export default PerguntasERespostas
