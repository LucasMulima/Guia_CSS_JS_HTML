let presionar = function(){
    let lista = document.getElementById("lista")
    let elemento = document.createElement("li")
    elemento.innerText = "Nuevo elemento";
    lista.appendChild(elemento)
}

let main = function(){
    let pres = document.getElementById("button")
    pres.addEventListener("click",presionar)
}
main()