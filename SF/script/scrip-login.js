const { ipcRenderer } = require("electron");

let btnlogin;
let identificacion;
let password;

window.onload = function () {
  identificacion = document.getElementById("identificacion");
  password = document.getElementById("password");
  btnlogin = document.getElementById("login");

  btnlogin.onclick = function () {
    const obj = { identificacion: identificacion.value, password: password.value };

    ipcRenderer.invoke("login", obj);
  };
};
