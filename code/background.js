// 获取DOM元素
const toggleBtn = document.getElementById('themeToggle');
const body = document.body;
const starsContainer = document.getElementById('stars');

// 创建星星
function createStars() {
    for (let i = 0; i < 100; i++) {
        const star = document.createElement('div');
        star.classList.add('star');
        
        // 随机位置和大小
        const size = Math.random() * 3 + 1;
        star.style.width = `${size}px`;
        star.style.height = `${size}px`;
        star.style.left = `${Math.random() * 100}%`;
        star.style.top = `${Math.random() * 100}%`;
        
        // 随机动画延迟
        star.style.animationDelay = `${Math.random() * 4}s`;
        
        starsContainer.appendChild(star);
    }
}

// 切换主题函数
function toggleTheme() {
    if (body.classList.contains('dark-mode')) {
        body.classList.remove('dark-mode');
        toggleBtn.textContent = '切换到黑夜模式';
    } else {
        body.classList.add('dark-mode');
        toggleBtn.textContent = '切换到白天模式';
    }
}

// 初始化
createStars();
toggleBtn.addEventListener('click', toggleTheme);