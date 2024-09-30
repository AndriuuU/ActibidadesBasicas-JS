
let edad = prompt("Introduce tu edad:");
edad = Number(edad);

if (edad >= 18) {
    if (edad >= 18 && edad <= 25) {
        alert("Eres mayor de edad y estás en el rango de 18 a 25 años.");
    } else {
        alert("Eres mayor de edad.");
    }
} else {
    alert("Eres menor de edad.");
}
