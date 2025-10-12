document.addEventListener('DOMContentLoaded', function() {
    // 获取按钮元素
    const storeBtn= document.getElementById('storeBtn');   
    // 添加点击事件监听
    storeBtn.addEventListener('click', function(){
        const a= document.getElementById('myInput').value;
        check(a);
    });
});
document.getElementById('storeBtn').onclick = function() {
    const value = document.getElementById('myInput').value;
    let arr = JSON.parse(localStorage.getItem('myValueArr') || '[]');
    arr.push(value);
    localStorage.setItem('myValueArr', JSON.stringify(arr));
    document.getElementById('result').textContent = '已保存: ' + value;
};
// 获取输入表达式并验证的函数
function check(a) {
    // 检查是否符合 "x+y" 的形式
    const pattern = /^(\d+)\+(\d+)$/;
    const match = a.match(pattern);
    if (!match) {
        document.getElementById('result').textContent="介系撒？";
    }
    const x = parseInt(match[1]);
    const y = parseInt(match[2]);
    // 检查条件
    if (x + y > 20|| x<0 || y<0) {
        document.getElementById('result').textContent="手脚并用也算不出来呀~";
    } else {
        document.getElementById('result').textContent ="我知道！是"+(x+y);
    }
}