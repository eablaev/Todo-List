
import handleCheckBox from './handleCheckBox'

export default function display (array) {
    
    const todoContainer = document.getElementById('todoContainer')
    todoContainer.textContent = '';

    array.forEach(element => {
        const todoDiv = document.createElement('div');
        todoDiv.classList.add('todoDiv');

        const todoCheckMark = document.createElement('input');
      
        todoCheckMark.setAttribute('type','checkbox');
        todoCheckMark.setAttribute('id','todoCheckMark');
        todoCheckMark.classList.add('todoCheckMark');
        todoCheckMark.addEventListener('change',function(){
            console.log('hello');
            handleCheckBox();
        })
        
        
        
        const todoTitle = document.createElement('h5');
        todoTitle.classList.add('todoTitle');
        todoTitle.innerHTML = element.title;

        const todoDescription  = document.createElement('h6');
        todoDescription.classList.add('todoDescription');
        todoDescription.innerHTML = element.description;

        const dueDate = document.createElement('h6');
        dueDate.classList.add('dueDate');
        dueDate.innerHTML = element.dueDate;

        const todoDivLeft = document.createElement('div');
        todoDivLeft.classList.add('todoDivLeft');
        const todoDivRight = document.createElement('div');
        todoDivRight.classList.add('todoDivRight');

        todoDiv.appendChild(todoDivLeft);
        todoDiv.appendChild(todoDivRight);

        todoDivLeft.appendChild(todoCheckMark);
        todoDivLeft.appendChild(todoTitle);
        todoDivRight.appendChild(todoDescription);
        todoDivRight.appendChild(dueDate);


        todoContainer.appendChild(todoDiv);
        
      

    });
}

