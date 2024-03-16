                            //DOMContentLoaded는 페이지가 시작될때.. 페이지가 뜨자마자 저 기능(function btn()을 실행시킨거임
document.addEventListener("DOMContentLoaded", function btn() {
    document.querySelector('.button1').addEventListener('click', function btn() {
        alert('맞습니다.');
    });
    document.querySelector('.button2').addEventListener('click', function btn() {
        alert('틀렸습니다.');
    });
});
// 함수를 사용할것이라면 함수의 이름을 다 다르게 해야함!! 아니면 이름을 빼셈 익명함수 ㄱㄱ