const { app, BrowserWindow, ipcMain, Notification } = require("electron");
const path = require("path");
let db = require("./database");

let win;
let winlogin;
function createWindow() {
  win = new BrowserWindow({
    webPreferences: {
      preload: path.join(__dirname, "./SF/script/script.js"),
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

ipcMain.handle("registrarVotante", (event, obj) => {
  registrarVotante(obj);
});
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
ipcMain.handle("obtenerVotantes", () => {
  obtenerVotante();
});
function obtenerVotante() {
  db.query("SELECT identificacion, codestudiantil, nombre, apellido, grado FROM votantes", (error, results, fields) => {
    if (error) {
      console.log("E" + error);
    }

    win.webContents.send("listaVotantes", results);
  });
}
