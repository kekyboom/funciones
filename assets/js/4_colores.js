const cajaUno = document.getElementById("caja1");
const cajaDos = document.getElementById("caja2");
const cajaTres = document.getElementById("caja3");
const cajaCuatro = document.getElementById("caja4");

document.addEventListener("click", (cambiarColor) => {
    if (cambiarColor.target === cajaUno || cambiarColor.target === cajaDos || cambiarColor.target === cajaTres || cambiarColor.target === cajaCuatro) {
        cambiarColor.target.style.backgroundColor = "black";
    }
});