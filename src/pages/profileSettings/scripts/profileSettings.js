(function setUserData(){
    const userData = JSON.parse(localStorage.getItem('login'));
    const { name, team } = userData;

    document.getElementById('user-name__id').textContent = name;
    document.getElementById('user-role__id').textContent = team;
})();