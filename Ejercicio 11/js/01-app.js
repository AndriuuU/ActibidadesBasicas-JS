
let numero;

while (true) {
    numero = prompt("Introduce un número entero (introduce un número negativo para detenerte):");
    numero = Number(numero);
    
    if (numero < 0) {
        break;
    }
}
