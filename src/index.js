import _ from 'lodash';
import './style.css';
import enter from './img/enter.png';
import refresh from './img/refresh.png';
import dots from './img/dots.png';


  document.querySelector('.refresh').src = refresh;
  document.querySelector('.enter').src = enter;
  const contentTask = document.querySelector('.pctasks')

  const tasktR = [{completed: true,description: "go to run",index: 0},{completed: false,description: "go to eat",index: 2},{completed: true,description: "go to sleep",index: 3}]
  
  
  window.addEventListener('load',()=>{

    
    for(let i = 0; i < tasktR.length;i++){
    const  task = ` <li class="tsk">
        <input type="checkbox" class="checkB" checked name="vehicle1" value="Bike">
        <label class="nametsk"> ${tasktR[i].description}</label> 
        <img class="dot" src='${dots}' alt=""> <hr>
                </li>`; 
        contentTask.innerHTML += task
    }
  })
  


  