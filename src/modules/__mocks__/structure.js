/* eslint eqeqeq: 0 */
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
      <img class="check" src='http//img.gif' alt="">
      <img class="del" src='http//img.gif' alt="">
      <img class="dot" src='http//img.gif' alt=""><hr>
             </li>`;
      contentTasks.innerHTML += taskE;
    });
    this.localS(this.taskA);
  
  }

  localS = (data) => {
    localStorage.setItem('tasks', JSON.stringify(data));
  }

}


