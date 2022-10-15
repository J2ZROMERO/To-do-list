/**
 * @jest-environment jsdom
 */
jest.mock('../structure.js')
jest.mock('../status.js')

import Task from '../structure.js'



describe('Add a li element to ul list', ()=>{
    
    test('Add one new item to the list', () => {
        //Arange
        const ts = new Task()
        const parentC = document.createElement('ul')
      
        //act
        parentC.setAttribute("id", "list")
        ts.create(parentC,"completed","feed pets",1)
        
  
        //Assert
        expect(parentC.childElementCount).toBe(1);
        // console.log("Add one item on LS",ts.getDataA())

      });



})

describe('remove a li element to ul list', ()=>{

    test('Add one new item to the list', () => {
    
        //Arange
        const ts = new Task()
        const parentC = document.createElement('ul')
        parentC.setAttribute("id", "list")
    
        //act
        ts.create(parentC,"completed","feed pets",1)
        ts.create(parentC,"completed","work out at the gym",2)
        ts.create(parentC,"completed","dance on the beach",3)
        
        for(let i = 0 ; i < parentC.childElementCount;i++){
        if(parentC.children[i].id == 2){
        ts.delete(parentC.children[i],parentC)
         }}

        //Assert
        expect(parentC.childElementCount).toBe(2);
        // console.log("Remove one item on LS",ts.getDataA())
    
      });
    



  })

  
  describe('Update a input element of ul list', ()=>{

    test('Modify the element whith id=3 and Update the input value to "data changed on mock"', () => {
  //Arange
  const ts = new Task()
  const parentC = document.createElement('ul')
  parentC.setAttribute("id", "list")

  //act
  ts.create(parentC,false,"feed pets",1)
  ts.create(parentC,false,"work out at the gym",2)
  ts.create(parentC,false,"dance on the beach",3)
  
  const newinput =   ts.update(parentC.children[2])
 
  //Assert
        expect(newinput).toMatch("data changed on mock");
        //console.log("update input element id=3 on LS",ts.getDataA())
    });
  })




  describe('check if a task is checked', ()=>{

    test('Modify the element whith id=1 if checked = true"', () => {
  //Arange
  const ts = new Task()
  const parentC = document.createElement('ul')
  parentC.setAttribute("id", "list")

  //act
  ts.create(parentC,false,"feed pets",1)
  ts.create(parentC,false,"work out at the gym",2)
  ts.create(parentC,false,"dance on the beach",3)
  
  const result =  ts.stat(parentC.children[0])

        //Assert
        expect(result).toBe(true);
        //console.log("checked on id=1 true on LS" ,ts.getDataA())
    });
  })






  describe('Clear all checked tasks', ()=>{

    test('there are 4 tasks 3 of them are checked and are going to remove,task 4 must exist"', () => {
  //Arange
  const ts = new Task()
  const parentC = document.createElement('ul')
  parentC.setAttribute("id", "list")

  //act
  ts.create(parentC,false,"feed pets",1)
  ts.create(parentC,false,"work out at the gym",2)
  ts.create(parentC,false,"dance on the beach",3)
  ts.create(parentC,false,"date with friends",4)
  
  const result = ts.clearCompleted(parentC)

        //Assert
        expect(parseInt(result)).toBe(4);
        //console.log("Remove  1,2,3 tasks on LS, id=4 was 'data with friends'",ts.getDataA())
    });
  })
