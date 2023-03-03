
import TodoItem from './todoMaker';
import ProjectItem from './projectMaker';
import displayTodos from './displayTodos';
import displayProjects from './displayProjects';
import handleDetails from './handleDetails';
import addNewTodoForm from './addNewTodoForm copy'
import './style.css';


const projectArray  = [
    // homeProject
    {
        title: 'Home',
        todosArr: [
  
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
        ]
    },
    {
        title: 'ProjectOne',
        todosArr: []
    }
];

const todoArr = projectArray[0].todosArr;

let activeProject = 'Home';

displayTodos(todoArr);
displayProjects(projectArray);


const todoContainer = document.getElementById('todoContainer');
const addNewTodo = document.getElementById('addNewTodo');
const projectsContainer = document.getElementById('projectsContainer');

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

addNewTodo.addEventListener('click', function() {

    addNewTodoForm();
    
    const form = document.getElementById('todoForm');
    console.log(form)
    form.addEventListener('submit', function(e){
        e.preventDefault();
       
       console.log('add')

        const title = document.getElementById('title').value;
        const description = document.getElementById('description').value;
        const dueDate = document.getElementById('dueDate').value;

        const todo = new TodoItem(title,description,dueDate,priority);
       
        const index = projectArray.findIndex((element) => {
            return element.title == activeProject;
        });
       projectArray[index].todosArr.push(todo);
       displayTodos(projectArray[index].todosArr)
       e.target.parentNode.innerHTML = ''
    });
});

projectFormContainer.addEventListener('click',function(e) {
    if(e.target.id == "addProject") {
       
        const projectFormName = document.getElementById('projectFormName');
        
        const newProjectItem = new ProjectItem(projectFormName.value);

        projectArray.push(newProjectItem);
        console.log(projectArray)
        displayProjects(projectArray)
        } else if(e.target.id == 'projectTitle') {
            const name = e.target.innerHTML;
        
            activeProject = name;
            
            const index = projectArray.findIndex((element) => {
                return element.title == name;
            });
            displayTodos(projectArray[index].todosArr)
            
        }
});

projectsContainer.addEventListener('click', function(e) {
    if(e.target.id == 'projectTitle') {
        const name = e.target.innerHTML;
    
        activeProject = name;
        
        const index = projectArray.findIndex((element) => {
            return element.title == name;
        });
        displayTodos(projectArray[index].todosArr)
        
    }
});




