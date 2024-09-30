let contadorMayores = 0;

for (let i = 0; i < 5; i++) {
    let edad = prompt("Introduce tu edad:");
    edad = Number(edad);
    
    if (edad >= 18) {
        contadorMayores++;
    }
}

alert("Has introducido una edad mayor o igual a 18, " + contadorMayores + " veces.");
