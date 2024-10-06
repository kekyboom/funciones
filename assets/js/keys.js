var colores = "";

function crearDiv(color, contenedor) {
    const cajaCreada = document.createElement("div"); 
    cajaCreada.className = "cajaCreada"; 
    cajaCreada.style.backgroundColor = color; 
    cajaCreada.style.width = "200px"; 
    cajaCreada.style.height = "200px"; 
    contenedor.appendChild(cajaCreada); 
}
document.addEventListener('keydown', function(event) {
    
    const key = document.getElementById("key");
    const contenedor = document.getElementById("contenedor");
    
    if (event.key === "a") {
        colores = "pink";
        key.style.backgroundColor = colores;
    } else if (event.key === "s") {
        colores = "orange";
        key.style.backgroundColor = colores;
    } else if (event.key === "d") {
        colores = "lightblue";
        key.style.backgroundColor = colores;
    }else if (event.key === "q") {
        crearDiv("purple", contenedor); 
        return;
    } else if (event.key === "w") {
        crearDiv("gray", contenedor); 
        return;
    } else if (event.key === "e") {
        crearDiv("brown", contenedor); 
        return;
    } else {
        return; 
    }
    
    });

    
    