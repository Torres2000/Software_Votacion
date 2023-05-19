"use strict";

const { app, BrowserWindow } = require("electron");

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
  win.loadFile("index.html");
});
