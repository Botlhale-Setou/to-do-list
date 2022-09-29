import './style.css';
import refreshIcon from './artwork/refresh.png';
import addIcon from './artwork/add.png';
import dragIcon from './artwork/drag.png';

const refreshBtn = document.querySelector('#refreshBtn');
const addBtn = document.querySelector('#addBtn');

const tasks = [
  {
    index: 1,
    desc: 'Task 1 description',
    done: false,
  },
  {
    index: 2,
    desc: 'Task 2 description',
    done: false,
  },
  {
    index: 3,
    desc: 'Task 3 description',
    done: false,
  },
];

const todoContainer = document.querySelector('#todoContainer');

const refreshList = () => {
  todoContainer.innerHTML = '';

  tasks.forEach((task) => {
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
};

window.addEventListener('load', () => {
  refreshBtn.src = refreshIcon;
  addBtn.src = addIcon;
  refreshList();
});