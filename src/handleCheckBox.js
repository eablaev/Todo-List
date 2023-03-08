export default function handleCheckBox(dataCellValue) {
    const dataCell = '[data-cell="'+dataCellValue+'"]'
console.log(dataCell);

const todoDiv = document.querySelector(dataCell)
console.log(todoDiv)
if(todoDiv.classList.contains('checked')){
    todoDiv.classList.remove('checked')
} else if(!todoDiv.classList.contains('checked')) {
    todoDiv.classList.add('checked')
}


  
    
}
