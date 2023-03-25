let list = document.querySelector('.list');
let error = document.querySelector('.error');
let todoInput = document.getElementById('todo');
error.style.display = 'none';
let html;
document.body.addEventListener('keydown', (event)=>{
    if(event.keyCode === 13) {
        addNewTodo();
    }
});
list.addEventListener('click', deleteTodoHandler);

function deleteTodoHandler(event) {
    if(event.target.tagName === 'I') {
        event.target.parentElement.remove();
    }
}

function addNewTodo() {
    if (!todoInput.value) {
        error.style.display = 'block';
    }
    else {
        error.style.display = 'none';
        html = '<li class="list-item">';
        html += '<span>' + todoInput.value + '</span>';
        html += '<i class="fa fa-trash"></i>';
        html += '</li>'
        list.insertAdjacentHTML('beforeend',html);
        todoInput.value = "";
    }
}