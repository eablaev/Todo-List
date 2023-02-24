import handleCheckBox from './handleCheckBox';
import handleDetails from './handleDetails';


import handleEdit from './handleEdit';


export default function display (array) {
    console.log('inside Display')
    const todoContainer = document.getElementById('todoContainer');
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

        const todoCheckMark = document.createElement('input');
        todoCheckMark.setAttribute('type','checkbox');
        todoCheckMark.setAttribute('id','todoCheckMark');
        todoCheckMark.classList.add('todoCheckMark');
        todoCheckMark.addEventListener('change',handleCheckBox);    
        
        const todoTitle = document.createElement('h5');
        todoTitle.classList.add('todoTitle');
        todoTitle.innerHTML = element.title;

        // const todoDescription  = document.createElement('h6');
        // todoDescription.classList.add('todoDescription');
        // todoDescription.innerHTML = element.description;

        const todoDetails = document.createElement('button');
        todoDetails.classList.add('todoDetails');
        todoDetails.innerHTML = 'Details';
        todoDetails.addEventListener('click',handleDetails);

        const dueDate = document.createElement('h6');
        dueDate.classList.add('dueDate');
        dueDate.innerHTML = element.dueDate;

        const todoEdit = document.createElement('div');
        todoEdit.classList.add('todoEdit');
        todoEdit.addEventListener('click',handleEdit);

        const todoDelete = document.createElement('div');
        todoDelete.classList.add('todoDelete');
        todoDelete.setAttribute('id','todoDelete');
       
       

   
        

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
}

