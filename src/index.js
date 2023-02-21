
import TodoItem from './todoMaker';
import display from './displayTodos';
import './style.css';

const todoArr = [
    {
        title: 'Hello',
        description:"This is short description",
        dueDate:'02/02/02',
        priority:'high'
    }
];
display(todoArr);


const form = document.getElementById('form');
const formContainer = document.getElementById('formContainer')
const addNew = document.getElementById('addNewTodo');
const closeForm = document.getElementById('closeForm');


addNew.addEventListener('click', function(){
    formContainer.classList.add('show');
    console.log(formContainer.classList);


});

closeForm.addEventListener('click', function(){
    formContainer.classList.remove('show');
})

form.addEventListener('submit', function(e){
    e.preventDefault();

    const title = document.getElementById('title').value;
    const description = document.getElementById('description').value;
    const dueDate = document.getElementById('dueDate').value;
    
    
    const todo = new TodoItem(title,description,dueDate,priority);

    todoArr.push(todo);
    display(todoArr)
    formContainer.classList.remove('show')

});


