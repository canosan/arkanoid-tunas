class Paleta{
    constructor(){

    }

    dibujarPaleta(){
        var paleta = document.createElement("div");
        paleta.setAttribute("id", "paleta");
        paleta.style.position = "absolute";
        paleta.style.width = "66px";
        paleta.style.height = "20px";
        paleta.style.top = "660px";
        
        document.getElementById("juego").appendChild(paleta);
    }
}

export { Paleta };