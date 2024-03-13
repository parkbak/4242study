var value = document.getSelection

function select() {
    if (value === "케로로") {
        alert("중사입니다.");
    } else if (value === "도로로") {
        alert("병장입니다.");
    } else {
        alert("이등병입니다.");
    }
}