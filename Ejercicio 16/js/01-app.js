// Comentando ejrecicio 13
// Declarar una variable para almacenar el número ingresado
let numero;

// Iniciar un bucle infinito que seguirá pidiendo un número
while (true) {
    // Pedir al usuario que introduzca un número
    numero = prompt("Introduce un número:");

    // Comprobar si la entrada es un número y no está vacía
    if (!isNaN(numero) && numero.trim() !== "") {
        // Si la entrada es válida, salir del bucle
        break; 
    } else {
        // Si la entrada no es un número válido, mostrar un mensaje de error
        alert("Error: Debes introducir un número válido.");
    }
}

// Aquí se puede usar el número válido ingresado
alert("Número ingresado: " + numero);
