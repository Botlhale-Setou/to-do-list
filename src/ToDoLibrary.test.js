const { ToDoLibrary } = require('./ToDoLibrary.js');

const x = new ToDoLibrary();

test('if add() adds an item', () => {
  const currNo = x.arrToDos.length;
  x.add('Example task description');
  expect(x.arrToDos.length).toBe(currNo + 1);
});