
import { sample } from "lodash";
import Task from "./structure";
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
        /* */
        
        let getls = JSON.parse(localStorage.getItem('tasks') )
      
        let datamodified = getls.map((x,i) => {
       
        if( x.index == index){
        x.completed = sts

       }
        
        
        return x;
      });
    
     this.taskLS.localS(datamodified)
      
    //    /* */
    }
    
   return sts
    }
}

