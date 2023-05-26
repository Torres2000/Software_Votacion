//Cuando se da click en el boton correcto
document.getElementById("correcto").addEventListener("click", function () {
  /*
  swal("Genial!!", "Puede ejercer su voto", "success");
  window.open("tarjetones.html");
  */
  //Se muestra un mensaje

  swal("Genial!!", "Puede ejercer su voto", {
    button: true, //Boton ok
  }).then((value) => {
    //Se muestra la pagina para votar
    window.location.href = "tarjetones.html";
  });
});

//Cuando se da click en el boton esta mal
document.getElementById("error").addEventListener("click", function () {
  /*
  swal("Genial!!", "Puede ejercer su voto", "success");
  window.open("tarjetones.html");
  */
  //Se muestra un mensaje

  swal("Error", "Comuniquese con el director", "info", {
    button: true, //Boton ok
  }).then((value) => {
    //Se muestra la pagina para votar
    window.location.href = "inicio.html";
  });
});
