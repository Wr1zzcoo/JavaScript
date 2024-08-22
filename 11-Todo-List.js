const toDoList = [];
rendertodo();

function rendertodo(){
let toDoListHTML = '';
for ( i=0; i<toDoList.length; i++){
    const todo = toDoList[i];
    const html = `<p>${todo}</p>`;
    toDoListHTML += html;
}
console.log(toDoListHTML);
document.querySelector('.js-todolist').innerHTML = toDoListHTML;
}

function addtodo(){
    const inputElement = document.querySelector('.js-name-input');

    const name = inputElement.value;

    toDoList.push(name);

    console.log(toDoList);
    
    inputElement.value = '';

    rendertodo();
}