import ToDo from './Todo.js';

export default class ToDoLibrary {
  arrToDos = [];

  add = (dn) => {
    const xtodo = new ToDo(this.arrToDos.length);
    xtodo.desc = dn;
    this.arrToDos.push(xtodo);
  };

  remove = (ix) => {
    this.arrToDos.splice(ix, 1);
  }
}