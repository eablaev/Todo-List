
import ProjectItem from './projectMaker';


export default function addNewProjectForm() {
    //const projectsContainer = document.getElementById('projectsContainer');
    //console.log(array)
    
    const projectForm  = document.createElement('form');
    projectForm.classList.add('projectForm');
    projectForm.setAttribute('id','projectForm');

    const projectFormName = document.createElement('input');
    projectFormName.setAttribute('type','text');
    projectFormName.setAttribute('placeholder','Title');
    projectFormName.setAttribute('id','projectFormName');
    
    const addProject = document.createElement('button');
    addProject.classList.add('addProject');
    addProject.setAttribute('id','addProject')
    addProject.innerHTML= 'Add';
    addProject.addEventListener('click',function(e){
        e.preventDefault();
        console.log('newProjectpush')
        // console.log(array)
        // const newProject = new ProjectItem(projectFormName.value);
        // array.push(newProject);

       
       
    });

  
    const cancelProject = document.createElement('button');
    cancelProject.classList.add('cancelProject')
    cancelProject.setAttribute('id','cancelProject');
    cancelProject.innerHTML = 'Cancel';
    cancelProject.addEventListener('click',function(e){
        e.preventDefault();
        projectForm.remove();
    });
    
    const projectButtonContainer = document.createElement('div')
    projectForm.appendChild(projectFormName);
    projectButtonContainer.appendChild(addProject);
    projectButtonContainer.appendChild(cancelProject);
    projectForm.appendChild(projectButtonContainer);
    
    projectsContainer.appendChild(projectForm);
        
    }