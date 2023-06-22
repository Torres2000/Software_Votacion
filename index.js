const { app, BrowserWindow, ipcMain, Notification } = require("electron");
const path = require("path");
let db = require("./database");

let win;
let winlogin;
function createWindow() {
  win = new BrowserWindow({
    width: 800,
    height: 600,
  });

  win.loadFile("./SF/inicio.html");
}

function loginWindow() {
  winlogin = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, "scrip-login.js"),
    },
  });

  winlogin.loadFile("login.html");
}

app.whenReady().then(loginWindow);

app.on("window-all-closed", () => {
  app.quit();
});

ipcMain.handle("login", (event, obj) => {
  validatelogin(obj);
});

function validatelogin(obj) {
  const { email, password } = obj;
  const sql = "SELECT * FROM administradores WHERE identificacion=? AND contraseña=?";
  db.query(sql, [email, password], (error, results, fields) => {
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
