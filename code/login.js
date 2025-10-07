document.getElementById('loginBtn').onclick = function() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    // 保存用户名
    let userArr = JSON.parse(localStorage.getItem('usernameArr') || '[]');
    userArr.push(username);
    localStorage.setItem('usernameArr', JSON.stringify(userArr));
    // 保存密码
    let pwdArr = JSON.parse(localStorage.getItem('passwordArr') || '[]');
    pwdArr.push(password);
    localStorage.setItem('passwordArr', JSON.stringify(pwdArr));
};