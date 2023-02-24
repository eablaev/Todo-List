
import TodoItem from './todoMaker';
import display from './displayTodos';
import handleDelete from './handleDelete';
import './style.css';

const todoArr = [
  
    {
        title: 'Hello1',
        description:"This is short description",
        dueDate:'02/02/02',
        priority:'high'
    },
    {
        title: 'Hello2',
        description:"This is short description",
        dueDate:'02/02/02',
        priority:'high'
    }, {
        title: 'Hello3',
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
const todoDelete = document.querySelectorAll('#todoDelete');

const todoContainer = document.getElementById('todoContainer');
todoContainer.addEventListener('click',function(e){
    const id = e.target.id;
    
    if(id == 'todoDelete'){
        const dataCellValue = e.target.parentNode.parentNode.attributes[2].value;
        console.log("dataCellValue is "+dataCellValue);
        console.log("id is "+id);
        const elementIndex = todoArr.findIndex(element =>{
            return element.id == dataCellValue;
        });

        console.log("elementIndex is "+elementIndex);
        todoArr.splice(elementIndex,1)
        display(todoArr);

    }
   


})






addNew.addEventListener('click', function(){
    formContainer.classList.add('show');
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


