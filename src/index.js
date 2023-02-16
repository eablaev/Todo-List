
import TodoItem from './todoMaker';
import display from './displayTodos';

const todoArr = [];

const form = document.getElementById('form');

form.addEventListener('submit', function(e){
    e.preventDefault();

    const title = document.getElementById('title').value
    
    const todo = new TodoItem(title);
    todoArr.push(todo);

    display(todoArr)

});

