const input = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const tasksDiv = document.getElementById("tasks");

// get tasks or empty array
let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

// show tasks when page loads
showTasks();

// add task
addBtn.onclick = () => {
    if (input.value === "") return;

    tasks.push(input.value);
    saveAndShow();
    input.value = "";
};

// show tasks
function showTasks() {
    tasksDiv.innerHTML = "";

    tasks.forEach((task, index) => {
        tasksDiv.innerHTML += `
            <div class="task">
                <span>${task}</span>
                <button onclick="deleteTask(${index})">Delete</button>
            </div>
        `;
    });
}

// delete task
function deleteTask(index) {
    tasks.splice(index, 1);
    saveAndShow();
}

// save to localStorage and refresh UI
function saveAndShow() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
    showTasks();
}
