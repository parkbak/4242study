var firstnumber = prompt("첫 번째 정수를 입력해주세요");
var secondnumber = prompt("두 번째 정수를 입력해주세요");

firstnumber = parseInt(firstnumber);
secondnumber = parseInt(secondnumber);

var plus = firstnumber + secondnumber;
var minus = firstnumber - secondnumber;

document.querySelector('.plus_box input').value = plus;
document.querySelector('.minus_box input').value = minus;