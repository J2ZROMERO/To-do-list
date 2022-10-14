/**
 * @jest-environment jsdom
 */
jest.mock('../structure.js')

import Task from '../structure.js'

describe('Add a li element to ul list', ()=>{

    test('Add one new item to the list', () => {
        //Arange
        const ts = new Task()
        
        //act
        const parentC = document.createElement('ul')
        parentC.setAttribute("id", "list")
     const parentLi = ts.create(parentC,"completed","other runn",1)
       
     
        //Assert
        expect(parentC.childElementCount).toBe(1);
    });



})