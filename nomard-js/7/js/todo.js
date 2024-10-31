const toDoForm = document.getElementById("todo-form");
const todoInput = toDoForm.querySelector("input");
const todoList = document.getElementById("todo-list");

function handleTodoSubmit(event) {
    event.preventDefault();
    const newTodo = todoInput.value;
    todoInput.value = "";
    console.log(newTodo)
}

toDoForm.addEventListener("submit", handleTodoSubmit);