document.addEventListener('DOMContentLoaded', function() {
    // 获取按钮元素
    const storeBtn= document.getElementById('storeBtn');   
    // 添加点击事件监听
    storeBtn.addEventListener('click', function(){
        const a= document.getElementById('myInput').value;
        check(a);
    });
});
// 获取输入表达式并验证的函数
function check(a) {
    // 检查是否符合 "x+y" 的形式
    const pattern = /^(\d+)\+(\d+)$/;
    const match = a.match(pattern);
    if (!match) {
        alert("介系撒？");
        return;
    }
    const x = parseInt(match[1]);
    const y = parseInt(match[2]);
    // 检查条件：x>=10 || y>=10 || x+y>=20
    if (x >= 10 || y >= 10 || x + y >= 20) {
        alert("手脚并用也算不出来呀");
    } else {
        alert("我知道！是"+(x+y));
    }
}