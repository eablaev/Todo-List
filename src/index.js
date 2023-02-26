
import TodoItem from './todoMaker';
import displayTodos from './displayTodos';
import displayProjects from './displayProjects';
import addNewProjectForm from './addNewProjectForm';
import './style.css';
import handleDetails from './handleDetails';
import projectMaker from './projectMaker'

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

const projectArray = [{
    title: 'Home'
}
];
displayTodos(todoArr);
displayProjects(projectArray);


const form = document.getElementById('form');
const formContainer = document.getElementById('formContainer')
const addNew = document.getElementById('addNewTodo');
const closeForm = document.getElementById('closeForm');



const todoContainer = document.getElementById('todoContainer');
todoContainer.addEventListener('click',function(e){
    const id = e.target.id;
    
    if(id == 'todoDelete') {
        const dataCellValue = e.target.parentNode.parentNode.attributes[2].value; 
        const elementIndex = todoArr.findIndex(element => {
            return element.id == dataCellValue;
        });
        todoArr.splice(elementIndex,1)
        displayTodos(todoArr);
    } else if (id == "todoDetails") {
        const dataCellValue = e.target.parentNode.parentNode.attributes[2].value; 
        const elementIndex = todoArr.findIndex(element => {
            return element.id == dataCellValue;
        });
        const arrayElement = todoArr[elementIndex];
        handleDetails(arrayElement);
    }
});

addNew.addEventListener('click', function() {
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
    displayTodos(todoArr)
    formContainer.classList.remove('show')

});

// addNewProject.addEventListener('click',function() {
//     addNewProjectForm()  
// });


