class Bola{
    constructor(){
    }

    dibujarBola(){
        var bola = document.createElement("div");
        bola.setAttribute("id", "bola");
        bola.style.top = "600px";
        bola.style.left = "340px";
        bola.style.backgroundImage = "url(./sprites/ball.png)";
        document.getElementById("juego").appendChild(bola);
    }

    

}

export { Bola };