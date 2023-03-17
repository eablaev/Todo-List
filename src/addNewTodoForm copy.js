export default function addNewTodoForm() {
 // Create the container element
const todoFormContainer = document.createElement('div');
const todoContainer = document.getElementById('todoContainer')
todoFormContainer.classList.add('todoFormContainer');
todoFormContainer.id = 'todoFormContainer';
todoFormContainer.innerHTML ='';

// Create the header element
const formHeader = document.createElement('div');
formHeader.classList.add('formHeader');

// Create the heading element
const heading = document.createElement('h2');
heading.textContent = 'Create New';

// Create the close button element
const closeButton = document.createElement('button');
closeButton.classList.add('closeForm');
closeButton.id = 'closeForm';
closeButton.textContent = 'X';
closeButton.addEventListener('click', function(e){
    todoFormContainer.remove();  
});

// Create the form element
const form = document.createElement('form');
form.action = '';
form.classList.add('todoForm');
form.id = 'todoForm';

// Create the list element
const formUl = document.createElement('ul');
formUl.classList.add('formUl');

// Create the title field element
const titleField = document.createElement('li');
titleField.classList.add('formLi');

const titleLabel = document.createElement('label');
titleLabel.setAttribute('for', 'title');

const titleInput = document.createElement('input');
titleInput.type = 'text';
titleInput.id = 'title';
titleInput.placeholder = 'Title';
titleInput.required = true;

// Create the description field element
const descriptionField = document.createElement('li');
descriptionField.classList.add('formLi');

const descriptionLabel = document.createElement('label');
descriptionLabel.setAttribute('for', 'description');

const descriptionTextarea = document.createElement('textarea');
descriptionTextarea.name = 'description';
descriptionTextarea.id = 'description';
descriptionTextarea.cols = 10;
descriptionTextarea.rows = 10;
descriptionTextarea.placeholder = 'Description';
descriptionTextarea.required = true;

// Create the due date field element
const dueDateField = document.createElement('li');
dueDateField.classList.add('formLi');

const dueDateLabel = document.createElement('label');
dueDateLabel.setAttribute('for', 'dueDateInput');
dueDateLabel.textContent = 'Due Date';

const dueDateInput = document.createElement('input');
dueDateInput.type = 'date';
dueDateInput.classList.add('dueDateInput');
dueDateInput.id = 'dueDateInput';
dueDateInput.required = true;

// Create the priority field element
const priorityField = document.createElement('li');
priorityField.classList.add('formLi', 'formLi_footer');

const priorityDiv = document.createElement('div');

const priorityLabel = document.createElement('label');
priorityLabel.setAttribute('for', 'priority');
priorityLabel.textContent = 'Priority';

const prioritySelect = document.createElement('select');
prioritySelect.name = 'priority';
prioritySelect.classList.add('priority');
prioritySelect.id = 'priority';
prioritySelect.required = true;

const lowOption = document.createElement('option');
lowOption.value = 'low';
lowOption.textContent = 'LOW';

const medOption = document.createElement('option');
medOption.value = 'med';
medOption.textContent = 'MED';

const highOption = document.createElement('option');
highOption.value = 'high';
highOption.textContent = 'HIGH';

// Create the submit button element
const submitButton = document.createElement('button');
submitButton.type = 'submit';
submitButton.id = 'submit';
submitButton.classList.add('submit');
submitButton.textContent = 'ADD';

//main form

todoFormContainer.appendChild(formHeader);
todoFormContainer.appendChild(form);

formHeader.appendChild(heading);
formHeader.appendChild(closeButton);

form.appendChild(formUl);

formUl.appendChild(titleField);
titleField.appendChild(titleLabel);
titleField.appendChild(titleInput);
titleLabel.appendChild(document.createTextNode(''));

formUl.appendChild(descriptionField);
descriptionField.appendChild(descriptionLabel);
descriptionField.appendChild(descriptionTextarea);
descriptionLabel.appendChild(document.createTextNode(''));


formUl.appendChild(dueDateField);
dueDateField.appendChild(dueDateLabel);
dueDateField.appendChild(dueDateInput);

formUl.appendChild(priorityField);
priorityField.appendChild(priorityDiv);
priorityDiv.appendChild(priorityLabel);
prioritySelect.appendChild(lowOption);
prioritySelect.appendChild(medOption);
prioritySelect.appendChild(highOption);
priorityDiv.appendChild(prioritySelect);

priorityField.appendChild(submitButton);

todoContainer.appendChild(todoFormContainer) 

}

