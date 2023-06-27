const { ipcRenderer, contextBridge } = require("electron");
let codigoVotantes;
let identificacionVotantes;
let nombreVotantes;
let apellidoVotantes;
let gradoVotantes;
let codigoCandidato;
let identificacionCandidato;
let nombreCandidato;
let apellidoCandidato;
let gradoCandidato;
let btn_registrar_votantes;
let mylist = document.getElementById("mylist");

var formularioRegistrarVotantes;
const paginaActual = window.location.pathname.split("/").pop();

console.log("Página actual:", paginaActual);

window.onload = function () {
  //id para mostrar la lista de votantes
  mylist = document.getElementById("mylist");

  //id del formulario para registrar los votantes
  formularioRegistrarVotantes = document.getElementById("formularioRegistrarVotantes");
  //obtenemos los datos de los votantes
  codigoVotantes = document.getElementById("codigo-votantes");
  identificacionVotantes = document.getElementById("identificacion-votantes");
  nombreVotantes = document.getElementById("nombre-votantes");
  apellidoVotantes = document.getElementById("apellido-votantes");
  gradoVotantes = document.getElementById("grado-votantes");

  //obtenemos los datos de los votantes
  codigoCandidato = document.getElementById("codigoCandidato");
  identificacionCandidato = document.getElementById("identificacionCandidato");
  nombreCandidato = document.getElementById("nombreCandidato");
  apellidoCandidato = document.getElementById("apellidoCandidato");
  gradoCandidato = document.getElementById("gradoCandidato");
};

// Definir la función en el contexto del proceso principal
async function mostrarVotantes() {
  console.log("Función llamada desde el proceso principal");
  await ipcRenderer.invoke("obtenerVotantes");
}
// Exponer la función al proceso de renderizado
contextBridge.exposeInMainWorld("listaVotantes", {
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

//Codigo nuevos para insertar votantes
contextBridge.exposeInMainWorld("insertarVotante", {
  insertarVotantes: insertarVotantes,
});

async function insertarVotantes() {
  console.log("Función llamada desde insertar votantes");
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

//Codigo nuevos para insertar candidato
contextBridge.exposeInMainWorld("insertarCandidato", {
  insertarCandidatos: insertarCandidatos,
});
async function insertarCandidatos() {
  console.log("Función llamada desde insertar candidato");
  const obj = {
    identificacionCandidato: identificacionCandidato.value,
    codigoCandidato: codigoCandidato.value,
    nombreCandidato: nombreCandidato.value,
    apellidoCandidato: apellidoCandidato.value,
    gradoCandidato: gradoCandidato.value,
  };
  console.log(obj);

  ipcRenderer.invoke("registrarCandidato", obj);
}
