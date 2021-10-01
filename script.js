/* eslint-disable space-before-blocks */

const lista = document.querySelector('#lista-tarefas');
const botao1 = document.querySelector('#criar-tarefa');
const botao2 = document.querySelector('#apaga-tudo');
const botao3 = document.querySelector('#remover-finalizados');
const botao4 = document.querySelector('#salvar-tarefas');
const botao5 = document.querySelector('#mover-cima');
const botao6 = document.querySelector('#mover-baixo');
const botao7 = document.querySelector('#remover-selecionado');

function completed(event){
  const itemDaLista = document.querySelectorAll('.lista');
  for (let index = 0; index < itemDaLista.length; index += 1){
    if (itemDaLista[index] === event.target){
      event.target.classList.toggle('completed');
    }
  }
}

function selection(event){
  const itemDaLista = document.querySelectorAll('.lista');
  for (let index = 0; index < itemDaLista.length; index += 1){
    if (itemDaLista[index] === event.target){
      event.target.classList.add('selected');
    } else {
      itemDaLista[index].classList.remove('selected');
    }
  }
}

function adicionaItem(){
  const inputTexto = document.querySelector('#texto-tarefa');

  if (inputTexto.value === ''){
    alert('Texto inválido!!');
    return;
  }

  const itemLista = document.createElement('li');
  itemLista.innerText = inputTexto.value;
  itemLista.className = 'lista';
  lista.appendChild(itemLista);
  itemLista.addEventListener('click', selection);
  itemLista.addEventListener('dblclick', completed);
  inputTexto.value = ''; // limpa a caixa de texto
  inputTexto.focus(); // faz o cursor voltar pra caixa de dígito
}

botao1.addEventListener('click', adicionaItem);

function apagaTudo(){
  const ol = document.querySelector('ol');
  const itemDaLista = document.querySelectorAll('.lista');
  ol.remove(itemDaLista);
}

botao2.addEventListener('click', apagaTudo);

function removeCompleto(){
  const listaCompletos = document.querySelectorAll('.completed');
  const paiCompletos = document.querySelector('#lista-tarefas');

  for (let index = 0; index < listaCompletos.length; index += 1){
    paiCompletos.removeChild(listaCompletos[index]);
  }
}

botao3.addEventListener('click', removeCompleto);

function addStorage(){
  const htmlList = lista.innerHTML;
  localStorage.setItem('listaSalva', htmlList);
}

function recuperaStorage(){
  const itemStorage = localStorage.getItem('listaSalva');
  lista.innerHTML = itemStorage;
  const itemDaLista = document.querySelectorAll('.lista');
  for (let index = 0; index < itemDaLista.length; index += 1) {
    itemDaLista[index].addEventListener('click', selection);
    itemDaLista[index].addEventListener('dblclick', completed);
  }
}

botao4.addEventListener('click', addStorage);
recuperaStorage();

function removerSelecionado(){
  const itemSelecionado = document.querySelector('.selected');
  lista.removeChild(itemSelecionado);
}

botao7.addEventListener('click', removerSelecionado);

// referência https://developer.mozilla.org/pt-BR/docs/Web/API/Node/insertBefore e ajuda da sala de dúvidas.
// insertBefore(); -> elementopai.insertBefore(novoElemento. elementoPosteior);
function moverCima(){
  const itemSelecionado = document.querySelector('.selected');
  if (itemSelecionado !== null){
    const elementoCima = itemSelecionado.previousElementSibling;
    if (itemSelecionado !== lista.firstChild){
      lista.insertBefore(itemSelecionado, elementoCima);
    }
  }
}

botao5.addEventListener('click', moverCima);

function moverBaixo(){
  const itemSelecionado = document.querySelector('.selected');
  if (itemSelecionado !== null){
    const elementoBaixo = itemSelecionado.nextElementSibling;
    if (itemSelecionado !== lista.lastChild){
      lista.insertBefore(itemSelecionado, elementoBaixo.nextElementSibling);
    }
  }
}

botao6.addEventListener('click', moverBaixo);
