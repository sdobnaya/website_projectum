let credentials = {};

// Всякие функции
// Валидация почты
const validEmail = (id) => {
    const email = document.getElementById(id).value;

    if (email.includes('@') && email.includes('.')) {
        credentials.email = email;                                                                 
    } else {
        alert('Укажите корректный электронный адрес');
    }
};

// Валидация остальных данных
const validData = () => {
    const password = document.getElementById('pass').value;

    if (password.length >= 8){
        credentials.password = password;                                                           
    } else {
        alert('Пароль должен содержать больше 8 символов');
    }

    const name = document.getElementById('user').value;
    const nameArr = name.split(' ');

    if (nameArr[0].length >= 3 && nameArr[1].length >= 3) {                                    
        credentials.name = name;                                                                   
    } else {
        alert('Укажите реальное имя пользователя');
    }
};

// Выбор команды
const teamSetter = () => {
    const teamColl = document.querySelectorAll('input[name="teamSelect"]');
    teamColl.forEach((elem) => {
        if (elem.checked) {
            credentials.team = elem.id;
        }
    });
};

// Формируем локальное хранилище и проверяем, есть ли пользователь в базе
const formStorage = () => {
    if (localStorage.getItem("credentials")){
        const creden = localStorage.getItem("credentials");
        let serviceStorage = JSON.parse(creden);
        let localCheck = false;                   
        serviceStorage.forEach(element => {
            if(element.email === credentials.email){
               localCheck = true;
            } 
        });

        switch (localCheck){
            case true:
                alert('Такой пользователь уже зарегестрирован');
                window.location.href = "index.html";
                break;
            case false:
                serviceStorage.push(credentials);
                localStorage.setItem('credentials', JSON.stringify(serviceStorage));
                localStorage.setItem('login', JSON.stringify(credentials));
                window.location.href = "task-board.html";
                break;
        }

    } else {
        localStorage.setItem('login', JSON.stringify(credentials));
        let initialStorage = [];
        initialStorage.push(credentials);
        localStorage.setItem('credentials', JSON.stringify(initialStorage));
        window.location.href = "task-board.html";
    }
};


// Обработка логина
const login = () => {
    let CatchFlag = false;
    const creden = localStorage.getItem("credentials");
    let serviceStorage = JSON.parse(creden);   

    serviceStorage.forEach((element) => {
        if (element.email === credentials.email && element.password === document.getElementById('password').value){               
            CatchFlag = true;
            localStorage.setItem('login', JSON.stringify(element));
            window.location.href = "task-board.html";
        } 
    });

    if (CatchFlag === false) {
        alert('Неправильный логин или пароль');
        window.location.href = "index.html";
    };
};


// Страница регистрации --> Зарегестрироваться 
document.getElementById('form--reg--itself__id').addEventListener('submit', (event) => {
    event.preventDefault();
    validEmail('email');
    validData();
    if (credentials.email !== undefined && credentials.password !== undefined && credentials.name !== undefined) {
        document.getElementById('form--reg__id').style.display = 'none';
        document.getElementById('form--set__id').style.display = 'inline-block';
    } 
});

// Страница выбора команды
document.getElementById('form--set--itself__id').addEventListener('submit', (event) => {
    event.preventDefault();
    teamSetter();
    formStorage();
});

// Страница регистрации --> Войти в систему 
document.getElementById('additional__info__login-link').addEventListener('click', (event) => {
    event.preventDefault();
    document.getElementById('form--reg__id').style.display = 'none';
    document.getElementById('form--log__id').style.display = 'inline-block';
});

// Войти в систему --> Страница регистрации 
document.getElementById('additional__info__reg-link').addEventListener('click', (event) => {
    event.preventDefault();
    document.getElementById('form--reg__id').style.display = 'inline-block';
    document.getElementById('form--log__id').style.display = 'none';
});

// Войти в систему --> Зарегестрироваться 
document.getElementById('form--log--itself__id').addEventListener('submit', (event) => {
    event.preventDefault();
    validEmail('emaillog');
    if (credentials.email !== undefined){
        login();
    }
});







