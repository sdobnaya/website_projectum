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