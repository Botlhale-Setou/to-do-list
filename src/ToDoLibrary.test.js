const { ToDoLibrary } = require('./ToDoLibrary.js');

const x = new ToDoLibrary();

describe('Add/Remove/Rename functions testing', () => {
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

  test('if rename() renames the correct item', () => {
    x.arrToDos = [{ desc: '1' }, { desc: '2' }, { desc: '3' }];
    const desired = [{ desc: '1' }, { desc: 'two' }, { desc: '3' }];
    x.rename(1, 'two');
    expect(x.arrToDos).toEqual(desired);
  });
});