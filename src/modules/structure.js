import dots from '../img/dots.png';
import deletei from '../img/deletei.png';
export default class task {
  constructor() {
    

    this.taskA = [];
    this.taskAD = [];
 this.count = 0;
        
  }

  create(contentTasks,comp, desc,ind) {


    /* Store array */
  this.taskC = {};
  this.taskC.completed = comp;
  this.taskC.description = desc;
  this.taskC.index = ind;
  this.taskA.push(this.taskC)
/* */

  let taskE = `<li id="${this.taskC.index}"
    class="tsk">
    <input type="checkbox" class="checkB" name="vehicle1" value="Bike">
    <input type="text" class="nametsk" value= '${this.taskC.description}' disabled> </input> 
    <img class="del" src='${deletei}' alt="">
    <img class="dot" src='${dots}' alt=""><hr>
           </li>`;
  
this.taskAD.push(taskE)
while(contentTasks.firstChild ){
  contentTasks.removeChild(contentTasks.firstChild );
}
this.taskAD.forEach((x)=>{
  contentTasks.innerHTML += x;
})

  }

countelement(){
  console.log(this.taskA)
  
}

  read(){

  }

  delete(iconD,taskParent){
    if (iconD.target.classList == 'del') {       

      taskParent.removeChild(iconD.target.parentElement);
      
console.log(iconD.target.classList);

    }
  }

  update(){

  }



}