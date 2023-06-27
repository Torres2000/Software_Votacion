let codigoVotantes;
let identificacionVotantes;
let nombreVotantes;
let apellidoVotantes;
let gradoVotantes;
const opcion = document.getElementById("grado-votantes");
const btn_registrar_votantes = document.getElementById("btn-registrar-votantes");
const formulario = document.getElementById("formularioRegistrarVotantes");

document.addEventListener("DOMContentLoaded", function () {
  //obtenemos los datos de los votantes
  codigoVotantes = document.getElementById("codigo-votantes");
  identificacionVotantes = document.getElementById("identificacion-votantes");
  nombreVotantes = document.getElementById("nombre-votantes");
  apellidoVotantes = document.getElementById("apellido-votantes");
  gradoVotantes = document.getElementById("grado-votantes");

  formulario.addEventListener("input", function () {
    if (
      codigoVotantes.value.trim() !== "" &&
      identificacionVotantes.value.trim() !== "" &&
      nombreVotantes.value.trim() !== "" &&
      apellidoVotantes.value.trim() !== ""
    ) {
      cambio();
    } else {
      btn_registrar_votantes.disabled = true;
      btn_registrar_votantes.classList.add("disable");
      btn_registrar_votantes.classList.remove("activado");
    }
  });
});
function cambio() {
  var op = opcion.value;
  console.log("Seleci" + op);
  if (opcion.value.trim() === "Seleccionar") {
    btn_registrar_votantes.disabled = true;
    btn_registrar_votantes.classList.add("disable");
    btn_registrar_votantes.classList.remove("activado");
  } else {
    btn_registrar_votantes.disabled = false;
    btn_registrar_votantes.classList.remove("disable");
    btn_registrar_votantes.classList.add("activado");
  }
}
formulario.addEventListener("submit", function (event) {
  event.preventDefault(); // Evitar envío del formulario por defecto
  codigoVotantes = document.getElementById("codigo-votantes");
  identificacionVotantes = document.getElementById("identificacion-votantes");
  nombreVotantes = document.getElementById("nombre-votantes");
  apellidoVotantes = document.getElementById("apellido-votantes");
  gradoVotantes = document.getElementById("grado-votantes");
  // Expresión regular para validar solo letras
  const validadTexto = /^[A-Za-z]+$/;

  if (validadTexto.test(nombreVotantes.value) && validadTexto.test(apellidoVotantes.value)) {
    alert("Nombe esta bueno");
    window.insertarVotante.insertarVotantes();
    formulario.submit();
  } else {
    alert("Nombre y apellidos son solo texto");
  }
});
