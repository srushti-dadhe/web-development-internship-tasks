let taskList = document.getElementById("taskList");

function addTask() {
    let taskText = document.getElementById("taskInput").value;
    let date = document.getElementById("taskDate").value;
    let time = document.getElementById("taskTime").value;
    if (taskText === "") return alert("Enter a task");
    let li = document.createElement("li");
    li.innerHTML = `
        <span>${taskText}<br>
        <small>${date} ${time}</small></span>

        <div class="task-actions">
            <button onclick="completeTask(this)">✔</button>
            <button onclick="editTask(this)">✏</button>
            <button onclick="deleteTask(this)">❌</button>
        </div>
    `;
    taskList.appendChild(li);
    saveTasks();

    document.getElementById("taskInput").value = "";
}
function completeTask(btn) {
    btn.parentElement.parentElement.classList.toggle("completed");
    saveTasks();
}
function editTask(btn) {
    let taskSpan = btn.parentElement.parentElement.querySelector("span");
    let newTask = prompt("Edit task", taskSpan.innerText.split("\n")[0]);
    if (newTask) {
        taskSpan.innerHTML = newTask;
        saveTasks();
    }
}
function deleteTask(btn) {
    btn.parentElement.parentElement.remove();
    saveTasks();
}
function saveTasks() {
    localStorage.setItem("tasks", taskList.innerHTML);
}
function loadTasks() {
    taskList.innerHTML = localStorage.getItem("tasks") || "";
}

loadTasks();
