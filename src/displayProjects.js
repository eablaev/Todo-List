
import addNewProjectForm from './addNewProjectForm';

export default function displayProjects(array) {
    
    //reset
    const projectsContainer = document.getElementById('projectsContainer');
    projectsContainer.innerHTML = '';
    const projectFormContainer = document.createElement('div');
    projectFormContainer.classList.add('projectFormContainer');
    projectFormContainer.id = 'projectFormContainer';
    projectFormContainer.innerHTML = '';

    


    array.forEach((element, index) => {
        const projectDiv = document.createElement('div');
        projectDiv.classList.add('projectDiv');
        projectDiv.setAttribute('id','projectDiv');

        const projectTitle = document.createElement('h2');
        projectTitle.classList.add('projectTitle');
        projectTitle.setAttribute('id','projectTitle');
        projectTitle.innerHTML = element.title;

        projectDiv.appendChild(projectTitle);
        projectsContainer.append(projectDiv);   
    });

    const newProject = document.createElement('button');
    newProject.classList.add('addNewProject');
    newProject.setAttribute('id','addNewProject');
    

    projectsContainer.appendChild(newProject);
    newProject.addEventListener('click', () => {  
        addNewProjectForm(); 
        console.log('inside display projectsAddNewProject')
    });
}







                