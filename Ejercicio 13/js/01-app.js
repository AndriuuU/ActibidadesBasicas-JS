
let numero;

while (true) {
    numero = prompt("Introduce un número:");

    if (!isNaN(numero) && numero.trim() !== "") {
        break; 
    } else {
        alert("Error: Debes introducir un número válido.");
    }
}
