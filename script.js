document.addEventListener("DOMContentLoaded", () => {
    const taskInput = document.getElementById("task-input");
    const addTaskBtn = document.getElementById("add-task-btn");
    const taskList = document.getElementById("task-list");
  
    // Função para salvar as tarefas no Local Storage
    const saveTasks = () => {
      const tasks = [];
      document.querySelectorAll(".task-item").forEach((item) => {
        tasks.push({
          text: item.querySelector("span").textContent,
          completed: item.classList.contains("completed"),
        });
      });
      localStorage.setItem("tasks", JSON.stringify(tasks));
    };
  
    // Função para carregar as tarefas do Local Storage
    const loadTasks = () => {
      const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
      tasks.forEach((task) => {
        addTask(task.text, task.completed);
      });
    };
  
    // Função para adicionar uma nova tarefa
    const addTask = (text, completed = false) => {
      const listItem = document.createElement("li");
      listItem.className = "task-item";
      if (completed) {
        listItem.classList.add("completed");
      }
  
      const taskSpan = document.createElement("span");
      taskSpan.textContent = text;
  
      const deleteBtn = document.createElement("button");
      deleteBtn.textContent = "Excluir";
  
      // Evento para excluir a tarefa
      deleteBtn.addEventListener("click", () => {
        listItem.remove();
        saveTasks();
      });
  
      // Evento para marcar/desmarcar a tarefa como concluída
      taskSpan.addEventListener("click", () => {
        listItem.classList.toggle("completed");
        saveTasks();
      });
  
      listItem.appendChild(taskSpan);
      listItem.appendChild(deleteBtn);
      taskList.appendChild(listItem);
      saveTasks();
    };
  
    // Adiciona uma nova tarefa a partir do botão
    addTaskBtn.addEventListener("click", () => {
      const taskText = taskInput.value.trim();
      if (taskText) {
        addTask(taskText);
        taskInput.value = "";
      }
    });
  
    // Carrega as tarefas ao iniciar
    loadTasks();
  });
  