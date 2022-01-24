import { Ladrillo } from './claseLadrillo.js';
import { Paleta } from './clasePaleta.js';
import { Bola } from './claseBola.js';


window.onload = function(){
    colocarLadrillos();
    colocarBola();
    colocarPaleta();

    document.addEventListener("mousemove", function(evento){
        let posicionX = evento.pageX - 60;
        paleta.style.left = posicionX+"px";
    });
    globalThis.velocidad = 4;
    globalThis.dx = velocidad;
    globalThis.dy = -velocidad;
    globalThis.puntos = 0;
    animarBola();

}

function colocarLadrillos(){
    var posy = 60;
    var posx = 10;

    var colores = ['gray', 'red', 'yellow', 'cyan', 'fuchsia', 'green'];

    for(var i=0;i<6;i++){
        for(var j=0;j<9;j++){
            var ladrillo = new Ladrillo(posx, posy);
            ladrillo.dibujarLadrillo(colores[i]);
            posx += 76;
        }
        posy += 35;
        posx = 10;
    }

}

function colocarPaleta(){
    var paleta = new Paleta();
    paleta.dibujarPaleta();
}

function colocarBola(){
    var bola = new Bola();
    bola.dibujarBola();
}

function animarBola(){
    bolaPosicionYColisiones();
    Puntos();
    requestAnimationFrame( animarBola );

}

function bolaPosicionYColisiones(){
    var left = (parseInt(bola.style.left.replace(/px/,"")));
    var top = (parseInt(bola.style.top.replace(/px/,"")));

    if(top >= 680){
        //bola.remove();
        gameOver();
    }
    if(top <= 0){
        dy = -dy;
    }

    if(left >= 680){
        dx = -dx;
    }
    if(left <= 0){
        dx = -dx;
    }

    if(dx > -1 && dx <=0 || dx >0 && dx < 1){
        var num = velocidad / 2;
        dx = Math.floor(Math.random() * (num - (-num))) -num;
        console.log(dx);
    }

    

    // Comprobamos colisión con la paleta
    
    var topPaleta = (parseInt(paleta.style.top.replace(/px/,"")));
    var leftPaleta = (parseInt(paleta.style.left.replace(/px/,"")));
    if(left < leftPaleta + paleta.clientWidth && bola.clientWidth + left > leftPaleta &&
        top < topPaleta + paleta.clientHeight && bola.clientHeight + top > topPaleta){
        var porcentaje = (left - leftPaleta) / paleta.clientWidth;
        dx = (porcentaje * velocidad) - (dx / 2);
        dy = -(Math.abs(dy));
    }

    // Aquí viene lo gordo, comprobamos colision con ladrillos
    var ladrillos = [...document.getElementsByClassName("ladrillo")];
    if(ladrillos.length < 1){
        ladrillos.forEach(ladrillo => {
            ladrillo.remove();
        })
        siguienteFase();
    }
    ladrillos.forEach(ladrillo => {
        var leftLadrillo = (parseInt(ladrillo.style.left.replace(/px/,"")));
        var topLadrillo = (parseInt(ladrillo.style.top.replace(/px/,"")));
        if(left < leftLadrillo + ladrillo.clientWidth && bola.clientWidth + left > leftLadrillo &&
            top < topLadrillo + ladrillo.clientHeight && bola.clientHeight + top > topLadrillo){
            dy = -dy;
            ladrillo.remove();
            puntos += 100;
        }
    });

    bola.style.left = (parseInt(bola.style.left.replace(/px/,""))+dx)+"px";
    bola.style.top = (parseInt(bola.style.top.replace(/px/,""))+dy)+"px";

}

function Puntos(){
    var puntosTxt = document.getElementById("puntos");
    puntosTxt.innerHTML = puntos;
}

function siguienteFase(){
    bola.remove();
    colocarLadrillos();
    colocarBola();
    dy = -velocidad;
}

function gameOver(){
    bola.remove();
    var cartel = document.createElement("div");
    cartel.style.position = "absolute";
    cartel.style.color = "red";
    cartel.style.fontSize = "102px";
    cartel.style.top = "280px";
    cartel.style.left = "120px";
    cartel.innerHTML = "GAME OVER";
    document.getElementById("juego").appendChild(cartel);

}