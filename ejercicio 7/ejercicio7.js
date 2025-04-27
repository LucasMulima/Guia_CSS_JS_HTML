let xd = function(){
    let lista = document.getElementById("lista_anime")
    let ultimo = lista.lastElementChild
    lista.removeChild(ultimo)
}
let main = function(){
    let boton = document.getElementById("button")
    boton.addEventListener("click",xd)
}
main()