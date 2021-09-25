let ToDoCounter = 'ToDo1'; //used to create unique classes for each todo.
const inputField = document.getElementById('inputField'); //used to create listener for input field.
const ShowHideButton = document.getElementById('ShowHideButton'); //used to create listener for ShowHideButton
let AreToDosHidden = false; //used to determine if finished todos are hidden.

//main functions 

function CreateNewToDo(todo) {
    let ul;
    let li_newToDo;
    CreateNewElementForNewToDo();
    CreateFinishedButtonForNewToDo();
    CreateDeleteButtonForNewToDo();
    AttachNewToDoToUL();
    UpdateToDoCounter();
    inputField.value = null;
    
    function CreateFinishedButtonForNewToDo() {
        const NewButton = document.createElement('input');
        NewButton.type = 'checkbox';
        NewButton.className = ToDoCounter;
        NewButton.appendChild(document.createTextNode('Finished'))
        NewButton.addEventListener('click', (e) => MarkToDoComplete(e))
        li_newToDo.appendChild(NewButton);
    }
    
    function CreateDeleteButtonForNewToDo() {
        const NewButton = document.createElement('button');
        NewButton.type = 'button';
        NewButton.className = ToDoCounter;
        NewButton.appendChild(document.createTextNode('Delete'))
        NewButton.addEventListener('click', (e) => DeleteToDo(e))
        li_newToDo.appendChild(NewButton);    
    }
    
    function CreateNewElementForNewToDo() {
        li_newToDo = document.createElement('li');
        li_newToDo.appendChild(document.createTextNode(todo));
        li_newToDo.className = ToDoCounter
    }
    
    function AttachNewToDoToUL() {
        ul = document.querySelector('#CurrentToDos');
        ul.insertBefore(li_newToDo, ul.childNodes[0]);
    }
}    

function MarkToDoComplete(e) {
    className = 'li' + '.' + e.target.className;
    Todo = document.querySelectorAll(className);
    Todo = Todo[0];
    Todo.style.textDecoration !== 'line-through' ? Todo.style.textDecoration = 'line-through' : Todo.style.textDecoration = 'none';
}

function DeleteToDo(e) {
    className = '.' + e.target.className;
    Todo = document.querySelectorAll(className);
    console.log(Todo);
    Todo.forEach(element => element.remove());
}

function ShowOrHideFinishedToDos() {
    AllToDos = document.querySelectorAll('.todo li')
    AllToDos.forEach(element => {
        if (AreToDosHidden == true) {
            if (element.style.textDecoration === 'line-through') {
                element.style.display = 'block';
            }
        } else { 
            if (element.style.textDecoration === 'line-through') {
                element.style.display = 'none';
                
            }
        }    
    })
    AreToDosHidden === false ? AreToDosHidden = true : AreToDosHidden = false;    
}

function UpdateToDoCounter() {
    ToDoCount = Number(ToDoCounter.slice(-1)) + 1;
    ToDoCounter = 'ToDo' + ToDoCount;
}

//listeners

inputField.addEventListener("keydown", (e) => 
{if (e.key == "Enter") if (inputField.value !== '') {CreateNewToDo(inputField.value)}
});

ShowHideButton.addEventListener('click', ShowOrHideFinishedToDos)




