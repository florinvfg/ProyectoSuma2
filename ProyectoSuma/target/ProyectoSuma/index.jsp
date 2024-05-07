<!doctype html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Juego de la Suma</title>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
    <link rel="stylesheet" href="css/responsive.css">
    <link rel="stylesheet" href="css/style.css">
</head>
<body>
<header>
    <div class="header color-red col-12 caja-flex">
        <div class="col-3">
            <h1 class="nombre-aplicacion">Juego de la Suma</h1>
        </div>
        <div class="col-3">
            <span class="material-symbols-outlined">
                home
            </span>
        </div>
        <div class="col-3">
            <span class="material-symbols-outlined">
                menu
            </span>
        </div>
    </div>
</header>

<div class="contenedor col-12 texto-centrado margen-top-100">
    <form action="">
        <p>
            <input type="number" id="sumando1" name="sumando1"  min="0" max="99">
        </p>
        <p>
            <span class="material-symbols-outlined">
                add_circle
            </span>
        </p>
        <p>
            <input type="number" id="sumando2" name="sumando2"  min="0" max="99">
        </p>
        <p>
            <span class="material-symbols-outlined">
                equal
            </span>
        </p>
        <input type="number" id="resultado" name="resultado" min="0" max="200">
    </form>
    <p>
        <span class="material-symbols-outlined" id="icono-like">
            thumb_up
        </span>
        <span class="material-symbols-outlined" id="icono-dislike">
            thumb_down
        </span>
    </p>
</div>
<script src="script/js.js"></script>

</body>
</html>
</html>