let trashIcon = document.querySelectorAll('.fa');
let lists = document.querySelector(".list");
let error = document.querySelector('.error');
error.style.display = 'none'
trashIcon.forEach(setTrash);
function setTrash(trash) {
    trash.addEventListener('click', removeItem)
}
function removeItem(event) {
    event.target.parentElement.remove();
}
let textBox = document.querySelector("#todo");
textBox.addEventListener('keypress', function () {
    if (event.key === "Enter") {
        addTodo();
    }
});

function addTodo() {
    if (textBox.value) {
        error.style.display = 'none';
        let newLiItem = document.createElement("li");
        lists.append(newLiItem);
        let newSpan = document.createElement("span");
        newLiItem.append(newSpan);
        let newIItem = document.createElement('i');
        newLiItem.append(newIItem);
        newIItem.classList.add('fa');
        newIItem.classList.add('fa-trash');
        newLiItem.classList.add('list-item');
        newSpan.innerHTML = textBox.value;
        setTrash(newIItem);
    }
    else {
        error.style.display = 'block';
    }
}