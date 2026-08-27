console.log("JavaScript funcionando");

/**
 * Boton informacion adicional
 */
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

/**
 *  Modal hacia pagina oficial
 */
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

/**
 * Galeria de imagenes de las pantallas del juego
 */
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

/**
 *  Acordeon para las plantas y zombis
 */
const acordeones = document.querySelectorAll(".acordeon");

acordeones.forEach(function(acordeon) {

    acordeon.addEventListener("click", function() {

        const contenido = this.nextElementSibling;

        if (contenido.style.display === "block") {
            contenido.style.display = "none";
        } else {
            contenido.style.display = "block";
        }

    });

});

/**
 *  Reproductor de audio
 *  Referencia en el README
 */
const canciones = [
    { archivo: "Laura Shigihara - Crazy Dave's Greeting.mp3", nombre: "Crazy Dave's Greeting" },
    { archivo: "Laura Shigihara - Crazy Dave (Intro Theme).mp3", nombre: "Crazy Dave (Intro Theme)" },
    { archivo: "Laura Shigihara - Choose Your Seeds.mp3", nombre: "Choose Your Seeds" },
    { archivo: "Laura Shigihara - Zen Garden.mp3", nombre: "Zen Garden" },
    { archivo: "Laura Shigihara - Grasswalk.mp3", nombre: "Grasswalk" },
    { archivo: "Laura Shigihara - Loonboon.mp3", nombre: "Loonboon" },
    { archivo: "Laura Shigihara - Moongrains.mp3", nombre: "Moongrains" },
    { archivo: "Laura Shigihara - Graze the Roof.mp3", nombre: "Graze the Roof" },
    { archivo: "Laura Shigihara - Rigor Mormist.mp3", nombre: "Rigor Mormist" },
    { archivo: "Laura Shigihara - Watery Graves - Slow Version.mp3", nombre: "Watery Graves (Slow Version)" },
    { archivo: "Laura Shigihara - Watery Graves - Fast Version.mp3", nombre: "Watery Graves (Fast Version)" },
    { archivo: "Laura Shigihara - Brainiac Maniac.mp3", nombre: "Brainiac Maniac" },
    { archivo: "Laura Shigihara - Ultimate Battle.mp3", nombre: "Ultimate Battle" },
    { archivo: "Laura Shigihara - Cerebrawl.mp3", nombre: "Cerebrawl" },
    { archivo: "Laura Shigihara - Zombotany (Bonus Track).mp3", nombre: "Zombotany (Bonus Track)" },
    { archivo: "Laura Shigihara - Uraniwa Ni Zombies Ga!.mp3", nombre: "Uraniwa Ni Zombies Ga!" },
    { archivo: "Laura Shigihara - Zombies on Your Lawn.mp3", nombre: "Zombies on Your Lawn" }
];

// Elementos del html
const audio = document.getElementById("reproductor-audio");
const botonPlayPause = document.getElementById("play-pause");
const botonAnteriorCancion = document.getElementById("anterior-cancion");
const botonSiguienteCancion = document.getElementById("siguiente-cancion");
const barraProgreso = document.getElementById("barra-progreso");
const tiempoTexto = document.getElementById("tiempo");
const cancionActualTexto = document.getElementById("cancion-actual");
const controlVolumen = document.getElementById("volumen");
const listaCancionesEl = document.getElementById("lista-canciones");

// Indice de la cancion actual
let cancionActual = 0;

// Lista de canciones
function crearListaCanciones() {
    canciones.forEach(function(cancion, indice) {
        const item = document.createElement("li");
        item.textContent = cancion.nombre;
        item.dataset.indice = indice;

        item.addEventListener("click", function() {
            cancionActual = indice;
            cargarCancion(cancionActual);
            audio.play();
            actualizarIconoPlay();
        });

        listaCancionesEl.appendChild(item);
    });
}

// Cargar la cancion
function cargarCancion(indice) {

    audio.src = "soundtrack/" + encodeURIComponent(canciones[indice].archivo);
    cancionActualTexto.textContent = "Reproduciendo: " + canciones[indice].nombre;

    document.querySelectorAll("#lista-canciones li").forEach(function(li) {
        li.classList.remove("activa");
    });

    const itemActivo = document.querySelector('#lista-canciones li[data-indice="' + indice + '"]');
    if (itemActivo) {
        itemActivo.classList.add("activa");
    }
}

// Cambiar el signo de play y pause
function actualizarIconoPlay() {
    botonPlayPause.textContent = audio.paused ? "▶" : "⏸";
}

botonPlayPause.addEventListener("click", function() {

    if (audio.src === "") {
        cargarCancion(cancionActual);
    }

    if (audio.paused) {
        audio.play();
    } else {
        audio.pause();
    }

    actualizarIconoPlay();

});

// Boton para pasar de canción
botonSiguienteCancion.addEventListener("click", function() {

    cancionActual++;

    if (cancionActual >= canciones.length) {
        cancionActual = 0;
    }

    cargarCancion(cancionActual);
    audio.play();
    actualizarIconoPlay();

});

// Boton para retroceder cancion
botonAnteriorCancion.addEventListener("click", function() {

    cancionActual--;

    if (cancionActual < 0) {
        cancionActual = canciones.length - 1;
    }

    cargarCancion(cancionActual);
    audio.play();
    actualizarIconoPlay();

});

// Contralador de volumen
controlVolumen.addEventListener("input", function(e) {
    audio.volume = e.target.value;
});

function actualizarProgreso() {

    if (audio.duration > 0) {
        barraProgreso.value = (audio.currentTime / audio.duration) * 100;
        tiempoTexto.textContent = formatoTiempo(audio.currentTime) + " / " + formatoTiempo(audio.duration);
    }

    if (audio.ended) {
        botonSiguienteCancion.click();
    }

}

// Liena de reproducción de audio
barraProgreso.addEventListener("click", function(e) {
    const nuevaPosicion = (e.offsetX / barraProgreso.offsetWidth) * audio.duration;
    audio.currentTime = nuevaPosicion;
});

function formatoTiempo(segundos) {
    const minutos = Math.floor(segundos / 60);
    const segundosRestantes = Math.floor(segundos % 60);
    return minutos + ":" + (segundosRestantes < 10 ? "0" : "") + segundosRestantes;
}

audio.volume = controlVolumen.value;
crearListaCanciones();