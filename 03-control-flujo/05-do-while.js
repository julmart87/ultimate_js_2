let i = 0;
while (i < 3) {
    if (i % 2 == 0) {
        console.log('Numero par', i);
    }
    i++;
} 

// En "while" al estar al principio primero va evaluar la condicion

do {
    if (i % 2 == 0) {
        console.log('Numero par', i);
    }
    i++;
} while (i < 3); 

// En "do while" primero ejecuta el codigo y luego realiza la evaluacion..