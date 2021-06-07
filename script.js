
const lista = document.querySelector("#lista-tarefas");
const botao1 = document.querySelector("#criar-tarefa");
const botao2 = document.querySelector("#apaga-tudo");


function adicionaItem(){

  const inputTexto = document.querySelector("#texto-tarefa");

  let itemLista = document.createElement("li");
      itemLista.innerText = inputTexto.value;
      itemLista.className="lista";
      lista.appendChild(itemLista);
      itemLista.addEventListener("click",selection);
      itemLista.addEventListener("dblclick",completed);
      inputTexto.value ="";

}

botao1.addEventListener("click", adicionaItem);

function selection(event){
  itemDaLista = document.querySelectorAll(".lista");
  for(let index=0; index < itemDaLista.length; index +=1){
    if(itemDaLista[index]=== event.target){
      event.target.classList.add('selected');
    }
    else{
      itemDaLista[index].classList.remove("selected");
    }
  }
}

function completed(event){

  itemDaLista = document.querySelectorAll(".lista");
  for(let index=0; index < itemDaLista.length;index +=1){
    if(itemDaLista[index]=== event.target){
      event.target.classList.toggle('completed');
    }
  }
}

function apagaTudo(){

 itemDaLista = document.querySelectorAll(".lista");
  for(let index = itemDaLista.length ; index !==0  ; index -=1){
    if(itemDaLista.length !== 0 ){
      lista.removeChild(lista.firstChild);
    }  
  }  
}

botao2.addEventListener("click", apagaTudo);