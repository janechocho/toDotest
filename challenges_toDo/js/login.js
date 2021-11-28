const loginForm = document.querySelector("#login_frm");
const loginInput = loginForm.querySelector("input");
const greeting = document.querySelector("#greeting");
const toDoform = document.querySelector("#todo-form");
const todolist = document.querySelector("ul");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "userName";

const savedUserName = localStorage.getItem(USERNAME_KEY);


function logout() {
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", submitOnClick);
    toDoform.classList.add(HIDDEN_CLASSNAME);
    greeting.classList.add(HIDDEN_CLASSNAME);
    todolist.classList.add(HIDDEN_CLASSNAME);
}


function logoutClick() {
    localStorage.removeItem(USERNAME_KEY);
    logout();
}


//login Greeting Message
function paintGreetings(userName) {
    greeting.innerText = `Hello ! ${userName}`;
    const label = document.createElement("label");
    label.innerHTML = '[Logout]';
    label.setAttribute("style", "font-size:8px");
    greeting.appendChild(label);
    label.addEventListener("click", logoutClick);

    greeting.classList.remove(HIDDEN_CLASSNAME);
    toDoform.classList.remove(HIDDEN_CLASSNAME);
    todolist.classList.remove(HIDDEN_CLASSNAME);
}

//submit
function submitOnClick(event) {
    event.preventDefault();

    //login id -> localStorage Save
    const saveName = loginInput.value;
    loginInput.value = "";
    loginForm.classList.add(HIDDEN_CLASSNAME);
    localStorage.setItem(USERNAME_KEY, saveName);
    paintGreetings(saveName);
}

//localStorage
if (savedUserName === null) {
    //logout, 1. form classList remove 2. eventListener
    logout();
} else {
    //login
    paintGreetings(savedUserName);
}

