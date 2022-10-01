/* eslint-disable import/prefer-default-export */
const setChks = (tasks) => {
  const allChks = document.querySelectorAll('.task-Chk');
  const xallChks = Array.from(allChks);

  for (let i = 0; i < xallChks.length; i += 1) {
    xallChks[i].addEventListener('change', () => {
      if (tasks.arrToDos[i].done === false) {
        tasks.arrToDos[i].done = true;
        xallChks[i].checked = true;
      } else {
        tasks.arrToDos[i].done = false;
        xallChks[i].checked = false;
      }
      window.localStorage.setItem('tasks', JSON.stringify(tasks.arrToDos));
    });
  }
};

export { setChks };