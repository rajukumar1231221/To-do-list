document.addEventListener("DOMContentLoaded", loadTasks);

function addTask() {
    let input = document.getElementById("taskInput");
    let taskText = input.value.trim();
    if (taskText === "") return;
    createTaskElement(taskText);
    saveTasks();
    input.value = "";
}

function createTaskElement(text) {
    let task = document.createElement("div");
    task.className = "task";
    task.textContent = text;
    task.setAttribute("draggable", "true");
    task.addEventListener("dragstart", () => task.classList.add("dragging"));
    task.addEventListener("dragend", () => { task.classList.remove("dragging"); saveTasks(); });
    task.addEventListener("dblclick", () => { task.remove(); saveTasks(); });
    document.getElementById("taskList").appendChild(task);
    enableDragAndDrop();
}

function enableDragAndDrop() {
    let taskList = document.getElementById("taskList");
    taskList.addEventListener("dragover", (e) => {
        e.preventDefault();
        let dragging = document.querySelector(".dragging");
        let afterElement = getDragAfterElement(taskList, e.clientY);
        if (afterElement == null) {
            taskList.appendChild(dragging);
        } else {
            taskList.insertBefore(dragging, afterElement);
        }
    });
}

function getDragAfterElement(container, y) {
    let draggableElements = [...container.querySelectorAll(".task:not(.dragging)")];
    return draggableElements.reduce((closest, child) => {
        let box = child.getBoundingClientRect();
        let offset = y - box.top - box.height / 2;
        return offset < 0 && offset > closest.offset ? { offset, element: child } : closest;
    }, { offset: Number.NEGATIVE_INFINITY }).element;
}

function saveTasks() {
    let tasks = [...document.querySelectorAll(".task")].map(task => task.textContent);
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

function loadTasks() {
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.forEach(createTaskElement);
}