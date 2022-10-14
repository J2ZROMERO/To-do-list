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
  }

  delete = (iconD, taskParent) => {
        console.log(iconD , "   saaaaaaaa" , taskParent)
     taskParent.removeChild(iconD)
      this.localS(this.taskA);
    
      const getls = JSON.parse(localStorage.getItem('tasks'));
      console.log(getls)
      return  taskParent
  }


  localS = (data) => {
    localStorage.setItem('tasks', JSON.stringify(data));
  }

}


