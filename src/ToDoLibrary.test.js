const { ToDoLibrary } = require('./ToDoLibrary.js');

const x = new ToDoLibrary();

describe('Add/Remove/Rename functions testing', () => {
  test('if add() adds an item', () => {
    //Arrange
    const currNo = x.arrToDos.length;
    //Act
    x.add('Example task description');
    //Assert
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

describe('if task is done & clearAll', () => {
  test('if task is done', () => {
    x.arrToDos = [{ done: false }, { done: false }, { done: false }];
    x.toggleChk(1);
    expect(x.arrToDos[1].done).toBeTruthy();
  });

  test('if all done are cleared', () => {
    x.arrToDos = [{ done: true }, { done: true }, { done: false }, { done: false }];
    const desired = [{ done: false }, { done: false }];
    x.clearAll();
    expect(x.arrToDos).toEqual(desired);
  });
});
