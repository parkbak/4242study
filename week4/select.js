function select() {
    var selectbox = document.querySelector('.selectBasic');

                    //selectbox는 .selectbox를 의미
                    //.options는 셀렉트요소 옵션을 의미
                    //selectedIndex는 현재 선택된 옵션의 인덱스를 반환해줌
    var selectoption = selectbox.options[selectbox.selectedIndex].value;

    if (selectoption === "케로로") {
        alert("중사입니다.");
    } else if (selectoption === "도로로") {
        alert("병장입니다.");
    } else {
        alert("이등병입니다.");
    }
}