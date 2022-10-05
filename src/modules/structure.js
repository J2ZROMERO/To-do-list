export default class task {
constructor(comp,desc,ind){
this.taskC= {
description: desc,
completed: comp,
index: ind,
}    
this.taskA;

}

createtask(dots){
this.task;
        if(this.taskC.completed == true){

         this.task = ` <li class="tsk">
        <input type="checkbox" class="checkB" checked name="vehicle1" value="Bike">
        <label class="nametsk"> I have a bike</label> 
        <img class="dot" src='${dots}' alt="">
                </li>`; 
}else{
        
        this.task = ` <li class="tsk">
        <input type="checkbox" class="checkB" name="vehicle1" value="Bike">
        <label class="nametsk"> I have a bike</label> 
        <img class="dot" src='${dots}' alt="">
                </li>`; 
}
  
          
          this.taskA  = [this.taskC]
return this.task;
        }


}