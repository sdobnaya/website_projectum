
//Задача 3

//Открыть детали задачи 
const taskMoreDetails = () => {
    let taskList = document.querySelectorAll('.task__block');
    for (let i = 0; i < taskList.length; i++) {
        taskList[i].addEventListener('click', () => {
            document.getElementById('task__desctiption__card-id').style.display = 'inline-block';
        });
    }
};

taskMoreDetails();


//Оставить комментарий и занести его в локальное хранилище 
document.getElementById('comment__input__form-id').addEventListener('submit', () => {
    event.preventDefault();
    
    leaveComment();
    addComment();

});

//Оставить комментарий
let comment;

const leaveComment = () => {
    comment = document.getElementById('comment__input-id').value; 

    //общий блок-обертка
    const newCommentWrap = document.createElement('div');
    newCommentWrap.setAttribute("class", "commet comment__block");
    document.getElementById('comment__history-id').appendChild(newCommentWrap);

    //блок-обертка картинки
    const newCommentIconWrap = document.createElement('div');
    newCommentIconWrap.setAttribute("class", "commet__icon");
    newCommentWrap.appendChild(newCommentIconWrap);

    //сама картинка
    const newCommentIcon = document.createElement('img');
    newCommentIcon.setAttribute("src", "img/userpic-big.jpg");
    newCommentIconWrap.appendChild(newCommentIcon);

    //блок-обертка текста
    const newCommentTextWrap = document.createElement('div');
    newCommentTextWrap.setAttribute("class", "commet__text__wrapp");
    newCommentWrap.appendChild(newCommentTextWrap);

    //Распаковываем локалСторидж для инфы о пользователе
    let currentLogin = localStorage.getItem("login");
    currentLogin = JSON.parse(currentLogin);

    //Имя
    const newCommentName = document.createElement('p');
    newCommentName.setAttribute("class", "commet__name");
    newCommentName.textContent = currentLogin.name + ',';
    newCommentTextWrap.appendChild(newCommentName);

    //Должность
    const newCommentTeam = document.createElement('span');
    newCommentTeam.setAttribute("class", "commet__role");
    newCommentTeam.textContent = ' ' + currentLogin.team;
    newCommentName.appendChild(newCommentTeam);

    //Текст
    const newCommentText = document.createElement('p');
    newCommentText.setAttribute("class", "commet__text");
    newCommentText.textContent = comment;
    newCommentTextWrap.appendChild(newCommentText);

    //Отчистили инпут
    document.getElementById('comment__input-id').value = '';

    //Дата и Время коммента
    const newCommentDate = document.createElement('p');
    newCommentDate.setAttribute("class", "commet__date");
    newCommentDate.textContent = 'Никогда-нибудь';
    newCommentTextWrap.appendChild(newCommentDate);
}; 

//Записать комментарий в локальное хранилище (в хранилище должно быть хотя бы одно задание)
const addComment = () => {
    let comments = [];
    let CatchFlag = false;
    
    let text = document.getElementById('task__desctiption__text-id').textContent;

    let allTasks = localStorage.getItem('tasks');
    allTasks = JSON.parse(allTasks);

    allTasks.forEach((element) => {
        if (element.description === text){
            CatchFlag = true;
            if (element.comments){
                element.comments.push(comment);
            } else {
                comments.push(comment);
                element.comments = comments;
            }
        }
    }); 

    if (CatchFlag === true){
        localStorage.setItem('tasks', JSON.stringify(allTasks));
    }

    if (CatchFlag === false){
        let newTask = {};
        newTask.title = document.getElementById('task__title-id').textContent; 
        newTask.description = text; 
        comments.push(comment);
        newTask.comments = comments;
        allTasks.push(newTask);
        localStorage.setItem('tasks', JSON.stringify(allTasks));
    }
}; 

