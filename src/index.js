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

    taskV.create(contentTask,false,inputTask.value) 
    inputTask.value = '';
    taskV.countelement()
  }
  })

contentTask.addEventListener('click',(x)=>{
   taskV.delete(x,contentTask)
})  
  

  
  




















