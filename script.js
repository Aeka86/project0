const classNames = {
  TODO_ITEM: 'todo-container',
  TODO_CHECKBOX: 'todo-checkbox',
  TODO_TEXT: 'todo-text',
  TODO_DELETE: 'todo-delete',
}

const list = document.getElementById('todo-list')
const itemCountSpan = document.getElementById('item-count')
const uncheckedCountSpan = document.getElementById('unchecked-count')

function addTodo() {
  const todoList = document.getElementById("todo-list");
  const todoInput = prompt("Enter a new TODO:");
  if (todoInput) {
    const newTodo = document.createElement("li");
    newTodo.innerHTML = `
      <span>${todoInput}</span>
      <button class="delete-button">Delete</button>
    `;
    todoList.appendChild(newTodo);
    updateItemCount();
  }
}

  


