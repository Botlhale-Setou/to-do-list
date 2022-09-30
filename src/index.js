import './style.css';
import refreshIcon from './artwork/refresh.png';
import addIcon from './artwork/add.png';
import dragIcon from './artwork/drag.png';
import ToDoLibrary from './ToDoLibrary.js';

const refreshBtn = document.querySelector('#refreshBtn');
const addBtn = document.querySelector('#addBtn');
const addBt = document.querySelector('#addBt');
const addInput = document.querySelector('#addInput');
const todoContainer = document.querySelector('#todoContainer');
const clearBtn = document.querySelector('#clearBtn');

const tasks = new ToDoLibrary();

const setChks = () => {
  const allChks = document.querySelectorAll('.task-Chk');
  const xallChks = Array.from(allChks);

  for (let i = 0; i < xallChks.length; i += 1) {
    xallChks[i].addEventListener('change', () => {
      tasks.arrToDos[i].done = !(tasks.arrToDos[i].done);
    });
  }
};

const refreshList = () => {
  todoContainer.innerHTML = '';

  tasks.arrToDos.forEach((task) => {
    const taskDiv = document.createElement('div');
    const taskLi = document.createElement('li');
    const taskDivInner = document.createElement('div');
    const taskChk = document.createElement('input');
    const taskLbl = document.createElement('label');
    const taskDrag = new Image();

    taskChk.setAttribute('type', 'checkbox');
    taskChk.setAttribute('id', `chk${task.index}`);

    taskLbl.setAttribute('for', `chk${task.index}`);
    taskLbl.innerText = task.desc;

    taskDrag.src = dragIcon;
    taskDrag.setAttribute('alt', 'Drag');

    taskDiv.classList.add('task-Div');
    taskLi.classList.add('task-Li');
    taskDivInner.classList.add('task-Div-Inner');
    taskChk.classList.add('task-Chk');
    taskLbl.classList.add('task-Lbl');
    taskDrag.classList.add('task-Drag');

    taskDivInner.append(taskChk);
    taskDivInner.append(taskLbl);
    taskLi.append(taskDivInner);
    taskLi.append(taskDrag);
    taskDiv.append(taskLi);

    todoContainer.append(taskDiv);
  });
  setChks();
};

window.addEventListener('load', () => {
  refreshBtn.src = refreshIcon;
  addBt.src = addIcon;
  refreshList();
});

addBtn.addEventListener('click', () => {
  tasks.add(addInput.value);
  addInput.value = '';
  refreshList();
});

clearBtn.addEventListener('click', () => {
  for (let i = 0; i < tasks.arrToDos.length; i += 1) {
    if (tasks.arrToDos[i].done === true) {
      tasks.remove(i);
    }
  }
  refreshList();
});