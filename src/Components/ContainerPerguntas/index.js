import PerguntasERespostas from '../PerguntasERespostas';
import './ContainerPerguntas.css';

const ContainerPerguntas = () => {
    return (
        <div className='container__perguntas'>
            <h1>Perguntas Frequentes</h1>
            <PerguntasERespostas
            pergunta = 'Quantos membros da equipe eu posso convidar?'
            resposta = 'Você pode convidar até 2 usuários adicionais no plano Gratuito. Não há limite de membros da equipe para o plano Premium.'
            />
            
            <PerguntasERespostas
            pergunta = 'Qual o tamanho máximo de upload do arquivo?'
            resposta = 'Tamanho máximo de 2GB. Todos os arquivos da sua conta nao devem ultrapassar o limite de armazenamento de 2GB.'
            />

            <PerguntasERespostas
            pergunta = 'Como eu troco de senha?'
            resposta = 'Clique em “Esqueci a senha” na página de login ou em “Alterar senha” na página do seu perfil. Um link de redefinição será enviado para você.'
            />

            <PerguntasERespostas
            pergunta = 'Como cancelar a inscrição?'
            resposta = 'Sim! Envie-nos uma mensagem e processaremos sua solicitação sem perguntas.'
            />

            <PerguntasERespostas
            pergunta = 'Vocês fornecem suporte adicional?'
            resposta = 'O suporte por chat e e-mail está disponível 24 horas por dia, 7 dias por semana. As linhas telefônicas estão abertas durante o horário comercial normal.'
            />

        </div>
    )
};

export default ContainerPerguntas