//oppg 1
/*
for (let i = 1;  i<51; i++) {
    console.log(i)
}
*/
 //oppg 2
 /*
 for (let i = 2; i < 51; i =i+2) {
    console.log(i)
 }
 */
//opg 3
/*
for (let i = 1 ; i <= 100; i++){
    if( i % 3 === 0 && i % 5 === 0){
        console.log(i);
    }
}
*/
//opg 4
/*
for (let i = 1 ; i <= 100; i++){
    if( i % 3 === 0 || i % 5 === 0){
        console.log(i);
    }
}
*/
//oppg 6

function tegnrektangel(bredde, høyde) {
    for (let i = 0; i < høyde; i++) {
        let rad = '';

        for (let j = 0; j < bredde; j++) {
            if (i === 0 || i === høyde - 1 || j === 0 || j === bredde - 1) {
                rad += '*';
            } else {
                rad += '&nbsp;&nbsp;';
            }
        }

        document.write(rad + '<br>');
    }
}

let bredde = parseInt(prompt('Hvor bred er rektangellet?'));
let høyde = parseInt(prompt('Hvor høy er rektangellet?'));
tegnrektangel(bredde, høyde)
