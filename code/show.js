window.onload = function() {
    const userArr = JSON.parse(localStorage.getItem('usernameArr') || '[]');
    const pwdArr = JSON.parse(localStorage.getItem('passwordArr') || '[]');
    const showResult = document.getElementById('showResult');
    if (userArr.length === 0 || pwdArr.length === 0) {
        showResult.textContent = '没有保存的用户名和密码';
    } else {
        let html = '';
        for (let i = 0; i < Math.max(userArr.length, pwdArr.length); i++) {
            html += `<div>用户名: ${userArr[i] || ''} | 密码: ${pwdArr[i] || ''}</div>`;
        }
        showResult.innerHTML = html;
    }
};