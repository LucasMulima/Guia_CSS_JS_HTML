let num = 1;
let apret = function(){
    let cont = document.getElementById("contador")
    cont.innerText = num;
    num++;
    if(num==10)
    {
        cont.style.color ="red";
    }
}
let main = function(){
    let butclick = document.getElementById("clicker")
    butclick.addEventListener("click",apret)
    
}
main()