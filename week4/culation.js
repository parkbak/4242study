var one = prompt("첫 번째 숫자를 입력하세요.");
var two = prompt("두 번째 숫자를 입력하세요.");

one = parseInt(one);
two = parseInt(two);

document.addEventListener("DOMContentLoaded", function() {
    document.querySelector('.plus').addEventListener('click', function() {
        var result = one+two;

        alert("덧셈 결과: " + result);
    });
});

document.addEventListener("DOMContentLoaded", function() {
    document.querySelector('.minus').addEventListener('click', function() {
        var result = one-two;

        alert("뺄셈 결과: " + result);
    });
});

document.addEventListener("DOMContentLoaded", function() {
    document.querySelector('.multiplication').addEventListener('click', function() {
        var result = one*two;

        alert("곱셈 결과: " + result);
    });
});

document.addEventListener("DOMContentLoaded", function() {
    document.querySelector('.division').addEventListener('click', function() {
        var result = one/two;

        alert("나눗셈 결과: " + result);
    });
});

document.addEventListener("DOMContentLoaded", function() {
    document.querySelector('.remainder').addEventListener('click', function() {
        var result = one%two;

        alert("나눗셈 나머지 결과: " + result);
    });
});