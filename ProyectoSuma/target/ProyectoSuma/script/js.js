document.addEventListener("DOMContentLoaded", function() {
    var iconoLike = document.getElementById("icono-like");
    var iconoDislike = document.getElementById("icono-dislike");
    var iconoSumar = document.getElementById("icono-sumar");
    var iconoIgual = document.getElementById("icono-igual");
    var inputSumando1 = document.getElementById("sumando1");
    var inputSumando2 = document.getElementById("sumando2");
    var inputResultado = document.getElementById("resultado");

    // Manejar clic en el icono "like"
    iconoLike.addEventListener("click", function() {
        alert("¡Te gusta este contenido!");
    });

    // Manejar clic en el icono "dislike"
    iconoDislike.addEventListener("click", function() {
        alert("¡No te gusta este contenido!");
    });
    document.addEventListener("DOMContentLoaded", function() {
        var inputSumando1 = document.getElementById("sumando1");
        var inputSumando2 = document.getElementById("sumando2");
        var inputResultado = document.getElementById("resultado");

        // Función para realizar la suma y actualizar el resultado
        function actualizarResultado() {
            var sumando1 = parseInt(inputSumando1.value) || 0; // Obtener el valor del primer sumando
            var sumando2 = parseInt(inputSumando2.value) || 0; // Obtener el valor del segundo sumando
            var resultado = sumando1 + sumando2; // Sumar los dos sumandos
            inputResultado.value = resultado; // Mostrar el resultado en el input de resultado
        }

        // Actualizar el resultado cuando se ingresen nuevos valores en los campos de entrada
        inputSumando1.addEventListener("input", actualizarResultado);
        inputSumando2.addEventListener("input", actualizarResultado);
    });



});
