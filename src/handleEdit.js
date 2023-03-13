
import {format} from 'date-fns';

export default function handleEdit(element) {
    
    const editWindow = document.createElement('div');
    editWindow.classList.add('editWindow');
    editWindow.classList.add('show');
    
    editWindow.id = 'editWindow';
    

    const editTitle = document.createElement('h2');
    editTitle.classList.add = 'editTitle';
    editTitle.id = 'editTitle';
    editTitle.contentEditable = 'True';
    editTitle.innerHTML = element.title;

    const editDescription = document.createElement('h4');
    editDescription.classList.add = 'editDescription';
    editDescription.id = 'editDescription';
    editDescription.contentEditable = 'True';
    editDescription.innerHTML = element.description;

    const editDueDate = document.createElement('input');
    editDueDate.classList.add = 'editDueDate';
    editDueDate.type = 'date'
    editDueDate.id = 'editDueDate';
    
    // editDueDate.defaultValue = format(new Date(element.dueDate), 'yyyy-mm-dd')
    editDueDate.defaultValue = element.dueDate
    console.log(editDueDate.defaultValue)
   

    const editPriority = document.createElement('h4');
    editPriority.classList.add = 'editPriority';
    editPriority.id = 'editPriority';
    editPriority.innerHTML = element.priority;

    const closeEdit = document.createElement('div');
    closeEdit.classList.add('closeEdit');
    closeEdit.id = 'closeEdit';
    closeEdit.innerHTML ='X';

   

    const confirmEdit = document.createElement('div');
    confirmEdit.classList.add('confirmEdit');
    confirmEdit.id = 'confirmEdit';
    confirmEdit.innerHTML = 'Confirm';

   


   

    document.body.appendChild(editWindow);
    editWindow.appendChild(closeEdit);
    editWindow.appendChild(editTitle);
    editWindow.appendChild(editDescription);
    editWindow.appendChild(editDueDate);
    editWindow.appendChild(editPriority);
    editWindow.appendChild(confirmEdit);

    

}