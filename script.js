
let todoCount = 0;
let uncheckedCount = 0;

function addTodo() {
  const todoList = document.getElementById("todo-list");
  const todoInput = prompt("Enter your TODO:");
  if (todoInput !== null && todoInput.trim() !== "") {
    const todoItem = document.createElement("li");
    const todoText = document.createElement("span");
    const deleteBtn = document.createElement("button");

    todoText.innerText = todoInput;
    todoItem.appendChild(todoText);

    deleteBtn.innerText = "Delete";
    deleteBtn.addEventListener("click", function () {
      todoItem.remove();
      todoCount--;
      uncheckedCount--;
      updateCounts();
    });
    todoItem.appendChild(deleteBtn);

    todoList.appendChild(todoItem);
    todoCount++;
    uncheckedCount++;
    updateCounts();
  }
}

function updateCounts() {
  document.getElementById("item-count").innerText = todoCount;
  document.getElementById("unchecked-count").innerText = uncheckedCount;
}

document.getElementById("new-todo-btn").addEventListener("click", function () {
  addTodo();
});

