
export default function addNewProjectForm() {
    const projectsDiv = document.getElementById('projectsDiv');
    
    const projectForm  = document.createElement('form');
    const projectFormName = document.createElement('input');
    projectFormName.setAttribute('type','text');
    projectFormName.setAttribute('placeholder','Title');
    
    const projectButtonContainer = document.createElement('div');
    const addProject = document.createElement('button');
    addProject.innerHTML = 'New';
    addProject.addEventListener('click',function(e){
        e.preventDefault();
        console.log('push project to an array and dom')
        //push to an array
        //push to DOM
    });
    const cancelProject = document.createElement('button');
    cancelProject.innerHTML = 'Cancel';
    cancelProject.addEventListener('click',function(e){
        e.preventDefault();
        console.log('close new project window');
        projectForm.remove()
    });
    
    
    projectForm.appendChild(projectFormName);
    projectButtonContainer.appendChild(addProject);
    projectButtonContainer.appendChild(cancelProject);
    projectForm.appendChild(projectButtonContainer);
    
    projectsDiv.appendChild(projectForm);
        
    }