
let uid = document.querySelector('#uid');
let students = document.querySelector('.student');

console.log('----- uid -----');
console.log(uid);
console.log('------ students ------')
console.log(students);


let m_uid = document.querySelectorAll('#uid');
let m_students = document.querySelectorAll('.student');

console.log('------ m_uid ------')
console.log(m_uid);
console.log('------ m_students ------')
console.log(m_students);

/*抓取陣列的內容*/
m_uid.forEach(u => {
    console.log(u);
})

m_students.forEach(s => {
    console.log(s);
})

/*console出Input的內容*/
const login = function() {
    let acc = document.querySelector('#acc');
    let pwd = document.querySelector('#pwd');

    console.log(acc.value, pwd.value);
}

/*更改uid的內容*/
console.log(uid.innerHTML);

uid.innerHTML = 'New UID';


/*設定Class的CSS*/
uid.style.backgroundColor = 'red';

console.log(uid.classList);

// uid.classList.add('secondary');
// uid.classList.remove('main');



/*本段與下段是同樣功能，.classname是在看這一段有多少個class的名字*/
const myContains = function (dom, className) {
    let cname = dom.className;
    let cnameArr = cname.split(' ');

    cnameArr.forEach(n => {
        if (n == className) {
            console.log(`${className} in dom element. use function`);
        }
    })
}
/*本段與上段是同樣功能*/
if (uid.classList.contains('main')) {
    console.log('main in uid element. use contains');
}

myContains(uid, 'main');

