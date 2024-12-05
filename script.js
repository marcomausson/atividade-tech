document.addEventListener("DOMContentLoaded", () => {
    const taskInput = document.getElementById("task-input");
    const addTaskBtn = document.getElementById("add-task-btn");
    const taskList = document.getElementById("task-list");
  
    // Adiciona uma nova tarefa
    addTaskBtn.addEventListener("click", () => {
      const taskText = taskInput.value.trim();
      if (taskText) {
        const listItem = document.createElement("li");
        listItem.className = "task-item";
  
        const taskSpan = document.createElement("span");
        taskSpan.textContent = taskText;
  
        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Excluir";
  
        // Evento para excluir a tarefa
        deleteBtn.addEventListener("click", () => {
          listItem.remove();
        });
  
        // Evento para marcar/desmarcar a tarefa como concluída
        taskSpan.addEventListener("click", () => {
          listItem.classList.toggle("completed");
        });
  
        listItem.appendChild(taskSpan);
        listItem.appendChild(deleteBtn);
        taskList.appendChild(listItem);
  
        taskInput.value = "";
      }
    });
  });
  