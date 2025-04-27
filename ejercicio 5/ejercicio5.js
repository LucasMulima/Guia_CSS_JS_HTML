let presionar = function(){
    
    let lelo = document.getElementById("lel")
    lelo.setAttribute("class","vaporeon")
}

let main = function(){
    let boton=document.getElementById("button")
    boton.addEventListener("click",presionar)
}
main()