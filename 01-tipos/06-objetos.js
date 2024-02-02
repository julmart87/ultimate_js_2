 // Personaje de TV

 let nombre = "Tanjiro"
 let anime = "Demon slayer"
 let edad = 25

 let personaje = {          
     nombre: "Tanjiro",      // nombre(seria la "llave" o la "propiedad") y  tanjiro(el "valor") 
     anime: "Demon slayer",   
     edad: 25,
 };

 console.log(personaje);

 console.log(personaje.edad); // Aqui para conocer el valor de edad del personaje escribi "personaje +.+edad"

 console.log(personaje.nombre); //Aqui busco el valor de nombre del personaje

 console.log(personaje['anime']); // Esta es otra manera de buscar un valor dentro da la propiedad "personaje + ['"

 personaje.edad = 20;  // Esta es una forma de cambiar un valor.. Esta es la mas utilizada..

 personaje['edad'] = 30;  // Esta es la otra forma de cambiar un valor

 delete personaje.anime   // Con "delete" borramos en valor de la propiedad..
 console.log(personaje)
