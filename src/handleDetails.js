export default function handleDetails(element) {
    console.log("handle details");
    console.log(element)

    

    const detailsWindow  = document.createElement('div');
    detailsWindow.classList.add('detailsWindow');
    detailsWindow.setAttribute('id','detailsWindow');

    const title = document.createElement('h2');
    title.innerHTML = element.title;
    console.log(element.title)
    const description = document.createElement('h4');
    description.innerHTML = element.description;
    const dueDate = document.createElement('h4');
    dueDate.innerHTML = element.dueDate;
    const priority = document.createElement('h4');
    priority.innerHTML = element.priority;


    detailsWindow.appendChild(title)
    detailsWindow.appendChild(description)
    detailsWindow.appendChild(dueDate)
    detailsWindow.appendChild(priority)

    document.body.appendChild(detailsWindow);
   
}