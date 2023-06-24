let codigoVotantes;
let identificacionVotantes;
let nombreVotantes;
let apellidoVotantes;
let gradoVotantes;
const opcion = document.getElementById("grado-votantes");
const btn_registrar_votantes = document.getElementById("btn-registrar-votantes");

//var formulario = document.getElementById("formularioRegistrarVotantes");
document.addEventListener("DOMContentLoaded", function () {
  const formulario = document.getElementById("formularioRegistrarVotantes");

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
      identificacionVotantes.value.trim() !== "" &&
      apellidoVotantes.value.trim() !== ""
    ) {
      cambio();
      /*
      btn_registrar_votantes.disabled = false;
      btn_registrar_votantes.classList.remove("disable");
      btn_registrar_votantes.classList.add("activado");
      */
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

/*
const optionSelect = document.getElementById("optionSelect");

optionSelect.addEventListener("change", function () {
  console.log("Opción seleccionada:", optionSelect.value);
});


formulario.addEventListener("submit", function (event) {
  event.preventDefault(); // Evitar envío del formulario por defecto

  

  //Validar si los campos contienen datos

  if () {
    alert("Por favor, Seleccione un grado");
    return false;
  } else {
    // Si los campos son válidos, enviar el formulario
    formulario.submit();
  }
});
*/
