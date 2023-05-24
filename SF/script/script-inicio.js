//scrip para ver la hora y fecha actuales en pantalla
function mostrarHoraFecha() {
  var fecha = new Date(); // Obtiene la fecha actual
  var hora = fecha.getHours(); // Obtiene la hora actual
  var minutos = fecha.getMinutes(); // Obtiene los minutos actuales
  var segundos = fecha.getSeconds(); // Obtiene los segundos actuales

  // Formatea la hora y los minutos agregando un cero al principio si es necesario
  if (hora < 10) {
    hora = "0" + hora;
  }
  if (minutos < 10) {
    minutos = "0" + minutos;
  }
  if (segundos < 10) {
    segundos = "0" + segundos;
  }

  // Crea una cadena con la hora y la fecha actual
  var horaFechaActual = hora + ":" + minutos + ":" + segundos + " - " + fecha.toLocaleDateString();

  // Inserta la hora y fecha actual en el elemento con el id "hora-fecha"
  document.getElementById("hora-fecha").innerHTML = horaFechaActual;
}
// Llama a la función mostrarHoraFecha cada segundo para actualizar la hora
setInterval(mostrarHoraFecha, 1000);
