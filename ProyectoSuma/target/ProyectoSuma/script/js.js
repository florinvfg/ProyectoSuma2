

function mostrarNumeros() {
    sumando1 = document.querySelector("#operando1");
    sumando2 = document.querySelector("#operando2");
    sumando1.value = parseInt(Math.random() * 100 + 1);
    sumando2.value = parseInt(Math.random() * 100 + 1);
    let operacion=document.querySelector("#sumar").value;

    sumaCorrecta = Number(sumando1.value) + Number(sumando2.value);

}
let contadorC=0;
let contadorI=0;
let respuesta = document.querySelector("#resultado");
respuesta.addEventListener("change",(event) => {
    console.log(typeof (respuesta.value));

    if (sumaCorrecta === Number(respuesta.value)) {
        contadorC++

        mostrarNumeros();
    } else {
        contadorI++;
        mostrarNumeros();
    }
    if(contadorC===10 && contadorI===0)
        alert("LLevas una buena racha...10 sumas consecutivas correctas y 0 incorrectas");
    respuesta.value="";
    document.querySelector("#correcta").innerHTML=contadorC;
    document.querySelector("#incorrecta").innerHTML=contadorI;
});

