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
this.taskA.forEach((x,i)=>{
  contentTasks.innerHTML += this.taskAD[i];
})

  }

 
  delete(iconD,taskParent){
   
    if (iconD.target.classList == 'del') {       
      taskParent.removeChild(iconD.target.parentElement);

  let filtrado =   this.taskA.filter(x => x.index != parseInt(iconD.target.parentElement.getAttribute('id') )).map(function(elem,index){ 
    elem.index = index+1
    return elem
  })

  while(taskParent.firstChild ){
  taskParent.removeChild(taskParent.firstChild );
}
this.taskA = filtrado;

this.taskA.forEach((x)=>{
  let taskE = `<li id="${x.index}"
  class="tsk">
  <input type="checkbox" class="checkB" name="vehicle1" value="Bike">
  <input type="text" class="nametsk" value= '${x.description}' disabled> </input> 
  <img class="del" src='${deletei}' alt="">
  <img class="dot" src='${dots}' alt=""><hr>
         </li>`;
         taskParent.innerHTML += taskE;
})


}
  }





  update(){

  }



}