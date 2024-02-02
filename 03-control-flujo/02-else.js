//Cuando la condicion de "IF" no se cumple, aparece "ELSE"

//EJEMPLO


let edad = 15;            

if (edad > 17) {
    console.log('Usuario mayor de edad');  
} else {
    console.log('Usuario menor de edad');
}

//EJEMPLO 2
/*
En este ejemplo vamos a crear una herramiento que determine si la edad del usuario
es apta para ingresar al cine..
*/


let edad2 = 15;            

if (edad2 > 17) {
    console.log('Usuario mayor de edad');  
}else if (edad2 > 13) {
    console.log('Usuario necesita estar acompañado de sus padres')
}else {
    console.log('Usuario no puede ingresar');
}