const { ipcRenderer } = require("electron");
let codigoVotantes;
let identificacionVotantes;
let nombreVotantes;
let apellidoVotantes;
let gradoVotantes;
let btn_registrar_votantes;

var formularioRegistrarVotantes;
window.onload = function () {
  formularioRegistrarVotantes = document.getElementById("formularioRegistrarVotantes");

  codigoVotantes = document.getElementById("codigo-votantes");
  identificacionVotantes = document.getElementById("identificacion-votantes");
  nombreVotantes = document.getElementById("nombre-votantes");
  apellidoVotantes = document.getElementById("apellido-votantes");
  gradoVotantes = document.getElementById("grado-votantes");
  btn_registrar_votantes = document.getElementById("btn-registrar-votantes");
  btn_registrar_votantes.onclick = registrarVotantes;
};

function registrarVotantes() {
  const obj = {
    identificacionVotantes: identificacionVotantes.value,
    codigoVotantes: codigoVotantes.value,
    nombreVotantes: nombreVotantes.value,
    apellidoVotantes: apellidoVotantes.value,
    gradoVotantes: gradoVotantes.value,
  };
  console.log(obj);

  ipcRenderer.invoke("registrarVotante", obj);
}
