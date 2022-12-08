import ToDo from './ToDo.js';

export default class ToDoLibrary {
  arrToDos = [];

  add = (dn) => {
    const xtodo = new ToDo(this.arrToDos.length + 1);
    xtodo.description = dn;
    this.arrToDos.push(xtodo);
  };

  remove = (ix) => {
    this.arrToDos.splice(ix, 1);
  };

  rename = (pos, newName) => {
    this.arrToDos[pos].description = newName;
  };
}