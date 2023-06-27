let codigoCandidato;
let identificacionCandidato;
let nombreCandidato;
let apellidoCandidato;
let gradoCandidato;
const opcion = document.getElementById("gradoCandidato");
const registrarCandidato = document.getElementById("registrarCandidato");
const formulario = document.getElementById("formulario");

document.addEventListener("DOMContentLoaded", function () {
  //obtenemos los datos de los votantes
  codigoCandidato = document.getElementById("codigoCandidato");
  identificacionCandidato = document.getElementById("identificacionCandidato");
  nombreCandidato = document.getElementById("nombreCandidato");
  apellidoCandidato = document.getElementById("apellidoCandidato");
  gradoCandidato = document.getElementById("gradoCandidato");

  formulario.addEventListener("input", function () {
    if (
      codigoCandidato.value.trim() !== "" &&
      identificacionCandidato.value.trim() !== "" &&
      nombreCandidato.value.trim() !== "" &&
      apellidoCandidato.value.trim() !== ""
    ) {
      cambio();
    } else {
      registrarCandidato.disabled = true;
      registrarCandidato.classList.add("disable");
      registrarCandidato.classList.remove("activado");
    }
  });
});
function cambio() {
  var op = opcion.value;
  console.log("Seleci" + op);
  if (opcion.value.trim() === "Seleccionar") {
    registrarCandidato.disabled = true;
    registrarCandidato.classList.add("disable");
    registrarCandidato.classList.remove("activado");
  } else {
    registrarCandidato.disabled = false;
    registrarCandidato.classList.remove("disable");
    registrarCandidato.classList.add("activado");
  }
}
formulario.addEventListener("submit", function (event) {
  event.preventDefault(); // Evitar envío del formulario por defecto
  //obtenemos los datos de los votantes
  codigoCandidato = document.getElementById("codigoCandidato");
  identificacionCandidato = document.getElementById("identificacionCandidato");
  nombreCandidato = document.getElementById("nombreCandidato");
  apellidoCandidato = document.getElementById("apellidoCandidato");
  gradoCandidato = document.getElementById("gradoCandidato");
  // Expresión regular para validar solo letras
  const validadTexto = /^[A-Za-z]+$/;
  if (validadTexto.test(nombreCandidato.value) && validadTexto.test(apellidoCandidato.value)) {
    alert("Nombe esta bueno");
    window.insertarCandidato.insertarCandidatos();
    formulario.submit();
  } else {
    alert("Nombre y apellidos son solo texto");
  }
});
