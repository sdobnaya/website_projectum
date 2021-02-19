

//Задача 4 
//выбор существующего проекта

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

//Задача 6
//Отобразить членов команды
const displayTeam = () => {
    const wrapper = document.getElementById('members__card__wrapper--id');
    wrapper.innerHTML = '';
    let localCounter = localStorage.getItem('teamMembers');
    let i = 0;
    while (i < localCounter){
        const newCard = document.createElement('div');
        newCard.setAttribute("class", "members__card flex");
        document.getElementById('members__card__wrapper--id').appendChild(newCard);

        const newImg = document.createElement('img');
        newImg.setAttribute("class", "members__icon");
        newImg.setAttribute("src", "img/userpic-big.jpg");
        newCard.appendChild(newImg);

        const innerDiv = document.createElement('div');
        newCard.appendChild(innerDiv);

        const newName = document.createElement('p');
        newName.setAttribute("class", "members__name");
        newName.textContent = 'Какое-то имя';
        innerDiv.appendChild(newName);

        const newRole = document.createElement('p');
        newRole.setAttribute("class", "members__role");
        newRole.textContent = 'Какая-то должность';
        innerDiv.appendChild(newRole);

        const innerTaskDiv = document.createElement('div');
        innerTaskDiv.setAttribute("class", "members__tasks");
        newCard.appendChild(innerTaskDiv);

        const newTaskCount = document.createElement('p');
        newTaskCount.setAttribute("class", "tasks__count");
        newTaskCount.textContent = '???';
        innerTaskDiv.appendChild(newTaskCount);

        const newTaskText = document.createElement('p');
        newTaskText.setAttribute("class", "plain__text");
        newTaskText.textContent = 'задач';
        innerTaskDiv.appendChild(newTaskText);

        i++;
    }
};

//Выбрать команду
const chooseTeam = () => {
    const teamList = document.querySelectorAll('.team__description');  //let

    for (let i = 0; i < teamList.length; i++) {
        teamList[i].addEventListener('click', () => {
            window.location.href = "team.html";
            let teamName = teamList[i].textContent;    //let
            teamName = teamName.trim();   //Вылезает пробелы кратные количеству итераций - не понимаю откуда
            localStorage.setItem('teamName', `${teamName}`);
        });
    }; 
    document.getElementById('task--name__header').textContent = localStorage.getItem('teamName');  

    let thisTeamName = localStorage.getItem('teamName');
    if (thisTeamName === 'Дизайнеры'){
        let thisTeam = document.querySelectorAll('.team__design');
        localStorage.setItem('teamMembers', JSON.stringify(thisTeam.length));
        document.getElementById('members__count--id').textContent = thisTeam.length;
        displayTeam();
    };
    if (thisTeamName === 'Бекенд'){
        let thisTeam = document.querySelectorAll('.team__backend');
        localStorage.setItem('teamMembers', JSON.stringify(thisTeam.length));
        document.getElementById('members__count--id').textContent = thisTeam.length;
        displayTeam();
    };
    if (thisTeamName === 'Фронтенд'){
        let thisTeam = document.querySelectorAll('.team__frontend');
        localStorage.setItem('teamMembers', JSON.stringify(thisTeam.length));
        document.getElementById('members__count--id').textContent = thisTeam.length;
        displayTeam();
    };
};

chooseTeam();







/*const chooseTeam = () => {
    const teamList = document.querySelectorAll('.team__description');  //let

    for (let i = 0; i < teamList.length; i++) {
        teamList[i].addEventListener('click', () => {
            window.location.href = "team.html";
            const teamName = teamList[i].textContent;    //let
            localStorage.setItem('teamName', `${teamName}`);
        });
    }; 
    document.getElementById('task--name__header').textContent = localStorage.getItem('teamName');  
    let a = localStorage.getItem('teamName') 
    if (localStorage.getItem('teamName') === 'Дизайнеры'){
        let thisTeam = document.querySelectorAll('.team__design');
        localStorage.setItem('teamMembers', JSON.stringify(thisTeam.length));
        //window.try = thisTeam;
        document.getElementById('members__count--id').textContent = thisTeam.length;
    };
};

chooseTeam();

*/
