function checkAnswer() {
    var answer = prompt("자바스크립트는 대소문자를 구별할 수 있다.");
    if (answer == 'o') {
        alert('맞습니다.');
    } 
    
    else if (answer == 'x') {
        alert('틀렸습니다.');
    } 
    
    else {
        alert('잘못된 입력입니다.');
    }
}