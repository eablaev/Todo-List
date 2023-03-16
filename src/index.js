
import TodoItem from './todoMaker';
import ProjectItem from './projectMaker';
import displayTodos from './displayTodos';
import displayProjects from './displayProjects';
import handleDetails from './handleDetails';
import handleCheckBox from './handleCheckBox';
import './style.css';
import handleEdit from './handleEdit';

let projectArray = [];
//if no data in local storage asssign dummy data to projectArray
//if there is data, parse it to the projectArray
 if (!localStorage.getItem('projectArray')) {
   projectArray = [
    // homeProject
    {
        title: 'Home',
        todosArr: [
  
            {
                title: 'Read 10 pages',
                description:"This is short description",
                dueDate:'2023-07-24',
                priority:'high'
            },
           {
                title: 'Code',
                description:"This is short description",
                dueDate:'2023-03-23',
                priority:'med'
            }
        ]
    },
    {
        title: 'projectOne',
        todosArr: []
    }
];
   localStorage.setItem('projectArray', JSON.stringify(projectArray));
  } else if (localStorage.getItem('projectArray')) {
  projectArray = JSON.parse(localStorage.getItem('projectArray'));
  }
const todoArr = projectArray[0].todosArr;
let activeProject = 'Home';

///local storage function
function pushToArrayInLocalStorage(array) {
   
    localStorage.setItem('projectArray', JSON.stringify(array)); 
  }

const contentDiv = document.getElementById('contentDiv')

displayTodos(todoArr);
displayProjects(projectArray);
const homeProject = document.querySelector('.projectTitle');
homeProject.classList.add('activeProject')

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
        pushToArrayInLocalStorage(projectArray)
        displayTodos(activeTodosArray);

    } else if (id == "todoDetails") {
        const dataCellValue = e.target.parentNode.parentNode.attributes[2].value; 
        const elementIndex = todoArr.findIndex(element => {
            return element.id == dataCellValue;
        });
        const arrayElement = todoArr[elementIndex];
        handleDetails(arrayElement);
        
        contentDiv.classList.add('blur')
    } else if(id == "todoEdit") {
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
            //1. take values from each field
            const title = document.getElementById('editTitle').innerHTML;
            const description = document.getElementById('editDescription').innerHTML;
            const dueDate = document.getElementById('editDueDate').value;
            console.log(dueDate)
            const priority = document.getElementById('editPrioritySelect').value;
            console.log(priority)

            //2.make new todoItem
            const editedTodo = new TodoItem(title,description,dueDate,priority);
            console.log(editedTodo);

            //3. replace todo item with the one it had before
            activeTodosArray.splice(elementIndex,1,editedTodo);

            //4. display todos
            displayTodos(activeTodosArray);

            //5. clean up
            editWindow.classList.remove('show');
            editWindow.remove()
            contentDiv.classList.remove('blur');    
        });

    } else if (id == 'todoCheckMark') {
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
            /// save to local storage
           
            displayTodos(activeTodosArray)
            pushToArrayInLocalStorage(projectArray)
            e.target.parentNode.innerHTML = ''
        });
    };
});

///Switching between projects + added new project

projectsContainer.addEventListener('click', function(e) {
    const AllProjectTitles = document.querySelectorAll('.projectTitle')
    console.log(AllProjectTitles)
    const id = e.target.id;
    if(id == 'projectTitle') {
        const name = e.target.innerHTML;
        
        
        AllProjectTitles.forEach((title) => {
            title.classList.remove('activeProject');
        });
        e.target.classList.add('activeProject')
    
        activeProject = name;
        
        const index = projectArray.findIndex((element) => {
            return element.title == name;
        });
        
        displayTodos(projectArray[index].todosArr);

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





