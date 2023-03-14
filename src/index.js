
import TodoItem from './todoMaker';
import ProjectItem from './projectMaker';
import displayTodos from './displayTodos';
import displayProjects from './displayProjects';
import handleDetails from './handleDetails';
import handleCheckBox from './handleCheckBox';
import './style.css';
import handleEdit from './handleEdit';

const projectArray  = [
    // homeProject
    {
        title: 'Home',
        todosArr: [
  
            {
                title: 'Hello1',
                description:"This is short description",
                dueDate:'1989-07-24',
                priority:'high'
            },
            {
                title: 'Hello2',
                description:"This is short description",
                dueDate:'2001-01-01',
                priority:'low'
            }, {
                title: 'Hello3',
                description:"This is short description",
                dueDate:'04-03-2001',
                priority:'med'
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

const contentDiv = document.getElementById('contentDiv')


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
        
        contentDiv.classList.add('blur')
    } else if(id == "todoEdit")  {
        //delete edit window 
        
        const dataCellValue = e.target.parentNode.parentNode.attributes[2].value; 
        const activeProjectIndex = projectArray.findIndex((element) => {
            return element.title == activeProject;
        });
        const activeTodosArray = projectArray[activeProjectIndex].todosArr;
        const elementIndex = activeTodosArray.findIndex(element => {
            return element.id == dataCellValue;
        });
        const todoItem = activeTodosArray[elementIndex]
        console.log(todoItem)
        handleEdit(todoItem);
        contentDiv.classList.add('blur')
        confirmEdit.addEventListener('click', function() {
            //1. tke values from each field
            const title = document.getElementById('editTitle').innerHTML;
            const description = document.getElementById('editDescription').innerHTML;
            const dueDate = document.getElementById('editDueDate').value;
            console.log(dueDate)
            const priority = document.getElementById('editPrioritySelect').value;
            console.log(priority)

            
            //2.make new todoItem
            const editedTodo = new TodoItem(title,description,dueDate,priority);
            console.log(editedTodo)
            //3. replace todo item with the one it had before
            activeTodosArray.splice(elementIndex,1,editedTodo)
            //4. display todos
            displayTodos(activeTodosArray);
            editWindow.classList.remove('show');
            editWindow.remove()
            contentDiv.classList.remove('blur');    
        })

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
            const priority = document.getElementById('priority').value

            const todo = new TodoItem(title,description,dueDate,priority);
            console.log(todo)
            
            const projectIndex = projectArray.findIndex((element) => {
            return element.title == activeProject;
            });
            const activeTodosArray = projectArray[projectIndex].todosArr;
            activeTodosArray.push(todo);
            displayTodos(activeTodosArray)
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





