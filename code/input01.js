document.addEventListener('DOMContentLoaded', function() {
    const storeBtn = document.getElementById('store');
    storeBtn.addEventListener('click', function() {
        const a = Number(document.getElementById('aa').value);
        const b = Number(document.getElementById('bb').value);
        const c = Number(document.getElementById('cc').value);
        const result = document.getElementById('roots');
        if (isNaN(a) || isNaN(b) || isNaN(c)) {
            result.textContent = "请输入有效数字！";
            return;
        }
        if (a === 0) {
            result.textContent = "a不能为0！";
            return;
        }
        var delta = b * b - 4 * a * c;
        if (delta > 0) {
            var root1 = (-b + Math.sqrt(delta)) / (2 * a);
            var root2 = (-b - Math.sqrt(delta)) / (2 * a);
            result.textContent = "锵锵锵锵~ "+"x=" + root1 + " 或 " + root2+"!";
        } else if (delta === 0) {
            result.textContent = "锵锵锵锵~ "+"x=" + (-b / (2 * a))+"!";
        } else {
            result.textContent = "无实数根哦~";
        }
    });
});