let oculto = function(){
    let estado = true;
    let parrafo=document.getElementById("parrafo")
    if(parrafo.style.display == "none")
    {
        parrafo.style.display="block";
    }else{
        parrafo.style.display="none";
    }
}

let main = function(){
    
    let boton = document.getElementById("button")
    boton.addEventListener("click",oculto)

}

main()