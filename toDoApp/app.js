// SELECTOR
const toDoInput = document.querySelector(".toDoInput");
const toDoButton = document.querySelector(".toDoButton");
const toDoList = document.querySelector(".toDoList");
const filterOption = document.querySelector('.filterToDo');

// LISTENERS
document.addEventListener('DOMContentLoaded', getToDos);
toDoButton.addEventListener('click', addToDo);
toDoList.addEventListener('click', checkDel);
filterOption.addEventListener('input', filterToDo);


// FUNCTIONS
function addToDo(event) {
    event.preventDefault();
    /*console.log('Hello');
    this function will react to the click event
    and then create a toDo div */
    const toDoDiv = document.createElement('div');
    toDoDiv.classList.add('toDo');
    
    //then create Li
    const newToDo = document.createElement('li');
    newToDo.innerText = toDoInput.value;
    newToDo.classList.add('toDoItem');

    //Add toDo to localStorage
    saveLocalToDos(toDoInput.value);
    
    //add newToDo in toDoDiv
    toDoDiv.appendChild(newToDo);

    //check button
    const checkButton = document.createElement('button');
    checkButton.innerHTML = '<i class="fas fa-check"></i>';
    checkButton.classList.add('checkButton');
    //add it to the div
    toDoDiv.appendChild(checkButton);

    //del button
    const delButton = document.createElement('button');
    delButton.innerHTML = '<i class="fas fa-trash"></i>';
    delButton.classList.add('delButton');
        //add it to the div
    toDoDiv.appendChild(delButton);

    //add to the list
    toDoList.appendChild(toDoDiv);

    //reset the input
    toDoInput.value = '';
}

function checkDel(event) {
    const item = event.target;
    
    //delete
    if (item.classList[0] === 'delButton'){
        item.parentElement.classList.add('delAnim');
        removeLocalToDos(item.parentElement);
        item.parentElement.addEventListener('transitionend', function () {
            item.parentElement.remove();
        });
    }

    //check toDO
    if (item.classList[0] === 'checkButton'){
        item.parentElement.classList.toggle('completed');
    }
}

function filterToDo(e) {
    const toDos = toDoList.childNodes;
    toDos.forEach(function(toDo){
        switch(e.target.value){
            //show all items
            case 'all':
                toDo.style.display = 'flex';
                break;
            //show only completed items
            case 'done':
                if (toDo.classList.contains('completed')){
                    toDo.style.display = 'flex';
                } else {toDo.style.display = 'none';}
                break;
            //show non completed items
            case 'notDone':
                if (!toDo.classList.contains('completed')){
                    toDo.style.display = 'flex';
                } else {toDo.style.display = 'none';}
                break
        }
    })
}

function saveLocalToDos(toDo){
    //check if there is already existing items
    let toDos;
    if (localStorage.getItem('toDos') === null){
        toDos = [];
    } else {
        toDos = JSON.parse(localStorage.getItem('toDos'));
    }
    toDos.push(toDo);
    localStorage.setItem('toDos', JSON.stringify(toDos));
}

function getToDos(){
    let toDos;
    if (localStorage.getItem('toDos') === null){
        toDos = [];
    } else {
        toDos = JSON.parse(localStorage.getItem('toDos'));
    }

    toDos.forEach(function(toDo){
        //toDo Div
        const toDoDiv = document.createElement('div');
        toDoDiv.classList.add('toDo');
        
        //then create Li
        const newToDo = document.createElement('li');
        newToDo.innerText = toDo;
        newToDo.classList.add('toDoItem');
        
        //add newToDo in toDoDiv
        toDoDiv.appendChild(newToDo);

        //check button
        const checkButton = document.createElement('button');
        checkButton.innerHTML = '<i class="fas fa-check"></i>';
        checkButton.classList.add('checkButton');
        //add it to the div
        toDoDiv.appendChild(checkButton);

        //del button
        const delButton = document.createElement('button');
        delButton.innerHTML = '<i class="fas fa-trash"></i>';
        delButton.classList.add('delButton');
            //add it to the div
        toDoDiv.appendChild(delButton);

        //add to the list
        toDoList.appendChild(toDoDiv);
    })
}

function removeLocalToDos(toDo){
    let toDos;
    if (localStorage.getItem('toDos') === null){
        toDos = [];
    } else {
        toDos = JSON.parse(localStorage.getItem('toDos'));
    }
    const toDoIndex = toDo.children[0].innerText;
    toDos.splice(toDos.indexOf(toDoIndex), 1);
    localStorage.setItem('toDos', JSON.stringify(toDos));
}

//WIP event completed, saved state