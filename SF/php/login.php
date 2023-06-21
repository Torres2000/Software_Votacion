<?php
  // Incluir el archivo de conexión
  require_once 'conexion.php';

  // Obtener el valor a buscar (sin encriptación)
    $identificacion = $_POST['identificacion'];
    $clave = $_POST['password'];

  // Generar el hash MD5 del valor a buscar
    $contraseña = md5($clave);

  // Preparar la consulta con la cláusula WHERE utilizando el campo MD5
    $sql = "SELECT * FROM administradores WHERE identificacion = '$identificacion' AND contraseña = '$contraseña'";
  // Ajusta la consulta según los nombres de tus campos y tabla

  // Ejecutar la consulta
    $resultado = $conn->query($sql);

    if ($resultado->num_rows == 1) {
        // Si se encontró una coincidencia, el inicio de sesión es exitoso
        echo "Inicio de sesión exitoso";
        
    } else {
      // Si no se encontró ninguna coincidencia, las credenciales son inválidas
        echo "Credenciales inválidas. Inténtalo de nuevo.";
    }

  // Cerrar la conexión a la base de datos
  $conn->close();
?>
