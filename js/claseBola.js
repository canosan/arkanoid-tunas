class Bola{
    constructor(){
    }

    dibujarBola(){
        var bola = document.createElement("div");
        bola.setAttribute("id", "bola");
        bola.style.top = "600px";
        bola.style.left = "340px";
        document.getElementById("juego").appendChild(bola);
        console.log(this)
    }

    

}

export { Bola };