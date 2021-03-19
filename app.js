
//-------------------Selectors---------------------
const taskInput = document.querySelector('.task-input')
const addTaskButton = document.querySelector('.task-button');
const taskList = document.querySelector('.task-list');
const removeAllButton = document.querySelector('.remove-all');
const readyAllButton = document.querySelector('.ready-all')



//-------------------Functions-------------------
function addTaskHandler(e){

    e.preventDefault();

    const newTask = document.createElement('li');
    const taskContentDiv = document.createElement('div');
    const taskStatusDiv = document.createElement('div');
    newTask.className = 'task-item';
    taskContentDiv.className = 'task-content';
    taskStatusDiv.className = 'task-status';


    const taskText = document.createElement('p');
    taskText.innerText = taskInput.value;
    taskContentDiv.appendChild(taskText);

    const readyBtn = document.createElement('button');
    readyBtn.className = 'ready-btn';
    readyBtn.innerText = 'Ready';
    taskContentDiv.appendChild(readyBtn);

    const deleteBtn = document.createElement('button');
    deleteBtn.className = 'delete-btn';
    deleteBtn.innerText = 'Delete';
    taskContentDiv.appendChild(deleteBtn);

    newTask.appendChild(taskContentDiv);
    newTask.appendChild(taskStatusDiv);
    taskList.appendChild(newTask);

    taskInput.value = '';
}

function taskClickHandler(e){
    const item = e.target;
    if (item.classList[0] === 'ready-btn'){
        const task = item.closest('li');
        task.children[1].classList.toggle('finished');
        if (task.children[1].classList.contains('finished')){
            item.innerText = "Unready";
        } else {
            item.innerText = "Ready";
        }
    } else if (item.classList[0] === 'delete-btn'){
        item.closest('li').remove();
    }
}

function removeAllHandler(){
    taskList.innerHTML = '';
}

function readyAllHandler(){
    for(item of taskList.children){
        const status = item.children[1];
        if (!status.classList.contains('finished')){
            status.classList.add('finished');
            item.querySelector('.ready-btn').innerText = 'Unready';
        }
    }
}
//-------------------Event listeners---------------------

addTaskButton.addEventListener('click', addTaskHandler);
taskList.addEventListener('click', taskClickHandler);
removeAllButton.addEventListener('click', removeAllHandler);
readyAllButton.addEventListener('click', readyAllHandler);