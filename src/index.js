
import TodoItem from './todoMaker';
import ProjectItem from './projectMaker';
import displayTodos from './displayTodos';
import displayProjects from './displayProjects';
import handleDetails from './handleDetails';
import handleCheckBox from './handleCheckBox';
import './style.css';

const projectArray  = [
    // homeProject
    {
        title: 'Home',
        todosArr: [
  
            {
                title: 'Hello1',
                description:"This is short description",
                dueDate:'04/02/02',
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
                dueDate:'08/02/02',
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


todoContainer.addEventListener('click',function(e){
    const id = e.target.id;
    
    if(id == 'todoDelete') {

        const dataCellValue = e.target.parentNode.parentNode.attributes[2].value; 
        const activeProjectIndex = projectArray.findIndex((element) => {
            return element.title == activeProject;
        });
        //find index of the element to be delited within the active project
        const activeTodosArray = projectArray[activeProjectIndex].todosArr;
        const elementIndex = activeTodosArray.findIndex(element => {
            return element.id == dataCellValue;
        });
        activeTodosArray.splice(elementIndex,1);
        displayTodos(activeTodosArray);

    } else if (id == "todoDetails") {
        const dataCellValue = e.target.parentNode.parentNode.attributes[2].value; 
        const elementIndex = todoArr.findIndex(element => {
            return element.id == dataCellValue;
        });
        const arrayElement = todoArr[elementIndex];
        handleDetails(arrayElement);
    } else if (id == 'todoCheckMark'){
        const dataCellValue = e.target.parentNode.parentNode.attributes[2].value; 
        console.log(e.target.parentNode.parentNode.attributes[2])
        handleCheckBox(dataCellValue)
    } else if (id == 'addNewTodo') { 
        todoFormContainer.classList.add('showTodoForm');
        const form = document.getElementById('todoForm');
        form.addEventListener('submit', function(e){
            e.preventDefault();
       
            const title = document.getElementById('title').value;
            const description = document.getElementById('description').value;
            const dueDate = document.getElementById('dueDateInput').value;

            const todo = new TodoItem(title,description,dueDate,priority);
       
            const index = projectArray.findIndex((element) => {
            return element.title == activeProject;
            });
       projectArray[index].todosArr.push(todo);
       displayTodos(projectArray[index].todosArr)
       e.target.parentNode.innerHTML = ''
        });
    };
});

///Switching between projects + added new project
projectsContainer.addEventListener('click', function(e) {
    const id = e.target.id;
    if(id == 'projectTitle') {
        const name = e.target.innerHTML;
    
        activeProject = name;
        
        const index = projectArray.findIndex((element) => {
            return element.title == name;
        });
        displayTodos(projectArray[index].todosArr)
    } else if (id == 'addNewProject') {
        const projectForm = document.getElementById('projectForm');
        projectForm.addEventListener('submit',function(e) {
            e.preventDefault(); 
             const projectFormName = document.getElementById('projectFormName')
             const project = new ProjectItem(projectFormName.value);
             projectArray.push(project);
             displayProjects(projectArray)      
        });
    };
});





