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