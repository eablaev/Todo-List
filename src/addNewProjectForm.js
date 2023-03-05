
export default function addNewProjectForm() {
    
   
    const projectFormContainer = document.getElementById('projectFormContainer');
    //projectFormContainer.innerHTML = '';

    
    

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

    });

    const cancelProject = document.createElement('button');
    cancelProject.classList.add('cancelProject')
    cancelProject.setAttribute('id','cancelProject');
    cancelProject.innerHTML = 'Cancel';
    cancelProject.addEventListener('click',function(e){
        e.preventDefault();
        projectForm.remove();
    });
    
    const projectButtonContainer = document.createElement('div');
    projectButtonContainer.classList.add('projectButtonContainer')
    projectForm.appendChild(projectFormName);
    projectButtonContainer.appendChild(addProject);
    projectButtonContainer.appendChild(cancelProject);
    projectForm.appendChild(projectButtonContainer);
    
    projectFormContainer.appendChild(projectForm);
  



        
    }