

export default function handleDelete(todoArr,e) {
    console.log('inside del')
  
   const index = e.target.parentNode.parentNode.attributes[2].value;
    console.log(index)
   //todoArr.splice(index,1);
 
   //data cell doesnt wotk with index
   //const todoContainer = document.getElementById('todoContainer')
   //console.log(todoContainer.childNodes)
   //console.log(e.target.parentNode.parentNode)


    
}