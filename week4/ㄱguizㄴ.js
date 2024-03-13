const btn1 = document.querySelector('.button1');
const btn2 = document.querySelector('button2');
function click() {
    btn1.addEventListener("click", function() {
        alert("맞습니다.")
    });
    
    
    btn2.addEventListener("click", function() {
        alert("틀렸니다.")
    });
}