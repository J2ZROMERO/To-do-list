
import { sample } from "lodash";
import Task from "./structure";
import deletei from '../img/deletei.png';
import check from '../img/check.png';
import dots from '../img/dots.png';


export default class Status {

constructor (){
    this.completed;
   
}



stat(x){
this.taskLS = new Task;
   const index = x.target.parentElement.getAttribute('id');
    const checkBv = document.getElementById(index);
    let sts = false;
    
    if(x.target.classList.value === 'checkB'){
        sts =  checkBv.children[0].checked;
      
        let getls = JSON.parse(localStorage.getItem('tasks') )
      
        let datamodified = getls.map((x,i) => {
       
        if( x.index == index){
        x.completed = sts

       }
        
        
        return x;
      });
    
     this.taskLS.localS(datamodified)
      
 
    }
    
   return sts
    }



loadpage(contentTask){
    let getls = JSON.parse(localStorage.getItem('tasks') )

  
    if(getls.length > 0){
    
      getls.forEach(x => {
    
      
      const taskE = `<li id="${x.index}"
      class="tsk">
      <input type="checkbox" class="checkB" name="vehicle1" value="Bike">
      <input type="text" class="nametsk" value= '${x.description}' disabled> </input> 
      <img class="check" src='${check}' alt="">
      <img class="del" src='${deletei}' alt="">
      <img class="dot" src='${dots}' alt=""><hr>
      </li>`;
      contentTask.innerHTML += taskE;
      
    });
    }
}

}

