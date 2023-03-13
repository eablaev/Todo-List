
import handleEdit from './handleEdit';
import addNewTodoForm from './addNewTodoForm copy'
import {format} from 'date-fns';

export default function displayTodos (array) {
    console.log('inside Display')
    const todoContainer = document.getElementById('todoContainer');
    const addNewTodoDiv = document.createElement('div');
    addNewTodoDiv.classList.add('addNewTodoDiv');
    todoContainer.innerHTML = '';

    array.forEach((element,index) => {
        const cell = index;
        element.id = index;
        
        const todoDiv = document.createElement('div');
        todoDiv.classList.add('todoDiv');
        todoDiv.setAttribute('id','todoDiv');
        todoDiv.setAttribute('data-cell',cell)

        const todoPriority = document.createElement('div');
        todoPriority.setAttribute('id', 'todoPriority');
        todoPriority.classList.add('todoPriority');
        if (element.priority == 'low') {
            todoPriority.classList.add('low')
        } else if (element.priority == 'med') {
            todoPriority.classList.add('med')
        } else if (element.priority == 'high') {
            todoPriority.classList.add('high')
        }

        const todoCheckMark = document.createElement('input');
        todoCheckMark.setAttribute('type','checkbox');
        todoCheckMark.setAttribute('id','todoCheckMark');
        todoCheckMark.classList.add('todoCheckMark');
      
        
        const todoTitle = document.createElement('h5');
        todoTitle.classList.add('todoTitle');
        todoTitle.innerHTML = element.title;

        

        const todoDetails = document.createElement('button');
        todoDetails.classList.add('todoDetails');
        todoDetails.setAttribute('id','todoDetails');
        todoDetails.innerHTML = 'Details';
        

        const dueDate = document.createElement('h6');
        dueDate.classList.add('dueDate');
        console.log(element.dueDate);
        const date = new Date(element.dueDate)
        const newDate = new Date(date.valueOf() + date.getTimezoneOffset() * 60 * 1000);
        dueDate.innerHTML = format(newDate, 'MM/dd/yy')
      
        

        //////write priority logic

        const todoEdit = document.createElement('div');
        todoEdit.classList.add('todoEdit');
        todoEdit.id = 'todoEdit';
      

        const todoDelete = document.createElement('div');
        todoDelete.classList.add('todoDelete');
        todoDelete.id ='todoDelete';
       
    
        /////////////////////////
        // Creating todo layout//
        ////////////////////////

        const todoDivLeft = document.createElement('div');
        todoDivLeft.classList.add('todoDivLeft');

        const todoDivCenter = document.createElement('div');
        todoDivCenter.classList.add('todoDivCenter');
        
        const todoDivRight = document.createElement('div');
        todoDivRight.classList.add('todoDivRight');

        /////////////////////
        // page structuring//
        /////////////////////

        todoDivLeft.appendChild(todoPriority);
        todoDivLeft.appendChild(todoCheckMark);
        todoDivCenter.appendChild(todoTitle);
        todoDivRight.appendChild(todoDetails);
        // todoDivRight.appendChild(todoDescription);
        todoDivRight.appendChild(dueDate);
        todoDivRight.appendChild(todoEdit);
        todoDivRight.appendChild(todoDelete)
        
        todoDiv.appendChild(todoDivLeft);
        todoDiv.appendChild(todoDivCenter);
        todoDiv.appendChild(todoDivRight);

        todoContainer.appendChild(todoDiv);
        
    });
    const addNewTodo = document.createElement('button');
    addNewTodo.classList.add('addNewTodo');
    addNewTodo.setAttribute('id','addNewTodo');
    

    todoContainer.appendChild(addNewTodoDiv);
    addNewTodoDiv.appendChild(addNewTodo)
    addNewTodo.addEventListener('click', () => {  
        addNewTodoForm(); 
    });

}

