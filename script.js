const buttonCreateTask = document.querySelector('#criar-tarefa');
const input = document.querySelector('#texto-tarefa');
const listParent = document.querySelector('#lista-tarefas');
//o conteudo de "value" é o que será criado a lista. pegar o value e colocar na lista depois de clicar
//função para criar uma li quando clicar
buttonCreateTask.addEventListener('click', function(event){ 
  const makeList = document.createElement('li');
  listParent.appendChild(makeList);
  makeList.innerText = input.value;
  input.value = null;
});
//função para mudar a cor de fundo quando clicar 
listParent.addEventListener('click', function(event){ 
  const changeListBack = event.target;//cria o alvo
  const selector = document.querySelector('.selected');//torna o css uma variavel
  changeListBack.classList.add('selected');//erro de seletor estava me travando, estava colocando o selector
  if (selector != null) {//null é um valor que pode ser atribuído a value para alterar o css.
    selector.classList.remove('selected');
  }//adiciona classe ref: https://developer.mozilla.org/pt-BR/docs/Web/API/Element/classList
});
//função para sinalixar como concluida
listParent.addEventListener('dblclick', function(event){
  const markTesk = event.target;
  if (markTesk.classList.contains('completed')) {//estava errando ao colocar (.)ponto no completed aqui e deixando o event.target
    markTesk.classList.remove('completed');
  }else {
    markTesk.classList.add('completed');
  }
});
//quase a mesma estrutura que para adicionar o background-color da função anterior