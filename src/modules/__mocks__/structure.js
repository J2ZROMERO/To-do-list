/* eslint eqeqeq: 0 */
/* eslint-disable no-unused-expressions */

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

    const taskE = `<li id="${ind}"
      class="tsk">
      <input type="checkbox" class="checkB" name="vehicle1" value="Bike">
      <input type="text" class="nametsk" value= '${desc}' disabled> </input> 
      <img class="check" src='http//img.gif' alt="">
      <img class="del" src='http//img.gif' alt="">
      <img class="dot" src='http//img.gif' alt=""><hr>
             </li>`;
    contentTasks.innerHTML += taskE;
    this.localS(this.taskA);
    this.getDataA();
  }

  delete = (iconD, taskParent) => {
    taskParent.removeChild(iconD);

    this.localS(this.taskA);
    const getls = JSON.parse(localStorage.getItem('tasks'));

    const farray = getls.filter((x) => x.index != iconD.id);
    this.localS(farray);
    return taskParent;
  }

  localS = (data) => {
    localStorage.setItem('tasks', JSON.stringify(data));
  }

  update = (x) => {
    const textinput = x.children[1];

    if (x.children[2].className === 'check') {
      const inputenrties = 'data changed on mock';
      textinput.value = inputenrties;

      const datamodified = this.taskA.map((x) => {
        switch (x.index) {
          case 3:
            x.description = inputenrties;
            break;

          default: null;
        }

        return x;
      });

      this.taskA = datamodified;
      this.localS(this.taskA);
    }
    this.getDataA();
    return textinput.value;
  }

stat = (x) => {
  const index = x.id;

  if (x.children[0].className === 'checkB') {
    x.children[0].checked = true;
    const getls = JSON.parse(localStorage.getItem('tasks'));
    const datamodified = getls.map((x) => {
      if (x.index == index) {
        x.completed = true;
      }
      return x;
    });
    this.localS(datamodified);
  }
  return x.children[0].checked;
}

/***/
clearCompleted(x) {
  for (let i = 0; i < x.childElementCount; i += 1) {
    if (x.children[i].id == 1 || x.children[i].id == 2 || x.children[i].id == 3) {
      x.children[i].children[0].checked = true;
    }
  }
  const [...taskVa] = x.childNodes;
  const nvtf = taskVa.filter((x) => x.children[0].checked == false);

  taskVa.filter((e) => e.children[0].checked == true).map((b) => {
    x.removeChild(b);
    return b;
  });

  const obnew = [];
  this.getDataA().filter((x) => {
    nvtf.forEach((element) => {
      if (x.index == element.id) {
        obnew.push(x);
      }
    });
    return '';
  });
  this.setDataA(obnew);
  this.getDataA();
  return x.children[0].id;
}

/** */

 setDataA = (data) => {
   this.taskA = data;
   this.taskA.map((elem, index) => {
     elem.index = (index + 1);
     return elem;
   });
   this.localS(this.taskA);
 }

  localS = (data) => {
    localStorage.setItem('tasks', JSON.stringify(data));
  }

  getDataA = () => JSON.parse(localStorage.getItem('tasks'))

  setDat = (val) => {
    val.forEach((x) => {
      this.taskA.push(x);
    });
  }
}
