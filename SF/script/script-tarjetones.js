document.getElementById("submitBtn").addEventListener("click", function () {
  var selectedOption = document.querySelector('input[name="candidate"]:checked');
  if (selectedOption) {
    var selectedValue = selectedOption.value;
    alert("Has seleccionado al candidato " + selectedValue);
  } else {
    alert("Por favor, selecciona una opción");
  }
});
