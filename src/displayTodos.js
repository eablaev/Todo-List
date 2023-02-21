import handleCheckBox from './handleCheckBox'
import handleDetails from './handleDetails'

export default function display (array) {

    const todoContainer = document.getElementById('todoContainer');
    todoContainer.textContent = '';

    array.forEach(element => {
        const todoDiv = document.createElement('div');
        todoDiv.classList.add('todoDiv');
        todoDiv.setAttribute('id','todoDiv');

        const todoPriority = document.createElement('div');
        todoPriority.setAttribute('id', 'todoPriority');
        todoPriority.classList.add('todoPriority');

        const todoCheckMark = document.createElement('input');
        todoCheckMark.setAttribute('type','checkbox');
        todoCheckMark.setAttribute('id','todoCheckMark');
        todoCheckMark.classList.add('todoCheckMark');
        todoCheckMark.addEventListener('change',handleCheckBox)
        
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
        
        todoDiv.appendChild(todoDivLeft);
        todoDiv.appendChild(todoDivCenter);
        todoDiv.appendChild(todoDivRight);

        todoContainer.appendChild(todoDiv);
        
    });
}

