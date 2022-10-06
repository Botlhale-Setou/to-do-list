const { ToDo } = require('./ToDo.js');

class ToDoLibrary {
  arrToDos = [];

  add = (dn) => {
    const xtodo = new ToDo(this.arrToDos.length);
    xtodo.desc = dn;
    this.arrToDos.push(xtodo);
  };

  remove = (ix) => {
    this.arrToDos.splice(ix, 1);
  };

  rename = (pos, newName) => {
    this.arrToDos[pos].desc = newName;
  };
}

exports.ToDoLibrary = ToDoLibrary;