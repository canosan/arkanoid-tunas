class Ladrillo{
    constructor(posx, posy){
        this.posx = posx;
        this.posy = posy;
    }

    dibujarLadrillo(color){
        var ladrillo = document.createElement("div");
        ladrillo.setAttribute("class", "ladrillo");
        ladrillo.style.backgroundColor = color;
        ladrillo.style.left = `${this.posx}px`;
        ladrillo.style.top = `${this.posy}px`;
        document.getElementById("juego").appendChild(ladrillo);
    }

}

export { Ladrillo };