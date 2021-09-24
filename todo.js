let ToDoCounter = 1;
const inputField = document.getElementById('inputField');


//main functions 

function CreateNewToDo(todo) {
    let ul;
    let li_newToDo;
    CreateNewElementForNewToDo();
    CreateFinishedButtonForNewToDo();
    CreateDeleteButtonForNewToDo();
    AttachNewToDoToUL();
    
    ToDoCounter++;
    inputField.value = null;

    function CreateFinishedButtonForNewToDo() {
        const NewButton = document.createElement('button');
        NewButton.type = 'submit';
        NewButton.id = ToDoCounter;
        NewButton.appendChild(document.createTextNode('Finished'))
        li_newToDo.appendChild(NewButton);
    }
    
    function CreateDeleteButtonForNewToDo() {
        const NewButton = document.createElement('button');
        NewButton.type = 'submit';
        NewButton.id = ToDoCounter;
        NewButton.onclick = DeleteToDo;
        NewButton.appendChild(document.createTextNode('Delete'))
        li_newToDo.appendChild(NewButton);
    }

    function CreateNewElementForNewToDo() {
        li_newToDo = document.createElement('li');
        li_newToDo.appendChild(document.createTextNode(todo));
        li_newToDo.id = ToDoCounter
    }
    
    function AttachNewToDoToUL() {
        ul = document.querySelector('#CurrentToDos');
        ul.insertBefore(li_newToDo, ul.childNodes[0]);

    }
}

function MarkToDoComplete(id) {
    let myElement = document.selectElementById(id)
    ;
}

function DeleteToDo() {
    console.log('does this work?')    
}

function HideFinishedToDo() {
    null //BONUS -> hide all to dos that are done
}

function ShowFinishedToDo() {
    null //BONUS -> show all to dos that are done
}

//listeners

inputField.addEventListener("keydown", (e) => 
    {if (e.key == "Enter") CreateNewToDo(inputField.value);
});

