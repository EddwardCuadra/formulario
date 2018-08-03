<?php
$nombre = $_POST['nombre'];
$cedula = $_POST['cedula'];
$sexo = $_POST['sexo'];
$aficion = $_POST['aficion'];
$povincia = $_POST['provincia'];
$fecha = $_POST['user_date'];
?>
    <!DOCTYPE html>
    <html lang="en">

    <head>
        <meta charset="UTF-8">
        <title>Document</title>
    </head>

    <body>
        <p>
            <?php echo "$nombre";
echo "$cedula";
echo "$sexo";
echo "$aficion";
echo "$provincia";
echo "$fecha";?>
        </p>
    </body>

    </html>
