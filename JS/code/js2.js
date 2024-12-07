

// function Somme(a,b){
// a = prompt('donner un nombre');
// b = prompt('donner un nombre');
// if ((a === 100) || (b === 100) || (a+b === 100)){
//     return true;
// } else {
//     return false;
// }
// }
// alert(Somme());

// const FiledName = (str) => str.slice(str.lastIndexOf('.'));
// console.log(FiledName('momo.js'));
let a = prompt('donner un chiffre');
let b = prompt('dooner un chiffre2');

function addNum(a,b){
    a = parseInt(a);
    b= parseInt(b)
    let x = a + b
    return x
}
alert(addNum(a,b));