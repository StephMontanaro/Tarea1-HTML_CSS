const botonInfo = document.getElementById("boton-info");
const infoAdicional = document.getElementById("extra-info");

botonInfo.addEventListener("click", function() {

  if (infoAdicional.style.display === "none") {
      infoAdicional.style.display = "block";
      botonInfo.textContent = "Mostrar menos";
  } else {
      infoAdicional.style.display = "none";
      botonInfo.textContent = "Mostrar más";
  }

});

const botonModal = document.getElementById("boton-modal");
const modal = document.getElementById("modal");
const cerrarModal = document.getElementById("cerrar-modal");
const cerrarModalAbajo = document.getElementById("cerrar-modal-abajo");

botonModal.addEventListener("click", function() {
    modal.style.display = "block";
});

cerrarModal.addEventListener("click", function() {
    modal.style.display = "none";
});

cerrarModalAbajo.addEventListener("click", function() {
    modal.style.display = "none";
});

const imagenMapa = document.getElementById("imagen-mapa");
const nombreMapa = document.getElementById("nombre-mapa");
const botonAnterior = document.getElementById("anterior");
const botonSiguiente = document.getElementById("siguiente");

const mapas = [
    {
        imagen: "img/day.webp",
        nombre: "Día"
    },
    {
        imagen: "img/night.webp",
        nombre: "Noche"
    },
    {
        imagen: "img/pool.webp",
        nombre: "Piscina"
    },
    {
        imagen: "img/fog.webp",
        nombre: "Niebla"
    },
    {
        imagen: "img/roof.webp",
        nombre: "Tejado"
    }
];

let mapaActual = 0;

botonAnterior.addEventListener("click", function() {

    mapaActual--;

    if (mapaActual < 0) {
        mapaActual = mapas.length - 1;
    }

    mostrarMapa();

});

botonSiguiente.addEventListener("click", function() {

    mapaActual++;

    if (mapaActual >= mapas.length) {
        mapaActual = 0;
    }

    mostrarMapa();

});

function mostrarMapa() {

    imagenMapa.src = mapas[mapaActual].imagen;
    imagenMapa.alt = "Mapa de " + mapas[mapaActual].nombre;
    nombreMapa.textContent = mapas[mapaActual].nombre;

}