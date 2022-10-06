const { ToDoLibrary } = require('./ToDoLibrary.js');

const x = new ToDoLibrary();
describe('Add/Remove functions testing', () => {
  test('if add() adds an item', () => {
    const currNo = x.arrToDos.length;
    x.add('Example task description');
    expect(x.arrToDos.length).toBe(currNo + 1);
  });

  test('if remove() removes the correct item', () => {
    x.arrToDos = ['1', '2', '3'];
    const desired = ['1', '3'];
    x.remove(1);
    expect(x.arrToDos).toEqual(desired);
  });
});