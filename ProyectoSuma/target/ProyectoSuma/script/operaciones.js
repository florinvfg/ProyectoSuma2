let contadorC=0;
let contadorI=0;
let param=new URLSearchParams(location.search); //busca en la url un parametro que le indiquemos
const OPERACIONES=param.get("operacion"); // trae el valor
console.log(OPERACIONES);
let operacionCorrecta=0;

window.onload=function (e){
    //Se desarrolla la ejecución cuando se carge la pagína
   //Buscar el simbolo y pintarlo en el html
    if (OPERACIONES=="sumar"){
        document.querySelector(".simbolo").innerHTML="add";
    }
    if (OPERACIONES=="restar"){
        document.querySelector(".simbolo").innerHTML="remove";
    }
    if (OPERACIONES=="multiplicar"){
        document.querySelector(".simbolo").innerHTML="close";
    }
    if (OPERACIONES=="dividir"){
        document.querySelector(".simbolo").innerHTML="&#xF7;";
        document.querySelector(".nota").innerHTML="Nota: La división puede contener hasta dos decimales separados con ."
    }

    mostrarNumeros();
    let respuesta=document.querySelector("#resultado");
    respuesta.addEventListener("change",comprobarOperacion)
}

function mostrarNumeros(){
    operando1 = document.querySelector("#operando1");
    operando2 = document.querySelector("#operando2");
    operando1.value = parseInt(Math.random() * 100 + 1);
    operando2.value = parseInt(Math.random() * 100 + 1);
    /*****      hacemos el Switch de las operaciones     ******/
    switch (OPERACIONES){
        case "sumar":{
            operacionCorrecta=Number(operando1.value)+Number(operando2.value);
            break;
        }
        case "restar":{
            operacionCorrecta=Number(operando1.value)-Number(operando2.value);

            break;
        }
        case "multiplicar":{
            operacionCorrecta=Number(operando1.value)*Number(operando2.value);
            break;
        }
        case "dividir":{
            operacionCorrecta=Number(operando1.value)/Number(operando2.value);
            operacionCorrecta=parseFloat(operacionCorrecta.toFixed(2));
            break;
        }
    }
    console.log(operacionCorrecta);
}
function comprobarOperacion(){
    let respuesta=event.target;
    console.log("respuesta->" + respuesta);
    if (operacionCorrecta==Number(respuesta.value)){
        contadorC++;
        mostrarNumeros();
    }else{
        contadorI++;
        mostrarNumeros();
    }
    respuesta.value="";
    document.querySelector("#correcta").innerHTML=contadorC;
    document.querySelector("#incorrecta").innerHTML=contadorI;

}


