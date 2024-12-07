const tasks =[]

const addTaskBtn = document.getElementById('add-task-btn');
addTaskBtn.addEventListener("click",()=>addTask());

function renderTasks(taskNum){
    const taskRow = document.createElement('div');
    const text = document.createElement('input');
    text.type = 'text';
    text.placeholder = 'Enter Task';
    text.addEventListener("change",()=>{
        tasks[taskNum]=text.value;
        console.log(tasks);
    })

    
    const deleteBtn = document.createElement('input');
    deleteBtn.type = "button";
    deleteBtn.value = "X";
    deleteBtn.addEventListener("click",()=>{

    })
    taskRow.appendChild(text);
    taskRow.appendChild(deleteBtn); 

    const taskContainer = document.getElementById('task-container');
    taskContainer.appendChild(taskRow);
}

function addTask(){
    const taskNum = tasks.length;
    tasks.push("")
    renderTasks(taskNum);
}

function deleteTask(taskNum){
    tasks.splice(taskNum,1);
}

// 