//rec 5
const buttonCreateTask = document.getElementById('criar-tarefa');
const inputText = document.getElementById('texto-tarefa');
const listParent = document.getElementById('lista-tarefas');
//o conteudo de "value" é o que será criado a lista. pegar o value e colocar na lista depois de clicar


buttonCreateTask.addEventListener('click', function(event) { //função para criar uma li quando clicar
  const makeList = document.createElement('li');
  listParent.appendChild(makeList);
  makeList.innerText = inputText.value;
  inputText.value = null;
});