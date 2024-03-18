var person = { };
document.addEventListener("DOMContentLoaded", function btn () {
    document.querySelector('.p_name').addEventListener('click', function p_btn_name() {
        person.name = '박소정';
        document.querySelector('.name').style.display = 'block';
        console.log(person);
    });

    document.querySelector('.p_age').addEventListener('click', function p_btn_age() {
        person.age = '21살';
        document.querySelector('.age').style.display = 'block';
        console.log(person);
    });

    document.querySelector('.p_hobby').addEventListener('click', function p_btn_hobby() {
        person.hobby = '뜨개질';
        document.querySelector('.hobby').style.display = 'block';
        console.log(person);
    });

    document.querySelector('.p_color').addEventListener('click', function p_btn_color() {
        person.color = '파란색';
        document.querySelector('.color').style.display = 'block';
        console.log(person);
    });

    document.querySelector('.m_name').addEventListener('click', function m_btn_name() {
        
        document.querySelector('.name').style.display = 'none';
        delete person.name;
        console.log(person);
    });

    document.querySelector('.m_age').addEventListener('click', function m_btn_age() {
        document.querySelector('.age').style.display = 'none';
        delete person.age;
        console.log(person);
    });

    document.querySelector('.m_hobby').addEventListener('click', function m_btn_hobby() {
        document.querySelector('.hobby').style.display = 'none';
        delete person.hobby;
        console.log(person);
    });

    document.querySelector('.m_color').addEventListener('click', function m_btn_color() {
        document.querySelector('.color').style.display = 'none';
        delete person.color;
        console.log(person);
    });
});