const BotaoConcluir = () => {
    const botao = document.createElement('button');
    botao.classList.add('check-button');
    botao.innerText = 'Concluir';

    botao.addEventListener('click', concluirTarefa);

    return botao;
}

const concluirTarefa = evento => {
    const tarefaConcluida = evento.target.parentElement
    tarefaConcluida.classList.toggle('done');
}

export default BotaoConcluir;