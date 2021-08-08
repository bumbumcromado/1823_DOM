const BotaoDeletar = () => {
    const botaoExcluir = document.createElement('button');
    botaoExcluir.classList.add('delete-button');
    botaoExcluir.innerText = 'Deletar';

    botaoExcluir.addEventListener('click', deletarTarefa);

    return botaoExcluir;
}
const deletarTarefa = e => {
    const tarefaExcluir = e.target.parentElement;
    tarefaExcluir.remove();
}

export default BotaoDeletar;
