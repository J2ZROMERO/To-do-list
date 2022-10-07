import './style.css';
import enter from './img/enter.png';
import refresh from './img/refresh.png';
import task from './modules/structure';

document.querySelector('.refresh').src = refresh;
document.querySelector('.enter').src = enter;
const inputTask = document.querySelector('.addToDo');
const contentTask = document.querySelector('.pctasks');

const taskV = new task;

  document.querySelector('.enter').addEventListener('click',()=>{
    if(inputTask.value != ''){
    taskV.create(contentTask,false,inputTask.value,contentTask.childElementCount+1) 
    inputTask.value = '';
  
    // let  p = document.querySelector('.nametsk')
    // taskV.update(p)
    
  }

    

  })

contentTask.addEventListener('click',(x)=>{
   taskV.delete(x,contentTask)
})  
  

contentTask.addEventListener('click',(x)=>{
  taskV.update(x,contentTask)
})  
 



 


















