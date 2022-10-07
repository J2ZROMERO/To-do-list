/* eslint eqeqeq: 0 */
import './style.css';
import enter from './img/enter.png';
import refresh from './img/refresh.png';
import Task from './modules/structure.js';
import Status from './modules/status.js';
import deletei from './img/deletei.png';
import check from './img/check.png';
import dots from './img/dots.png';

document.querySelector('.refresh').src = refresh;
document.querySelector('.enter').src = enter;
const inputTask = document.querySelector('.addToDo');
const contentTask = document.querySelector('.pctasks');
const clear = document.querySelector('.clear');

const taskV = new Task();
const statusV = new Status();

/* Add event */
document.querySelector('.enter').addEventListener('click', () => {
  if (inputTask.value !== '') {
    taskV.create(contentTask, false, inputTask.value, contentTask.childElementCount + 1);
    inputTask.value = '';
  }
});

contentTask.addEventListener('click', (x) => {
  taskV.delete(x, contentTask);
  statusV.stat(x);
});

contentTask.addEventListener('click', (x) => {
  taskV.update(x, contentTask);
});

clear.addEventListener('click', () => {
  const taskVa = Array.from(contentTask.childNodes);
  const nvtf = taskVa.filter((x) => x.children[0].checked == false);
  taskVa.filter((x) => x.children[0].checked == true).map((b) => {
    contentTask.removeChild(b);
    return b;
  });
  const obnew = [];
  taskV.getDataA().filter((x) => {
    nvtf.forEach((element) => {
      if (x.index == element.id) {
        obnew.push(x);
      }
    });
    return '';
  });
  taskV.setDataA(obnew, contentTask);
});

window.addEventListener('load', () => {
  const getls = JSON.parse(localStorage.getItem('tasks'));
  if (getls != null) {
    taskV.setDat(getls);
    getls.forEach((x) => {
      if (x.completed == true) {
        const taskE = `<li id="${x.index}"
  class="tsk">
  <input type="checkbox" class="checkB" checked name="vehicle1" value="Bike">
  <input type="text" class="nametsk" value= '${x.description}' disabled> </input> 
  <img class="check" src='${check}' alt="">
  <img class="del" src='${deletei}' alt="">
  <img class="dot" src='${dots}' alt=""><hr>
  </li>`;
        contentTask.innerHTML += taskE;
      } else {
        const taskE = `<li id="${x.index}"
  class="tsk">
  <input type="checkbox" class="checkB" name="vehicle1" value="Bike">
  <input type="text" class="nametsk" value= '${x.description}' disabled> </input> 
  <img class="check" src='${check}' alt="">
  <img class="del" src='${deletei}' alt="">
  <img class="dot" src='${dots}' alt=""><hr>
  </li>`;
        contentTask.innerHTML += taskE;
      }
    });
  }
});

document.querySelector('.refresh').addEventListener('click', () => {
  window.location.reload();
});