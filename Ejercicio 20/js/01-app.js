let texto = prompt("Introduce una cadena de texto:");
let textoSinEspacios = texto.replace(/\s+/g, '').toLowerCase(); // Eliminar espacios y convertir a minúsculas
let textoInvertido = textoSinEspacios.split('').reverse().join(''); // Invertir la cadena

if (textoSinEspacios === textoInvertido) {
    alert("La cadena es un palíndromo.");
} else {
    alert("La cadena NO es un palíndromo.");
}
