function season() {
    let month = parseInt(document.querySelector('.SeasonNumber').value);

    // 작거나 같음 <=
    // 크거나 같음 >=
    // and && (양쪽 다 만족해야 전체가 참이 됨)
    // or || (양쪽 중 하나만 만족되어도 전체가 참이 됨)
    if (3 <= month && 5 >= month) {
        alert("봄입니다.")
        document.body.style.backgroundColor = '#fbe4eb';
    } else if (6 <= month && 8 >= month) {
        alert("여름입니다.")
        document.body.style.backgroundColor = '#dbead5';
    } else if (9 <= month && 11 >= month) {
        alert("가을입니다.")
        document.body.style.backgroundColor = '#ffead8';
    } else if (12 == month || 1 == month || 2 == month) {
        alert("겨울입니다.")
        document.body.style.backgroundColor = '#e6f4fa';
    } else {
        alert('올바른 월을 입력하세요. (1~12)')
    }
}