let producto = [
    {tit: 'Espada del rey arruinado', desc: 'Única - Filo Neblina: Los ataques básicos infligen ( 10% /  6%) de la vida actual del objetivo como daño físico adicional al golpe, limitado a 60 de daño adicionalcontra súbditos y monstruos.', precio:'3100 oro'},
    {tit: 'Corazon de acero', desc: 'Consumo Colosal: Si un campeón enemigo se encuentra a 700 unidades cerca de ti, Corazón de Acero generará acumulaciones en los próximos 3 segundos. Al alcanzar el máximo de acumulaciones, tu próximo ataque básico infligirá 125 (+6% de tu vida máxima) de daño físico. Además, un 10% de ese daño lo recibirás como vida permanente.(esta pasiva tiene 30 segundos de enfriamiento)', precio:'3200 oro'},
    {tit: 'Reloj de Arena de Zhonya', desc:'ÚNICO - Detención del tiempo: te pones en estasis durante 2,5 segundos, lo que te hace invulnerable y no se puede atacar mientras dura el ataque, pero tampoco puedes moverte, atacar, lanzar hechizos ni usar objetos durante este tiempo (120 segundos de tiempo de reutilización).', precio:'2600 oro'}
];
let num =0;
   

let butclick = function(){
    if(num>2)
    {
        console.log("ya no hay mas elementos")
        return
    }
    let areamensajes = document.getElementById("area")

    let card = document.createElement("div")
    card.className="card";
    card.style= "width: 18rem";

    let cardbody = document.createElement("div")
    cardbody.className="card-body";

    let cardtittle = document.createElement("h5")
    cardtittle.className="card-title";
    cardtittle.innerText= producto[num].tit

    let desc = document.createElement("p")
    desc.className="card-text";
    desc.innerText = producto[num].desc

    let precio = document.createElement("p")
    precio.className="card-text";
    precio.innerText= producto[num].precio

    
    cardbody.appendChild(cardtittle)
    cardbody.appendChild(desc)
    cardbody.appendChild(precio)
    card.appendChild(cardbody)
    areamensajes.appendChild(card)
    num++
}

let main =function(){
    
    
    let butapret = document.getElementById("aso")
    butapret.addEventListener("click", butclick)
    
}

main()