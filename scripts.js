let input = document.getElementById('input-principal')
let button = document.getElementById('botao-adicionar')
let task = document.getElementById('nome-tarefa-id')
let fullList = document.getElementById('tarefas')
let arrayAddTask = []
let dados = localStorage.getItem('lista')

if (dados == null) {
  localStorage.setItem('lista', JSON.stringify(arrayAddTask))
}

reloadTask()

function viewTask() {
  let newLi = ''
  arrayAddTask.forEach((addTask, index) => {

    newLi = newLi + `
    <li class="item-tarefa ${addTask.finish == true && "concluido"}">
    
    <button class="botao-arrow" onclick="completeTask(${index})"><i class="fa-solid fa-circle-arrow-right"></i></button>
    
    <p class="nome-tarefa ${addTask.finish == true && "concluido"}" id="nome-tarefa-id">${addTask.addTask}</p>
    
    <button class="botao-delete" onclick="delTask(${index})"><i class="fa-solid fa-trash"></i></button>
    </li>
    `
  })

  fullList.innerHTML = newLi
  localStorage.setItem('lista', JSON.stringify(arrayAddTask))

}

function delTask(index) {
  arrayAddTask.splice(index, 1)
  viewTask()
}

function addTask() {
  arrayAddTask.push({
    addTask: input.value,
    finish: false
  })

  console.log(arrayAddTask)
  viewTask()

  input.value = ''
  input.focus()
}

function completeTask(index) {
  arrayAddTask[index].finish = !arrayAddTask[index].finish

  viewTask()
}

function reloadTask() {
  let myTask = localStorage.getItem('lista')

  arrayAddTask = JSON.parse(myTask)

  viewTask()
}

button.addEventListener('click', addTask)

