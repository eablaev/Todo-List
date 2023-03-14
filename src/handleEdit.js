
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
   

    
    

    const editPrioritySelect = document.createElement('select');
    editPrioritySelect.name = 'priority';
    editPrioritySelect.classList.add('editPrioritySelect');
    editPrioritySelect.id = 'editPrioritySelect'
   
   
    const lowOption = document.createElement('option');
    lowOption.value = 'low';
    lowOption.textContent = 'LOW';
    

    const medOption = document.createElement('option');
    medOption.value = 'med';
    medOption.textContent = 'MED';
   

    const highOption = document.createElement('option');
    highOption.value = 'high';
    highOption.textContent = 'HIGH';

    if(element.priority == 'low') {
        lowOption.setAttribute('selected','selected');
    } else if (element.priority == 'med') {
        medOption.setAttribute('selected','selected');
    } else if (element.priority == 'high') {
        highOption.setAttribute('selected','selected');
    }

    editPrioritySelect.appendChild(lowOption);
    editPrioritySelect.appendChild(medOption);
    editPrioritySelect.appendChild(highOption);

    const closeEdit = document.createElement('div');
    closeEdit.classList.add('closeEdit');
    closeEdit.id = 'closeEdit';
    closeEdit.innerHTML ='X';
    closeEdit.addEventListener('click', function(){
        editWindow.classList.remove('show');
        editWindow.remove();
        contentDiv.classList.remove('blur');
    });

   

    const confirmEdit = document.createElement('div');
    confirmEdit.classList.add('confirmEdit');
    confirmEdit.id = 'confirmEdit';
    confirmEdit.innerHTML = 'Confirm';

   


   

    document.body.appendChild(editWindow);
    editWindow.appendChild(closeEdit);
    editWindow.appendChild(editTitle);
    editWindow.appendChild(editDescription);
    editWindow.appendChild(editDueDate);
    editWindow.appendChild(editPrioritySelect);
    editWindow.appendChild(confirmEdit);

    

}