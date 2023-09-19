
window.addEventListener("load", () => {
    loadTasks();
});
function addTask() {
    const taskInput = document.getElementById("task");
    const taskText = taskInput.value.trim();

    if (taskText !== "") {
        const taskList = document.getElementById("task-list");
        const li = document.createElement("li");
        li.innerHTML = `
            <span>${taskText}</span>
            <button onclick="editTask(this)">Edit</button>
            <button onclick="deleteTask(this)">Delete</button>
        `;
        taskList.appendChild(li);

        saveTasks();

        taskInput.value = "";
    }
}
function editTask(button) {
    const li = button.parentElement;
    const taskText = li.querySelector("span").innerText;
    const newTaskText = prompt("Edit task:", taskText);

    if (newTaskText !== null) {
        li.querySelector("span").innerText = newTaskText;

        saveTasks();
    }
}


function deleteTask(button) {
    const li = button.parentElement;
    li.remove();

    saveTasks();
}

function saveTasks() {
    const taskList = document.getElementById("task-list");
    const tasks = [];
    for (const li of taskList.querySelectorAll("li")) {
        const taskText = li.querySelector("span").innerText;
        tasks.push(taskText);
    }
    localStorage.setItem("tasks", JSON.stringify(tasks));
}


function loadTasks() {
    const taskList = document.getElementById("task-list");
    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    for (const taskText of tasks) {
        const li = document.createElement("li");
        li.innerHTML = `
            <span>${taskText}</span>
            <button onclick="editTask(this)">Edit</button>
            <button onclick="deleteTask(this)">Delete</button>
        `;
        taskList.appendChild(li);
    }
}
