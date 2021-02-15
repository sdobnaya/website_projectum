//Задача 2

//ссылки
//Настройка ссылки (задачи --> календарь)
document.getElementById('tab__navigation__li-calendar-id').addEventListener('click', () => {
    event.preventDefault();
    window.location.href = "calendar.html";
    document.getElementById('tab__navigation__li-calendar-id').setAttribute('class', 'active');
    document.getElementById('tab__navigation__li-tasks-id').removeAttribute('class');
});

//Настройка ссылки (календарь --> задачи)
document.getElementById('tab__navigation__li-tasks-id').addEventListener('click', () => {
    event.preventDefault();
    window.location.href = "task-board.html";
    document.getElementById('tab__navigation__li-tasks-id').setAttribute('class', 'active');
    document.getElementById('tab__navigation__li-calendar-id').removeAttribute('class');
});

//Настройка ссылки (задачи --> канбан)
document.getElementById('tab__navigation__li-kanban-id').addEventListener('click', () => {
    event.preventDefault();
    window.location.href = "task-description.html";
    document.getElementById('tab__navigation__li-kanban-id').setAttribute('class', 'active');
    document.getElementById('tab__navigation__li-tasks-id').removeAttribute('class');
});

//Настройка ссылки (канбан --> задачи)
document.getElementById('tab__navigation__li-kanban-id').addEventListener('click', () => {
    event.preventDefault();
    window.location.href = "task-description.html";
    document.getElementById('tab__navigation__li-kanban-id').setAttribute('class', 'active');
    document.getElementById('tab__navigation__li-tasks-id').removeAttribute('class');
});

//добавление задачи
let catData; 

//открыть форму добавления задачи
document.getElementById('item__btn__backlog').addEventListener('click', () => {
    catData ='backlog';
    openTaskEditor();
});

document.getElementById('item__btn__todo').addEventListener('click', () => {
    catData ='todo';
    openTaskEditor();
});

document.getElementById('item__btn__done').addEventListener('click', () => {
    catData ='done';
    openTaskEditor();
});

const openTaskEditor = () => {
    document.getElementById('task__column-backlog').style.display = 'none';
    document.getElementById('task__column-todo').style.display = 'none';
    document.getElementById('task__column-done').style.display = 'none';

    document.getElementById('form--task').style.display = 'inline-block';
};

//обработать форму добавления задачи и вывести задачу
document.getElementById('form--task--itself').addEventListener('submit', () => {
    event.preventDefault;
    addTask();

    document.getElementById('form--task').style.display = 'none';

    document.getElementById('task__column-backlog').style.display = 'inline-block';
    document.getElementById('task__column-todo').style.display = 'inline-block';
    document.getElementById('task__column-done').style.display = 'inline-block';

    displayTask();
});

let task = {};

const addTask = () => {
    let tasks = [];


    task.title = document.getElementById('taskTitle').value;
    task.deadline = document.getElementById('deadline').value;    
    task.description = document.getElementById('taskDescription').value;
    task.status = catData;

    if (localStorage.getItem('tasks')) {
        let currentTasks = localStorage.getItem('tasks');
        currentTasks = JSON.parse(currentTasks);
        currentTasks.push(task);
        localStorage.setItem('tasks', JSON.stringify(currentTasks));
    } else {
        tasks.push(task);
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }
};

const displayTask = () => {
    const newTaskBody = document.createElement('a');
    newTaskBody.setAttribute("href", "#");
    newTaskBody.setAttribute("class", "task task__block");

    if (catData === 'done') {
        document.getElementById('task__column-done').appendChild(newTaskBody);
    } else if (catData === 'todo') {
        document.getElementById('task__column-todo').appendChild(newTaskBody);
    } else {
        document.getElementById('task__column-backlog').appendChild(newTaskBody);
    }

    const newTaskText = document.createElement('p');
    newTaskText.setAttribute("class", "task__description");
    newTaskText.textContent = task.description;
    newTaskBody.appendChild(newTaskText);

    const newTaskInfo = document.createElement('div');
    newTaskInfo.setAttribute("class", "flex");
    newTaskBody.appendChild(newTaskInfo);

    const newTaskPhoto = document.createElement('img');
    newTaskPhoto.setAttribute("src", "img/userpic.jpg");
    newTaskPhoto.setAttribute("class", "task__executor");
    newTaskInfo.appendChild(newTaskPhoto);

    let currentLogin = localStorage.getItem('login');
    currentLogin = JSON.parse(currentLogin);

    const newTaskTag = document.createElement('p');
    newTaskTag.setAttribute("class", `task__label ${currentLogin.team}`);
    newTaskTag.textContent = currentLogin.team;
    newTaskInfo.appendChild(newTaskTag); 
};

