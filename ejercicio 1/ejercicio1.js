let send = function(){
    let inputnombre = document.getElementById("nombre")
    let inputcorreo = document.getElementById("correo")
    let textareamensaje = document.getElementById("mensaje")
    let divareamensajes = document.getElementById("area_mensajes")
    //1. Verificar si todas las cajas de texto tienen valores
    if(inputnombre.value == ""||
        inputcorreo.value == ""||
        textareamensaje.value ==""
    ){
        console.error("Debe ingresar en todos los campos")
        divareamensajes.innerText = "Debe ingresar en todos los campos"
        return
    }

    //2. Verificar el formato del correo (@ y .)
    if(inputcorreo.value.includes("@")||
    inputcorreo.value.includes(".")
    ){
        console.error("Error en el formato del correo.")
        divareamensajes.innerText = "Error en el formato del correo."
        return
    }
    //3. Pintar que se envio correctamente
    console.log("Se envio correctamente")
    divareamensajes.innerText = "Se envio correctamente"
    inputnombre.value =""
    inputcorreo.value =""
    textareamensaje.value =""
}

let main = function(){
    let butEnviar = document.getElementById("but_enviar")
    butEnviar.addEventListener("click",send )
}

main()