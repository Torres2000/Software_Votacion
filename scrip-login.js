const { ipcRenderer } = require("electron");

let btnlogin;
let email;
let password;

window.onload = function () {
  email = document.getElementById("identificacion");
  password = document.getElementById("password");
  btnlogin = document.getElementById("login");

  btnlogin.onclick = function () {
    const obj = { email: identificacion.value, password: password.value };

    ipcRenderer.invoke("login", obj);
  };
};
