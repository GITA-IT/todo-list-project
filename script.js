function addTask() {
    const taskInput = document.getElementById("taskInput");
    const taskText = taskInput.value.trim();
  
    if (taskText === "") return;
  
    const taskList = document.getElementById("taskList");
  
    const li = document.createElement("li");
    li.textContent = taskText;
  
    // عند الضغط على المهمة يتم حذفها
    li.onclick = function () {
      li.remove();
    };
  
    taskList.appendChild(li);
    taskInput.value = "";
  }
  