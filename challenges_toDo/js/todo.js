const toDoForm = document.querySelector("#todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.querySelector("#todo-list");


let toDos = [];
const TODOS_KEY = "todos";
const SPAN_TOGGLE = "span-toggle";

function saveTodos() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteTodo(event) {
    const li = event.target.parentElement;
    li.remove();
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
    saveTodos();
}

function toDoDeco(event) {
    const span = event.target;
    span.classList.toggle(SPAN_TOGGLE);
}


function paintToDo(newTodo) {
    const li = document.createElement("li");
    li.id = newTodo.id
    const label = document.createElement("label");
    const span = document.createElement("span");

    label.innerText = '❌';
    span.innerText = newTodo.text;

    li.appendChild(label);
    li.appendChild(span);

    //todo 완료 
    span.addEventListener("click", toDoDeco);
    //todo 삭제
    label.addEventListener("click", deleteTodo);
    toDoList.appendChild(li);
}




function submitTodo(event) {
    event.preventDefault();

    const todoVal = toDoInput.value;
    toDoInput.value = "";
    const newTodoObj = {
        text: todoVal,
        id: Date.now()
    };
    toDos.push(newTodoObj);
    paintToDo(newTodoObj);
    saveTodos();

}

toDoForm.addEventListener("submit", submitTodo);

//local Storage 저장
const savedToDos = localStorage.getItem(TODOS_KEY);
if (savedToDos) {
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    parsedToDos.forEach(paintToDo);
}