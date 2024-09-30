let numero = prompt("Introduce un número entero de varios dígitos:");
let suma = 0;

// Convertir el número a una cadena para iterar sobre sus dígitos
for (let i = 0; i < numero.length; i++) {
    suma += Number(numero[i]);
}

alert("La suma de los dígitos es: " + suma);
