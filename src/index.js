/* eslint-disable no-use-before-define */

import './style.css';
import refreshIcon from './artwork/refresh.png';
import addIcon from './artwork/add.png';
import dragIcon from './artwork/drag.png';
import delIcon from './artwork/delete.png';
import editIcon from './artwork/edit.png';
import okIcon from './artwork/ok.png';
import ToDoLibrary from './ToDoLibrary.js';
import { setChks } from './interaction.js';

const refreshBtn = document.querySelector('#refreshBtn');
const addBtn = document.querySelector('#addBtn');
const addBt = document.querySelector('#addBt');
const addInput = document.querySelector('#addInput');
const todoContainer = document.querySelector('#todoContainer');
const clearBtn = document.querySelector('#clearBtn');

const tasks = new ToDoLibrary();

const setDels = () => {
  const allDels = document.querySelectorAll('.task-Del');
  const xallDels = Array.from(allDels);

  for (let i = 0; i < xallDels.length; i += 1) {
    xallDels[i].addEventListener('click', () => {
      tasks.remove(i);
      refreshList();
    });
  }
};

const setEdits = () => {
  const allEdits = document.querySelectorAll('.task-Edit');
  const allTaskEditDivs = document.querySelectorAll('.task-Edit-Div');
  const xallEdits = Array.from(allEdits);
  const xallTaskEditDivs = Array.from(allTaskEditDivs);

  for (let i = 0; i < xallEdits.length; i += 1) {
    xallEdits[i].addEventListener('click', () => {
      xallTaskEditDivs[i].style.display = 'flex';
    });
  }
};

const setOKs = () => {
  const allOKs = document.querySelectorAll('.task-Edit-OK');
  const allTaskEditDivs = document.querySelectorAll('.task-Edit-Div');
  const allTaskEditInputs = document.querySelectorAll('.task-Edit-Input');
  const xallOKs = Array.from(allOKs);
  const xallTaskEditDivs = Array.from(allTaskEditDivs);
  const xallTaskEditInputs = Array.from(allTaskEditInputs);

  for (let i = 0; i < xallOKs.length; i += 1) {
    xallOKs[i].addEventListener('click', () => {
      tasks.rename(i, xallTaskEditInputs[i].value);
      xallTaskEditDivs[i].style.display = 'none';
      refreshList();
    });
  }
};

const refreshList = () => {
  todoContainer.innerHTML = '';
  let c = 0;

  tasks.arrToDos.forEach((task) => {
    task.index = c;
    c += 1;

    const taskDiv = document.createElement('div');
    const taskLi = document.createElement('li');
    const taskDivInner = document.createElement('div');
    const taskChk = document.createElement('input');
    const taskLbl = document.createElement('label');
    const taskDrag = new Image();
    const taskDel = new Image();
    const taskEditBtn = new Image();
    const taskEditDiv = document.createElement('div');
    const taskEditInput = document.createElement('input');
    const taskEditOK = new Image();

    taskChk.setAttribute('type', 'checkbox');
    taskChk.setAttribute('id', `chk${task.index}`);

    if (task.done === true) {
      taskChk.checked = true;
    }

    taskLbl.setAttribute('for', `chk${task.index}`);
    taskLbl.innerText = task.desc;

    taskDrag.src = dragIcon;
    taskDrag.setAttribute('alt', 'Drag');

    taskDel.src = delIcon;
    taskDel.setAttribute('alt', 'Delete');

    taskEditBtn.src = editIcon;
    taskEditBtn.setAttribute('alt', 'Edit');

    taskEditOK.src = okIcon;
    taskEditBtn.setAttribute('alt', 'OK');

    taskDiv.classList.add('task-Div');
    taskLi.classList.add('task-Li');
    taskDivInner.classList.add('task-Div-Inner');
    taskChk.classList.add('task-Chk');
    taskLbl.classList.add('task-Lbl');
    taskDrag.classList.add('task-Drag');
    taskDel.classList.add('task-Del');
    taskEditBtn.classList.add('task-Edit');
    taskEditDiv.classList.add('task-Edit-Div');
    taskEditInput.classList.add('task-Edit-Input');
    taskEditOK.classList.add('task-Edit-OK');

    taskDivInner.append(taskDel);
    taskDivInner.append(taskEditBtn);
    taskEditDiv.append(taskEditInput);
    taskEditDiv.append(taskEditOK);
    taskDivInner.append(taskEditDiv);
    taskDivInner.append(taskChk);
    taskDivInner.append(taskLbl);
    taskLi.append(taskDivInner);
    taskLi.append(taskDrag);
    taskDiv.append(taskLi);

    todoContainer.append(taskDiv);
  });

  window.localStorage.setItem('tasks', JSON.stringify(tasks.arrToDos));
  setChks(tasks);
  setDels();
  setEdits();
  setOKs();
};

window.addEventListener('load', () => {
  refreshBtn.src = refreshIcon;
  addBt.src = addIcon;

  const localStorageItem = window.localStorage.getItem('tasks');

  if (localStorageItem) {
    tasks.arrToDos = JSON.parse(localStorageItem);
  }

  refreshList();
});

addBtn.addEventListener('click', () => {
  tasks.add(addInput.value);
  addInput.value = '';
  refreshList();
});

clearBtn.addEventListener('click', () => {
  const xtasks = [];

  for (let i = 0; i < tasks.arrToDos.length; i += 1) {
    if (tasks.arrToDos[i].done === false) {
      xtasks.push(tasks.arrToDos[i]);
    }
  }

  tasks.arrToDos = xtasks;

  refreshList();
});