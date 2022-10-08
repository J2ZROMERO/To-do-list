/* eslint eqeqeq: 0 */
import dots from '../img/dots.png';
import deletei from '../img/deletei.png';
import check from '../img/check.png';

export default class Task {
  constructor() {
    this.taskA = [];
    this.taskAD = [];
    this.count = 0;
  }

  create = (contentTasks, comp, desc, ind) => {
    /* Store array */
    this.taskC = {};
    this.taskC.completed = comp;
    this.taskC.description = desc;
    this.taskC.index = ind;
    this.taskA.push(this.taskC);
    /* */

    // this.taskAD.push(taskE);
    while (contentTasks.firstChild) {
      contentTasks.removeChild(contentTasks.firstChild);
    }
    this.taskA.forEach((x) => {
      const taskE = `<li id="${x.index}"
      class="tsk">
      <input type="checkbox" class="checkB" name="vehicle1" value="Bike">
      <input type="text" class="nametsk" value= '${x.description}' disabled> </input> 
      <img class="check" src='${check}' alt="">
      <img class="del" src='${deletei}' alt="">
      <img class="dot" src='${dots}' alt=""><hr>
             </li>`;
      contentTasks.innerHTML += taskE;
    });
    this.localS(this.taskA);
  }

  delete = (iconD, taskParent) => {
    if (iconD.target.classList.value === 'del') {
      taskParent.removeChild(iconD.target.parentElement);

      const filtrado = this.taskA.filter((x) => x.index !== parseInt(iconD.target.parentElement.getAttribute('id'), 10)).map((elem, index) => {
        elem.index = (index + 1);
        return elem;
      });

      while (taskParent.firstChild) {
        taskParent.removeChild(taskParent.firstChild);
      }
      this.taskA = filtrado;

      this.taskA.forEach((x) => {
        const taskE = `<li id="${x.index}"
  class="tsk">
  <input type="checkbox" class="checkB" name="vehicle1" value="Bike">
  <input type="text" class="nametsk" value= '${x.description}' disabled> </input> 
  <img class="check"  alt="">
  <img class="del" src='${deletei}' alt="">
  <img class="dot" src='${dots}' alt=""><hr>
         </li>`;
        taskParent.innerHTML += taskE;
      });

      this.localS(this.taskA);
    }
  }

  update = (x) => {
    if (x.target.classList.value === 'nametsk') {
      x.target.disabled = false;

      const indice = x.target.parentElement.getAttribute('id');
      x.target.focus();
      const imagee = document.getElementById(indice);
      imagee.children[2].style.display = 'block';
      imagee.children[2].src = check;
    }

    if (x.target.classList.value === 'check') {
      const index = x.target.parentElement.getAttribute('id');
      const textinput = document.getElementById(index);
      const inputenrties = textinput.children[1].value;
      textinput.children[1].value = inputenrties;

      const datamodified = this.taskA.map((x) => {
        if (x.index == index) {
          x.description = inputenrties;
        }
        return x;
      });
      textinput.children[1].disabled = true;
      textinput.children[2].style.display = 'none';

      this.taskA = datamodified;
      this.localS(this.taskA);
    }
  }

  localS = (data) => {
    localStorage.setItem('tasks', JSON.stringify(data));
  }

  getDataA() {
    return this.taskA;
  }

  setDataA = (data, parent) => {
    this.taskA = data;

    this.taskA.map((elem, index) => {
      elem.index = (index + 1);

      return elem;
    });
    this.localS(this.taskA);

    const taskVa = Array.from(parent.childNodes);

    taskVa.forEach((x, i) => {
      x.id = i + 1;
    });
  }

  setDat = (val) => {
    val.forEach((x) => {
      this.taskA.push(x);
    });
  }
}
