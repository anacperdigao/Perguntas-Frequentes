import PerguntasERespostas from '../PerguntasERespostas';
import './ContainerPerguntas.css';

const ContainerPerguntas = () => {
    return (
        <div className='container__perguntas'>
            <h1>Perguntas Frequentes</h1>
            <PerguntasERespostas
            pergunta = 'Quantos membros da equipe eu posso convidar?'
            resposta = 'São permitidos 10 membros por equipe.'
            />
            
            <PerguntasERespostas
            pergunta = 'Qual o tamanho máximo de upload do arquivo?'
            resposta = 'Tamanho máximo de 2GB. Todos os arquivos da sua conta nao devem ultrapassar o limite de armazenamento de 2GB.'
            />

            <PerguntasERespostas
            pergunta = 'Como eu troco de senha?'
            resposta = 'Siga o caminho a seguir: "perfil - configurações - trocar senha".'
            />

            <PerguntasERespostas
            pergunta = 'Como cancelar a inscrição?'
            resposta = 'Siga o caminho a seguir: "perfil - configurações - cancelar inscrição".'
            />

            <PerguntasERespostas
            pergunta = 'Vocês fornecem suporte adicional?'
            resposta = 'Oferecemos, porém é um serviço cobrado a parte. Na seção "planos" você pode achar mais informações.'
            />

        </div>
    )
};

export default ContainerPerguntas