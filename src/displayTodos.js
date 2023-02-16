export default function display (array) {
    console.log('inside display func');
    const contentDiv = document.getElementById('contentDiv')
    contentDiv.textContent = '';
    array.forEach(element => {
        const todoDiv = document.createElement('div');
        
        const todoTitle = document.createElement('h3');
        todoTitle.innerHTML = element.title;

        todoDiv.appendChild(todoTitle);



        contentDiv.appendChild(todoDiv)

    });
}