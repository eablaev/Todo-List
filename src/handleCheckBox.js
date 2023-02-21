export default function handleCheckBox() {
   
    const todoDiv = document.getElementById('todoDiv');
    const checkBox = document.getElementById('todoCheckMark');
    
    if(checkBox.checked) {
        todoDiv.classList.add('checked');
    } else if (!checkBox.checked) {
        todoDiv.classList.remove('checked');
    }
  
    
}
