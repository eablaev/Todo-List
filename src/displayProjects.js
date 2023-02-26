
import addNewProjectForm from './addNewProjectForm';

export default function displayProjects(array) {
    console.log('DisplayProjects');
    
    
    const projectsContainer = document.getElementById('projectsContainer');
    projectsContainer.innerHTML = '';
  

    array.forEach((element, index) => {
        const projectDiv = document.createElement('div');
        projectDiv.classList.add('projectsDiv');
        projectDiv.setAttribute('id','projectDiv');

        const projectTitle = document.createElement('h2');
        projectTitle.classList.add('projectTitle');
        projectTitle.setAttribute('id','projectTitle');
        projectTitle.innerHTML = element.title;

        projectDiv.appendChild(projectTitle);
        projectsContainer.append(projectDiv);

        
    });

    const newProject = document.createElement('button');
    newProject.classList.add('newProject');
    newProject.setAttribute('id','newProject');
    newProject.innerHTML = 'New';

    projectsContainer.appendChild(newProject);
    newProject.addEventListener('click', () => {
        
        addNewProjectForm();
        
    })
}







                