const { ipcRenderer } = require("electron");
let codigoVotantes;
let identificacionVotantes;
let nombreVotantes;
let apellidoVotantes;
let gradoVotantes;
let btn_registrar_votantes;

window.onload = function () {
  codigoVotantes = document.getElementById("codigo");
  identificacionVotantes = document.getElementById("identificacion");
  nombreVotantes = document.getElementById("nombre");
  apellidoVotantes = document.getElementById("apellido");
  gradoVotantes = document.getElementById("grado");
  btn_registrar_votantes = document.getElementById("btn-registrar-votantes");

  btn_registrar_votantes.onclick = function () {
    const obj = {
      identificacionVotantes: identificacionVotantes.value,
      codigoVotantes: codigoVotantes.value,
      nombreVotantes: nombreVotantes.value,
      apellidoVotantes: apellidoVotantes.value,
      gradoVotantes: gradoVotantes.value,
    };

    ipcRenderer.invoke("insertarVotante", obj);
  };
};
