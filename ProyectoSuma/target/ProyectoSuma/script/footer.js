let salir=document.querySelector("#salir");
salir.addEventListener("click", (Event)=>{
    let confirmacion=confirm("Estas seguro de salir de la APP?");
    if (confirmacion){
        window.location.replace("https://google.es");
    }
});
