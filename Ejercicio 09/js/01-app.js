
let edad = prompt("Introduce tu edad:");

let nacionalidad = prompt("Introduce tu nacionalidad:");

edad = Number(edad);

if (edad >= 18) {
    if (nacionalidad.toLowerCase() === "española") {
        alert("Puedes votar");
    } else {
        alert("No puedes votar");
    }
} else {
    alert("No puedes votar");
}
