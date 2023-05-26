document.getElementById("submitBtn").addEventListener("click", function () {
  var selectedOption = document.querySelector('input[name="candidate"]:checked');
  if (selectedOption) {
    var selectedValue = selectedOption.value;
    //alert("Has seleccionado al candidato " + selectedValue);
    swal("Su voto a sido guardado con exito", "", "success");
  } else {
    swal("Seleccione un candidato", "", "warning");
  }
});
