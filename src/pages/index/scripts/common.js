// Ссылки
// (задачи --> календарь)
document.getElementById('tab__navigation__li-calendar-id').addEventListener('click', () => {
    window.location.href = "calendar.html";
    document.getElementById('tab__navigation__li-calendar-id').setAttribute('class', 'active');
    document.getElementById('tab__navigation__li-tasks-id').removeAttribute('class');
});

// (календарь --> задачи)
document.getElementById('tab__navigation__li-tasks-id').addEventListener('click', () => {
    window.location.href = "task-board.html";
    document.getElementById('tab__navigation__li-tasks-id').setAttribute('class', 'active');
    document.getElementById('tab__navigation__li-calendar-id').removeAttribute('class');
});

// (задачи --> канбан)
document.getElementById('tab__navigation__li-kanban-id').addEventListener('click', () => {
    window.location.href = "task-description.html";
    document.getElementById('tab__navigation__li-kanban-id').setAttribute('class', 'active');
    document.getElementById('tab__navigation__li-tasks-id').removeAttribute('class');
});

// (канбан --> задачи)
document.getElementById('tab__navigation__li-kanban-id').addEventListener('click', () => {
    window.location.href = "task-description.html";
    document.getElementById('tab__navigation__li-kanban-id').setAttribute('class', 'active');
    document.getElementById('tab__navigation__li-tasks-id').removeAttribute('class');
});

// Выбор существующего проекта
const chooseTask = () => {
    let taskList = document.querySelectorAll('.aprojects');
    for (let i = 0; i < taskList.length; i++) {
        taskList[i].addEventListener('click', () => {
            window.location.href = "task-description.html";
            let aprojectName = taskList[i].textContent;
            localStorage.setItem('project-header', `${aprojectName}`);
        });
    }; 
    document.getElementById('task--name__header').textContent = localStorage.getItem('project-header');    
};

chooseTask();

const chooseTeam = () => {
    let teamList = document.querySelectorAll('.team__description');
    for (let i = 0; i < teamList.length; i++) {
        teamList[i].addEventListener('click', () => {
            window.location.href = "team.html";

        });
    }; 
};

chooseTeam();