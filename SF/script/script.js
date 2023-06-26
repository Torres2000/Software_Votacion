const { ipcRenderer, contextBridge } = require("electron");
let codigoVotantes;
let identificacionVotantes;
let nombreVotantes;
let apellidoVotantes;
let gradoVotantes;
let btn_registrar_votantes;
let mylist = document.getElementById("mylist");

var formularioRegistrarVotantes;
const paginaActual = window.location.pathname.split("/").pop();

console.log("Página actual:", paginaActual);

window.onload = function () {
  mylist = document.getElementById("mylist");

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
// Definir la función en el contexto del proceso principal
async function mostrarVotantes() {
  console.log("Función llamada desde el proceso principal");
  await ipcRenderer.invoke("obtenerVotantes");
}

// Exponer la función al proceso de renderizado
contextBridge.exposeInMainWorld("electronAPI", {
  mostrarVotantes: mostrarVotantes,
});
ipcRenderer.on("listaVotantes", (event, results) => {
  let template = "";
  const list = results;
  list.forEach((element) => {
    template += `
         <tr>
            <td>${element.identificacion}</td>
            <td>${element.codestudiantil}</td>
            <td>${element.nombre}</td>
            <td>${element.apellido}</td>
            <td>${element.grado}</td>
         </tr>
      `;
  });
  mylist.innerHTML = template;
});
