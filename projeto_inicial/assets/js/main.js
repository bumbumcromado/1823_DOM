import BotaoConcluir from '../js/componentes/botaoConcluir.js';
import BotaoDeletar from '../js/componentes/botaoDeletar.js';


(() => {
    
const input = document.querySelector('[data-form-input]');
const novaTarefa = document.querySelector('[data-form-button]');
const lista = document.querySelector('[data-list]');

const criaTarefa = evento => {
    evento.preventDefault();
    
    const tarefa = document.createElement('li');
    tarefa.classList.add('task');

    const valor = input.value;
    const conteudo = `<p class="content">${valor}</p>`
    tarefa.innerHTML = conteudo;
    lista.appendChild(tarefa);
    tarefa.appendChild(BotaoConcluir());
    tarefa.appendChild(BotaoDeletar());


    input.value = '';
    input.focus();
}

novaTarefa.addEventListener('click', criaTarefa);

})();