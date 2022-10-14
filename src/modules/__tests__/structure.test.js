/**
 * @jest-environment jsdom
 */
jest.mock('../structure.js')

import Task from '../structure.js'



describe('Add a li element to ul list', ()=>{
    
    test('Add one new item to the list', () => {
        //Arange
        const ts = new Task()
        const parentC = document.createElement('ul')
      
        //act
        parentC.setAttribute("id", "list")
        ts.create(parentC,"completed","other runn",1)
  
        //Assert
        expect(parentC.childElementCount).toBe(1);
    });



})


// describe('remove a li element to ul list', ()=>{

//     test('Add one new item to the list', () => {
    
//         //Arange
//         const ts = new Task()
//         const parentC = document.createElement('ul')
//         parentC.setAttribute("id", "list")
    
//         //act
//         ts.create(parentC,"completed","feed pets",1)
//         ts.create(parentC,"completed","work out at the gym",2)
//         ts.create(parentC,"completed","dance on the beach",3)
        
//         for(let i = 0 ; i < parentC.childElementCount;i++){
//         if(parentC.children[i].id == 2){
//         ts.delete(parentC.children[i],parentC)
//          }
//     }

//         //Assert
//         expect(parentC.childElementCount).toBe(2);
//     });



    
    
//   })

  








  describe('Update a input element of ul list', ()=>{

    test('Modify the element number 3 and Update the input valur to "data changed on mock"', () => {
  //Arange
  const ts = new Task()
  const parentC = document.createElement('ul')
  parentC.setAttribute("id", "list")

  //act
  ts.create(parentC,"completed","feed pets",1)
  ts.create(parentC,"completed","work out at the gym",2)
  ts.create(parentC,"completed","dance on the beach",3)

  
  
const newinput =   ts.update(parentC.children[2])
         


        //Assert
        expect(newinput).toMatch("data changed on mock");

    });



    
    
  })




