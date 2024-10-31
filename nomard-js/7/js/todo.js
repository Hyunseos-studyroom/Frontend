const toDoForm = document.getElementById("todo-form");
const todoInput = toDoForm.querySelector("input");
const todoList = document.getElementById("todo-list");

function paintTodo(newTodo) {
    const li = document.createElement("li");
    const span = document.createElement("span");
    li.appendChild(span);
    span.innerText = newTodo;
    todoList.appendChild(li);
}

function handleTodoSubmit(event) {
    event.preventDefault();
    const newTodo = todoInput.value;
    todoInput.value = "";
    paintTodo(newTodo);
}

toDoForm.addEventListener("submit", handleTodoSubmit);