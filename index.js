const { app, BrowserWindow, ipcMain, Notification } = require("electron");
const path = require("path");
let db = require("./database");
const { Console } = require("console");

let win;
let winlogin;
function createWindow() {
  win = new BrowserWindow({
    webPreferences: {
      preload: path.join(__dirname, "./SF/script/preload.js"),
    },
  });
  win.maximize();
  win.loadFile("./SF/inicio.html");
}

function loginWindow() {
  winlogin = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, "./SF/script/scrip-login.js"),
    },
  });

  winlogin.loadFile("./SF/login.html");
}

app.whenReady().then(loginWindow);

app.on("window-all-closed", () => {
  app.quit();
});

ipcMain.handle("login", (event, obj) => {
  validatelogin(obj);
});
function validatelogin(obj) {
  const { identificacion, password } = obj;
  const sql = "SELECT * FROM administradores WHERE identificacion=? AND contraseña=?";
  db.query(sql, [identificacion, password], (error, results, fields) => {
    if (error) {
      console.log(error);
    }

    if (results.length > 0) {
      createWindow();
      new Notification({
        title: "login",
        body: "Iniciaste sesión correctamente",
      }).show();
      win.show();
      winlogin.close();
    } else {
      new Notification({
        title: "login",
        body: "email o password equivocado",
      }).show();
    }
  });
}
ipcMain.handle("insertarVotante", (event, obj) => {
  validateinsertarVotante(obj);
});
function validateinsertarVotante(obj) {
  const { identificacionVotantes, codigoVotantes, nombreVotantes, apellidoVotantes, gradoVotantes } = obj;
  const sql = "INSERT INTO votantes (identificacion, codestudiantil, nombre, apellido, grado) VALUES (?,?,?,?,?)";
  const value = [identificacionVotantes, codigoVotantes, nombreVotantes, apellidoVotantes, gradoVotantes];
  db.query(sql, value, (error, results) => {
    if (error) {
      console.log(error);
    }

    if (results.length > 0) {
      new Notification({
        title: "Error",
        body: "Error al Registrar",
      }).show();
    } else {
      new Notification({
        title: "Ingresar Votante",
        body: "Votante Registrado Correctamente",
      }).show();
    }
  });
}
//Obtengo los datos para registrar los votantes
ipcMain.handle("registrarVotante", (event, obj) => {
  //LLamo a la funcion y le envio los datos para hacer el insert
  registrarVotante(obj);
});
//Creamos la funcion para realizar el insert
function registrarVotante(obj) {
  const { identificacionVotantes, codigoVotantes, nombreVotantes, apellidoVotantes, gradoVotantes } = obj;
  const sql = "INSERT INTO votantes (identificacion, codestudiantil, nombre, apellido, grado) VALUES (?,?,?,?,?)";
  const value = [identificacionVotantes, codigoVotantes, nombreVotantes, apellidoVotantes, gradoVotantes];
  db.query(sql, value, (error, results) => {
    if (error) {
      console.log(error);
    }
    if (results.length > 0) {
      new Notification({
        title: "Error",
        body: "Error al Registrar",
      }).show();
    } else {
      new Notification({
        title: "Ingresar Votante",
        body: "Votante Registrado Correctamente",
      }).show();
    }
  });
}
//Obtengo los datos para obtener los votantes
ipcMain.handle("obtenerVotantes", () => {
  //LLamo a la funcion para obtener los votantes
  obtenerVotante();
});
//funcion para obtener los votantes
function obtenerVotante() {
  db.query("SELECT identificacion, codestudiantil, nombre, apellido, grado FROM votantes", (error, results, fields) => {
    if (error) {
      console.log("E" + error);
    }

    win.webContents.send("listaVotantes", results);
  });
}
ipcMain.handle("obtenerCandidatos", () => {
  //LLamo a la funcion para obtener los votantes
  obtenerCandidato();
});
//funcion para obtener los votantes
function obtenerCandidato() {
  db.query("SELECT identificacion, codestudiantil, nombre, apellido, grado FROM candidatos", (error, results, fields) => {
    if (error) {
      console.log("E" + error);
    }

    win.webContents.send("listaCandidatos", results);
  });
}
//Obtengo los datos para registrar los candidatos
ipcMain.handle("registrarCandidato", (event, obj) => {
  //LLamo a la funcion y le envio los datos para hacer el insert
  registrarCandidato(obj);
});
//Creamos la funcion para realizar el insert
function registrarCandidato(obj) {
  const { identificacionCandidato, codigoCandidato, nombreCandidato, apellidoCandidato, gradoCandidato } = obj;
  const sql = "INSERT INTO candidatos (identificacion, codestudiantil, nombre, apellido, grado) VALUES (?,?,?,?,?)";
  const value = [identificacionCandidato, codigoCandidato, nombreCandidato, apellidoCandidato, gradoCandidato];
  db.query(sql, value, (error, results) => {
    if (error) {
      console.log(error);
    }
    if (results.length > 0) {
      new Notification({
        title: "Error",
        body: "Error al Registrar",
      }).show();
    } else {
      new Notification({
        title: "Ingresar Candidato",
        body: "Candidato Registrado Correctamente",
      }).show();
    }
  });
}

//Obtengo los datos para buscar votantes
ipcMain.handle("buscarVotante", (event, obj) => {
  //LLamo a la funcion para obtener los votantes
  buscarVotante(obj);
});
//funcion para obtener los votantes
function buscarVotante(obj) {
  const { AbuscarCodigoVotantes } = obj;
  console.log(obj);
  let sql = `SELECT * FROM votantes WHERE codestudiantil = ?`;
  console.log(sql);

  db.query(sql, [AbuscarCodigoVotantes], (error, results, fields) => {
    if (error) {
      console.log(error);
    }
    console.log("el archivo es");
    console.log(results);
    if (results.length === 0) {
      new Notification({
        title: "Votante no encontrado",
        body: "Escriba correctamente el Codigo Estudiantil",
      }).show();
    } else {
      // Realizar acciones con los resultados obtenidos

      win.webContents.send("votanteEncontrado", results[0]);
    }
  });
}
