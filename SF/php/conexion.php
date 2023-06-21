<?php
  $servername = "localhost"; // Cambiar si es necesario
  $username = "root"; // Cambiar por tu nombre de usuario de PhpMyAdmin
  $password = ""; // Cambiar por tu contraseña de PhpMyAdmin
  $database = "votaciones"; // Cambiar por el nombre de tu base de datos

  // Crear conexión
  $conn = new mysqli($servername, $username, $password, $database);

  // Verificar la conexión
  if ($conn->connect_error) {
      die("Error de conexión: " . $conn->connect_error);
  }

?>