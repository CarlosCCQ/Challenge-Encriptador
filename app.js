const textoIngresado = document.getElementById("seccionEncriptadorTextarea");
const botonEncriptar = document.getElementById("botonEncriptar");
const botonDesencriptar = document.getElementById("botonDesencriptar");
const textoRespuesta = document.getElementById("textoSuperior");
const textoEliminado = document.getElementById("textoInferior");
const botonCopiar = document.getElementById("botonCopiar");
const imagenMuñeco = document.getElementById("imagenMuñeco");
const mensajeFinal = document.getElementById("mensajeFinal");
const textoMuñeco = document.getElementById("textoMuñeco");

// La letra "e" es convertida para "enter"
// La letra "i" es convertida para "imes"
// La letra "a" es convertida para "ai"
// La letra "o" es convertida para "ober"
// La letra "u" es convertida para "ufat"

// Función para encriptar el texto
function encriptarTexto(texto) {
    return texto
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");
}

// Función para desencriptar el texto
function desencriptarTexto(texto) {
    return texto
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");
}

botonEncriptar.addEventListener("click", () => {
    const texto = textoIngresado.value;
    const textoEncriptado = encriptarTexto(texto);
    textoRespuesta.textContent = textoEncriptado;
    botonCopiar.classList.remove("oculto");
    textoEliminado.style.display = "none";
    imagenMuñeco.style.display = "none";
    mensajeFinal.classList.add("ajustar__mensaje");
    textoRespuesta.classList.add("texto__muñeco__respuesta");
    textoMuñeco.classList.add("texto__muñeco__respuesta");
});

botonDesencriptar.addEventListener("click", () => {
    const texto = textoIngresado.value;
    const textoDesencriptado = desencriptarTexto(texto);
    textoRespuesta.textContent = textoDesencriptado;
    botonCopiar.classList.remove("oculto");
    textoEliminado.style.display = "none";
    imagenMuñeco.style.display = "none";
    mensajeFinal.classList.add("ajustar__mensaje");
    textoRespuesta.classList.add("texto__muñeco__respuesta");
    textoMuñeco.classList.add("texto__muñeco__respuesta");
});

botonCopiar.addEventListener("click", () => {
    const textoACopiar = textoRespuesta.textContent;
    navigator.clipboard.writeText(textoACopiar).then(() => {
        alert("Texto copiado al portapapeles");
    }).catch(err => {
        console.error("Error al copiar el texto: ", err);
    });
});