export default function handleDetails(element) {
   

    const detailsWindow  = document.createElement('div');
    detailsWindow.classList.add('detailsWindow');
    detailsWindow.classList.add('show');
    detailsWindow.setAttribute('id','detailsWindow');

    const closeDetails = document.createElement('div');
    closeDetails.classList.add('closeDetails');
    closeDetails.innerHTML ='X';
    closeDetails.addEventListener('click', function(){
        detailsWindow.classList.remove('show')
    })

    const detailsHeader = document.createElement('div');
    detailsHeader.classList.add('detailsHeader');

    const title = document.createElement('h2');
    title.innerHTML = element.title;
    console.log(element.title)
    const description = document.createElement('h4');
    description.innerHTML = element.description;
    const dueDate = document.createElement('h4');
    dueDate.innerHTML = element.dueDate;
    const priority = document.createElement('h4');
    priority.innerHTML = element.priority;

    detailsHeader.appendChild(title)
    detailsHeader.appendChild(closeDetails)

    
    detailsWindow.appendChild(detailsHeader);
    detailsWindow.appendChild(description)
    detailsWindow.appendChild(dueDate)
    detailsWindow.appendChild(priority)

    document.body.appendChild(detailsWindow);
   
}