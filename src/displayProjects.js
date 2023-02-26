
export default function displayProjects(array) {
    console.log('DisplayProjects');
    
    const projectsContainer = document.getElementById('projectsContainer');
    console.log(projectsContainer)

    
    array.forEach((element, index) => {
        const projectDiv = document.createElement('div');
        projectDiv.classList.add('projectsContainer');
        projectDiv.setAttribute('id','projectDiv');

        const projectTitle = document.createElement('h2');
        projectTitle.classList.add('projectTitle');
        projectTitle.setAttribute('id','projectTitle');
        projectTitle.innerHTML = element.title;

        projectDiv.appendChild(projectTitle);
        projectsContainer.append(projectDiv);

        
    });
}



{/* <div class="projectsContainer" id="projectsContainer">
                    <div class="homeProject" id="homeProject">Home</div>
                    <div class="workoutProject">Workout</div>
                    <div class="workProject">Work</div>
                    <div>
                        <button class="addNewProject" id="addNewProject">+</button>
                    </div>
                    
                </div> */}



                