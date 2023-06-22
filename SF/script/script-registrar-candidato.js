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
    var archivo = document.getElementById("formFile").files[0];

    if (archivo) {
      var archivo = document.getElementById("formFile").files[0];
      var reader = new FileReader();

      reader.onloadend = function () {
        var bytes = new Uint8Array(this.result);
        var validImageTypes = ["image/jpeg", "image/png", "image/gif"]; // Formatos de imagen válidos

        if (validImageTypes.includes(archivo.type)) {
          alert("¡Archivo válido! Puedes continuar con el proceso.");
          // Si los campos son válidos, enviar el formulario
          formulario.submit();
        } else {
          alert("El archivo seleccionado no es una imagen válida.");
        }
      };

      if (archivo) {
        reader.readAsArrayBuffer(archivo);
      }
    } else {
      alert("Por favor, selecciona un archivo de imagen.");
    }
  });
});
