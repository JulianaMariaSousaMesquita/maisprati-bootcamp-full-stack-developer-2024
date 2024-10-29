// Recupera as tarefas do localStorage ou define uma lista vazia
let taskList = JSON.parse(localStorage.getItem("tasks")) || [];

// Exibe as tarefas na lista
function displayTasks() {
  const taskContainer = document.getElementById("task-list");
  taskContainer.innerHTML = ""; // Limpa a lista antes de exibir

  taskList.forEach((task, index) => {
    // Cria o item da tarefa com botões de edição e exclusão
    const taskItem = document.createElement("li");
    taskItem.className = "list-group-item d-flex justify-content-between align-items-center";

    // Adiciona o texto da tarefa
    const taskText = document.createElement("span");
    taskText.textContent = task.text;

    // Adiciona a linha no texto se estiver concluída
    if (task.completed) taskText.classList.add("text-decoration-line-through");

    // Cria os botões
    const btnGroup = document.createElement("div");
    btnGroup.innerHTML = `
      <button class="btn btn-sm btn-outline-success me-2" onclick="toggleComplete(${index})">✔️</button>
      <button class="btn btn-sm btn-outline-warning me-2" onclick="editTask(${index})">✏️</button>
      <button class="btn btn-sm btn-outline-danger" onclick="deleteTask(${index})">🗑️</button>
    `;

    taskItem.appendChild(taskText);
    taskItem.appendChild(btnGroup);
    taskContainer.appendChild(taskItem);
  });
  // Salva a lista atualizada no localStorage
  localStorage.setItem("tasks", JSON.stringify(taskList));
}

// Adiciona uma nova tarefa
function addTask() {
  const taskInput = document.getElementById("new-task");
  const taskText = taskInput.value.trim();

  if (taskText !== "") {
    taskList.push({ text: taskText, completed: false });
    taskInput.value = "";
    displayTasks();
  }
}

// Alterna entre concluído e não concluído
function toggleComplete(index) {
  taskList[index].completed = !taskList[index].completed;
  displayTasks(); // Atualiza a interface para refletir a mudança
}

// Edita uma tarefa
function editTask(index) {
  const newText = prompt("Edit task:", taskList[index].text);
  if (newText !== null && newText.trim() !== "") {
    taskList[index].text = newText.trim();
    displayTasks();
  }
}

// Exclui uma tarefa
function deleteTask(index) {
  taskList.splice(index, 1);
  displayTasks();
}

// Carrega as tarefas ao abrir a página
window.onload = displayTasks;