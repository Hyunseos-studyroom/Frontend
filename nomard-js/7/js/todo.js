const toDoForm = document.getElementById("todo-form");
const todoInput = toDoForm.querySelector("input");
const todoList = document.getElementById("todo-list");

function deleteTodo(event) {
    const li = event.target.parentNode;
    li.remove();
}
function paintTodo(newTodo) {
    const li = document.createElement("li");
    const span = document.createElement("span");
    span.innerText = newTodo;
    const button = document.createElement("button");
    button.innerText = "X";
    button.addEventListener("click", deleteTodo)
    li.appendChild(span);
    li.appendChild(button);
    todoList.appendChild(li);
}

function handleTodoSubmit(event) {
    event.preventDefault();
    const newTodo = todoInput.value;
    todoInput.value = "";
    paintTodo(newTodo);
}

toDoForm.addEventListener("submit", handleTodoSubmit);