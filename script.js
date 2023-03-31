const classNames = {
  TODO_ITEM: 'todo-container',
  TODO_CHECKBOX: 'todo-checkbox',
  TODO_TEXT: 'todo-text',
  TODO_DELETE: 'todo-delete',
}

const list = document.getElementById('todo-list')
const itemCountSpan = document.getElementById('item-count')
const uncheckedCountSpan = document.getElementById('unchecked-count')

function newTodo() {
  var todoList = document.getElementById("todo-list");
  var todoItem = document.createElement("li");
  var todoText = document.createTextNode("New TODO item");
  todoItem.appendChild(todoText);
  todoList.appendChild(todoItem);
  var itemCount = document.getElementById("item-count");
  itemCount.textContent = parseInt(itemCount.textContent) + 1;
  
  var uncheckedCount = document.getElementById("unchecked-count");
  uncheckedCount.textContent = parseInt(uncheckedCount.textContent) + 1;
  
}


