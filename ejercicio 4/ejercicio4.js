let presionar = function(){
    let texto = document.getElementById("fue_mi_pene")
    texto.innerText ="Texto modificado"
}
let main = function(){
    let boton =document.getElementById("button")
    boton.addEventListener("click",presionar)
}
main()