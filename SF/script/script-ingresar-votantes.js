window.addEventListener("DOMContentLoaded", function () {
  var formulario = document.getElementById("formulario");
  formulario.addEventListener("submit", function (event) {
    event.preventDefault(); // Evitar envío del formulario por defecto

    // Validar los campos
    var opcion = document.getElementById("grado").value;

    // Agrega validaciones adicionales según tus necesidades

    if (opcion === "Seleccionar") {
      alert("Por favor, Seleccione un grado");
      return false;
    }
    // Si los campos son válidos, enviar el formulario
    formulario.submit();
  });
});
