
// const calc = function (n1, n2, n3) {
//     for (let i = 1; i <= n1; i++) {

//         for (let j = 1; j <= n2; j++) {

//             for (let k = 1; k <= n3; k++) {

//         console.log(`${i} x ${j} x ${k}= ${i * j * k}`);
//             }
//         }
//     }
// }






const makeThead = function (n1) {
    let thead = document.querySelector('#display-table thead');
    let content = '<tr><th></th>';

    for (let i = 1; i <= n1; i++) {
        content += `<th>${i}</th>`;
    }

    content += '</tr>';

    thead.innerHTML = content;
}

const calc = function (n1, n2) {
    let tbody = document.querySelector('#display-table tbody');
    let content = '';

    for (let i = 1; i <= n2; i++) {
        content += `<tr><td>${i}</td>`;

        for (let j = 1; j <= n1; j++) {
            content += `<td>${i * j}</td>`;
        }

        content += '</tr>';
    }

    tbody.innerHTML = content;
}




let makeBtn = document.querySelector('#make-btn');

makeBtn.addEventListener('click', () => {
    let num1 = document.querySelector('#num1');
    let num2 = document.querySelector('#num2');
    let num3 = document.querySelector('#num3');


    if (!num1.value) {
        danger.innerHTML = '注意！數字1尚未填寫';
        danger.classList.add('active');
    } else {
        danger.classList.remove('active');
        }

    if (!num2.value) {
        danger2.innerHTML = '注意！數字2尚未填寫';
        danger2.classList.add('active');
    } else {
        danger2.classList.remove('active');
        }
        
    // if (!num3.value) {
    //     danger3.innerHTML = '注意！數字3尚未填寫';
    //     danger3.classList.add('active');
    // } else {
    //     danger3.classList.remove('active');
    //     }
    
    let n1 = +num1.value;
    let n2 = +num2.value;

    makeThead(n1);
    calc(n1, n2);

    }




)