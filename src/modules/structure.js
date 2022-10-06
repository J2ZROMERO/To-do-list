import dots from '../img/dots.png';
import deletei from '../img/deletei.png';
export default class task {
  constructor() {
    

    this.taskA = [];
 this.count = 0;
        
  }

  create(contentTasks,comp, desc) {

this.count+=1
    /* Store array */
  this.taskC = {};
  this.taskC.completed = comp;
  this.taskC.description = desc;
  this.taskC.index = this.count;
  this.taskA.push(this.taskC)
/* */

  let taskE = "";
  const newArray = this.taskA.map(function(task){
  
  
    if (task.completed === true) {
    taskE = `<li class="tsk">
      <input type="checkbox" class="checkB" checked name="vehicle1" value="Bike">
      <input type="text" class="nametsk" value= '${task.description}' disabled> </input> 
      <img class="dot" src='${deletei}' alt="">
      <img class="dot" src='${dots}' alt="">
              </li>`;
  } else {
    taskE = `<li html index of element js
    class="tsk">
    <input type="checkbox" class="checkB" name="vehicle1" value="Bike">
    <input type="text" class="nametsk" value= '${task.description}' disabled> </input> 
    <img class="del" src='${deletei}' alt="">
    <img class="dot" src='${dots}' alt=""><hr>
           </li>`;
  }
  
  return taskE;

})

while(contentTasks.firstChild ){
  contentTasks.removeChild(contentTasks.firstChild );
}
newArray.forEach((x)=>{
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