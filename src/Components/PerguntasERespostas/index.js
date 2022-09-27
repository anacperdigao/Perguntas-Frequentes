import './PerguntasERespostas.css';
import {FaChevronUp, FaChevronDown} from 'react-icons/fa';
import { useState } from 'react';

const PerguntasERespostas = ({pergunta, resposta}) => {
    
    const [abreResposta, setAbreResposta] = useState(false)

    return(
        <div className='perguntas-respostas'>
            <div onClick={() => setAbreResposta(!abreResposta)} className='pergunta-imagem'>
                <p className={`${abreResposta ? "clicked perguntas" : "perguntas"}`}>{pergunta}</p>
                {abreResposta ? <FaChevronUp className='icone' /> : <FaChevronDown className='icone' />}
            </div>
            
            {abreResposta && <p className='respostas'>{resposta}</p>} 
        </div>
    )
}

export default PerguntasERespostas
