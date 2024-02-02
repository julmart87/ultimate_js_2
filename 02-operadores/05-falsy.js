// SHORT-CIRCUIT

// FALSO (ESTOS SON VALORES QUE DAN FALSO) = fALSY
// false
// 0
// ''
// null
// undefined
// NaN

//EJEMPLO

let nombre = 'Pedro'
let username = nombre || 'Anonimo';
console.log(username);

//EJEMPLO 2

function fn1() {
    console.log('soy funcion 1');
    return true;
}

function fn2() {
    console.log('soy funcion 2');
    return true;
}

let x = fn1() && fn2();