
export default function addNewProjectForm() {
    const projectsContainer = document.getElementById('projectsContainer');

    const projectFormContainer = document.createElement('div');
    projectFormContainer.classList.add('projectFormContainer');
    projectFormContainer.id = 'projectFormContainer';
    //projectFormContainer.innerHTML = '';
    const projectForm  = document.createElement('form');
    projectForm.classList.add('projectForm');
    projectForm.setAttribute('id','projectForm');

    const projectFormName = document.createElement('input');
    projectFormName.setAttribute('type','text');
    projectFormName.placeholder = 'Title'
    projectFormName.classList.add('projectFormName');
    projectFormName.id = 'projectFormName';
    projectFormName.required = true;
    
    const addProject = document.createElement('button');
    addProject.classList.add('addProject');
    addProject.setAttribute('id','addProject')
    addProject.type = 'submit';
    addProject.innerHTML= 'Add';
    

    const cancelProject = document.createElement('button');
    cancelProject.classList.add('cancelProject')
    cancelProject.setAttribute('id','cancelProject');
    cancelProject.innerHTML = 'Cancel';
    cancelProject.addEventListener('click',function(e){
        e.preventDefault();
        projectFormContainer.remove();
    });
    
    const projectButtonContainer = document.createElement('div');
    projectButtonContainer.classList.add('projectButtonContainer')
    projectForm.appendChild(projectFormName);
    projectButtonContainer.appendChild(addProject);
    projectButtonContainer.appendChild(cancelProject);
    projectForm.appendChild(projectButtonContainer);
    
    projectFormContainer.appendChild(projectForm);
    projectsContainer.appendChild(projectFormContainer);

    }