document.addEventListener("DOMContentLoaded", function () {
    document.querySelector('.button1').addEventListener('click', function btn1(){
        let answer1 = prompt("그렇다면 자바스크립트는 어떤 ***** ** **** 언어인가?");

        if(answer1 === "프로토타입 기반 객체지향"){
            alert('맞습니다.')
        } else {
            alert('틀렸습니다.')
        }
    });

    document.querySelector('.button2').addEventListener('click', function btn2(){
        let answer2 = prompt("그렇다면 프로퍼티는 어떤 *과 *으로 구성되는가?");

        if(answer2 === "키와 값"){
            alert('맞습니다.')
        } else {
            alert('틀렸습니다.')
        }
    });

    document.querySelector('.button3').addEventListener('click', function btn3(){
        let answer3 = prompt("이 말은 곧 **** 값으로 사용 가능하다는 말이다.");

        if(answer3 === "프로퍼티"){
            alert('맞습니다.')
        } else {
            alert('틀렸습니다.')
        }
    });
});