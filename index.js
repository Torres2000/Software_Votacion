"use strict";

const { app, BrowserWindow, ipcMain } = require("electron");

app.on("before-quit", () => {
  console.log("Saliendo..");
});
app.on("ready", () => {
  let win = new BrowserWindow({
    width: 800,
    height: 600,
    title: "Software de Votación",
  });

  win.on("closed", () => {
    win = null;
    app.quit();
  });
  win.loadFile("./SF/index.html"); // Escucha el evento 'cerrar-aplicacion' desde el proceso de renderizado
  ipcMain.on("cerrar-aplicacion", () => {
    win = null;
    app.quit();
  });
});
