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