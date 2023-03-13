export default function handleDetails(element) {
   

    const detailsWindow  = document.createElement('div');
    detailsWindow.classList.add('detailsWindow');
    detailsWindow.id = 'detailsWindow';
    detailsWindow.classList.add('show');
    

    const closeDetails = document.createElement('div');
    closeDetails.classList.add('closeDetails');
    closeDetails.innerHTML ='X';
    closeDetails.addEventListener('click', function(){
        detailsWindow.classList.remove('show');
        contentDiv.classList.remove('blur')
    })

    const detailsHeader = document.createElement('div');
    detailsHeader.classList.add('detailsHeader');

    const title = document.createElement('h2');
    title.classList.add('detailsTitle');
    title.innerHTML = element.title;
   
    const description = document.createElement('h4');
    description.classList.add('detailsDescription');
    description.innerHTML = element.description;

    const dueDate = document.createElement('h4');
    dueDate.classList.add('detailsDueDate');
    dueDate.innerHTML = element.dueDate;

    const priority = document.createElement('h4');
    priority.classList.add('detailsPriority');
    priority.innerHTML = element.priority;
    if (priority.innerHTML == 'low'){
        priority.classList.add('low');
    } else if (priority.innerHTML == 'med') {
        priority.classList.add('med');
    } else if (priority.innerHTML = 'high') {
        priority.classList.add('high');
    }
    

    detailsHeader.appendChild(title)
    detailsHeader.appendChild(closeDetails)

    
    detailsWindow.appendChild(detailsHeader);
    detailsWindow.appendChild(description)
    detailsWindow.appendChild(dueDate)
    detailsWindow.appendChild(priority)

    document.body.appendChild(detailsWindow);
   
}