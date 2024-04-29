
import { createElements } from './createelementsmodules.js';
import { eventModules } from './modules/eventmodules.js'

createElements();

if (!localStorage.getItem('todos')) {
localStorage.setItem('todos', JSON.stringify([]));
}

if (!localStorage.getItem('newToDoActiveId')) {
localStorage.setItem('newToDoActiveId', 1);
}

function getTodos() {
return JSON.parse(localStorage.getItem('todos'));
}

function setTodos(todos) {
localStorage.setItem('todos', JSON.stringify(todos));
}

function updateAllCount() {
  const newToDoActiveCards = document.querySelectorAll('.block__container__todo_Active');
  block__text_all.textContent = `All: ${newToDoActiveCards.length}`;
}

function updateCompletedCount() {
  const checkedCheckboxes = document.querySelectorAll('.block__container__todo_Active_Checkbox:checked');
  block__text_completed.textContent = `Completed: ${checkedCheckboxes.length}`;
}

let newToDoActiveId = parseInt(localStorage.getItem('newToDoActiveId'));


block__button__add_todo.addEventListener('click', function() {
const newToDoActive = document.createElement('div');
newToDoActive.className = 'block__container__todo_Active';
block__container__todo.append(newToDoActive);
newToDoActive.id = `active-todo-${newToDoActiveId}`;

const newToDoActiveCheckbox = document.createElement('input');
newToDoActiveCheckbox.type = 'checkbox';
newToDoActiveCheckbox.className = 'block__container__todo_Active_Checkbox';
if (getTodos().some(todo => todo.id === newToDoActiveId)) {
newToDoActiveCheckbox.checked = getTodos().find(todo => todo.id === newToDoActiveId).isChecked;
}
newToDoActive.prepend(newToDoActiveCheckbox);

const newinputToDoValue = document.createElement('div');
newinputToDoValue.className = 'inputToDoValue';
newinputToDoValue.name = "ToDo_text";
newToDoActive.append(newinputToDoValue);

const newinputToDoValueToDotext = document.createElement('span');
newinputToDoValueToDotext.className = 'inputToDoValueToDotext';
newinputToDoValueToDotext.textContent = block__input_todo.value;
newinputToDoValue.append(newinputToDoValueToDotext);

const newblockCloseData = document.createElement('div');
newblockCloseData.className = 'blockCloseData';
newToDoActive.append(newblockCloseData);

const newblockCloseButton = document.createElement('button');
newblockCloseButton.className = 'blockCloseButton';
newblockCloseButton.textContent = " X ";
newblockCloseData.prepend(newblockCloseButton);

const newInputData = document.createElement('input');
newInputData.className = 'inputData';
newInputData.placeholder = "Data";
const currentDate = new Date();
const dateString =
`${currentDate.getHours()}:${currentDate.getMinutes()} ${currentDate.getFullYear()}-${currentDate.getMonth() + 1}-${currentDate.getDate()}`;
newInputData.value = dateString;
newblockCloseData.append(newInputData);

newblockCloseButton.addEventListener('click', function() {
newToDoActive.remove();
const todos = getTodos();
const todoId = parseInt(newToDoActive.id.split('-')[2]);
const todoIndex = todos.findIndex(todo => todo.id === todoId);
todos.splice(todoIndex, 1);
setTodos(todos);
updateAllCount();
updateCompletedCount();
});


const newTodo = {
id: newToDoActiveId,
date: dateString,
text: block__input_todo.value,
isChecked: newToDoActiveCheckbox.checked,
};
const todos = getTodos();
todos.push(newTodo);
setTodos(todos);

newToDoActiveId++;
updateAllCount();
updateCompletedCount();
});

window.addEventListener('load', function() {
const todos = getTodos();
todos.forEach(todo => {
const newToDoActive = document.createElement('div');
newToDoActive.className = 'block__container__todo_Active';
block__container__todo.append(newToDoActive);
newToDoActive.id = `active-todo-${todo.id}`;

const newToDoActiveCheckbox = document.createElement('input');
newToDoActiveCheckbox.type = 'checkbox';
newToDoActiveCheckbox.className = 'block__container__todo_Active_Checkbox';
newToDoActiveCheckbox.checked = todo.isChecked;
newToDoActive.prepend(newToDoActiveCheckbox);

const newinputToDoValue = document.createElement('div');
newinputToDoValue.className = 'inputToDoValue';
newinputToDoValue.name = "ToDo_text";
newToDoActive.append(newinputToDoValue);

const newinputToDoValueToDotext = document.createElement('span');
newinputToDoValueToDotext.className = 'inputToDoValueToDotext';
newinputToDoValueToDotext.textContent = todo.text;
newinputToDoValue.append(newinputToDoValueToDotext);

const newblockCloseData = document.createElement('div');
newblockCloseData.className = 'blockCloseData';
newToDoActive.append(newblockCloseData);

const newblockCloseButton = document.createElement('button');
newblockCloseButton.className = 'blockCloseButton';
newblockCloseButton.textContent = " X ";
newblockCloseData.prepend(newblockCloseButton);

const newInputData = document.createElement('input');
newInputData.className = 'inputData';
newInputData.placeholder = "Data";
newInputData.value = todo.date;
newblockCloseData.append(newInputData);

newblockCloseButton.addEventListener('click', function() {
newToDoActive.remove();
const todos = getTodos();
const todoId = parseInt(newToDoActive.id.split('-')[2]);
const todoIndex = todos.findIndex(todo => todo.id === todoId);
todos.splice(todoIndex, 1);
setTodos(todos);
updateAllCount();
updateCompletedCount();
});
});
updateAllCount();
updateCompletedCount();
});


eventModules.delete_last_todo();
eventModules.delete_all_todos();
eventModules.change_todo_status();
eventModules.show_all_todos();
eventModules.block_search_todos();
eventModules.show_complete_todos();