/**
 * Existe una función de tipo evento que le indica al ejecucion cuando el archivo es leido, osea, se carga el html,se ejecuta el
 * Scritp de JS
 *
 * */
window.onload=(e)=>{ //se ve a ejecutar lo que este dentro de esta función cuando el archivo se lea
    let radios=document.querySelectorAll('input[type=radio][name="operacion"]'); //All cuando son varios
    let operaciones="";
    radios.forEach(function (radio){//ForEarch = por cada uno ...distinto
        radio.addEventListener("change",function (){
        //verificar si el radio esta marcado
        if (this.checked){ //si ese radio esta marcado, hacer lo siguiete
            //mostrar que opcion marco el cliente
            console.log("Radio Seleccionado->" +this.value);
            operaciones=this.value; //guardar la operacion seleccionada en la variable operaciones
            //reenviamos a la pagina de operacioenes la opcion marcada por el usuario por el metodo GET
            window.location.replace("operaciones.jsp?operacion="+operaciones);
        }
    })
    })
}
