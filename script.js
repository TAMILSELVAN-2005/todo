let button=document.getElementById('add')
let text=document.getElementById('input')
let todo=document.getElementById('three')

let todos=[];
window.onload=()=>{
    todos=JSON.parse(localStorage.getItem('todos')) || []
    todos.forEach(todo=>add(todo))
}
button.addEventListener('click',()=>{
    todos.push(text.value)
    add(text.value);
    text.value=''
})

function add(value){
    let result=document.createElement('p');
    result.innerText=value;
    todo.appendChild(result)
    localStorage.setItem('todos',JSON.stringify(todos))
    result.addEventListener('click',()=>{
        result.style.textDecoration='line-through'
        remove(value)

    })
    result.addEventListener('dblclick',()=>{
        todo.removeChild(result)
        remove(value)
    })
}

function remove(value){
    let index=todos.indexOf(value)
    if(index>-1){
        todos.splice(index,1)
    }
    localStorage.setItem('todos',JSON.stringify(todos))
}