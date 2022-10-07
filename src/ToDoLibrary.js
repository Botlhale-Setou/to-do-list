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

  toggleChk = (ix) => {
    if (this.arrToDos[ix].done === true) {
      this.arrToDos[ix].done = false;
    } else {
      this.arrToDos[ix].done = true;
    }
  }

  clearAll = () => {
    const x = [];
    for (let i = 0; i < this.arrToDos.length; i += 1) {
      if (this.arrToDos[i].done === false) {
        x.push(this.arrToDos[i]);
      }
    }
    this.arrToDos = x;
  }
}

exports.ToDoLibrary = ToDoLibrary;