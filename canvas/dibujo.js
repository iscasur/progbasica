var texto = document.getElementById("texto_lineas");
var boton = document.getElementById("botoncito");
boton.addEventListener("click", dibujoPorClick);

var d = document.getElementById("dibujito");
var ancho = d.width;
var lienzo = d.getContext("2d");

function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal){
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.moveTo(xinicial, yinicial);
    lienzo.lineTo(xfinal, yfinal);
    lienzo.stroke();
    lienzo.closePath();
}

function dibujoPorClick(){
    var lineas = parseInt(texto.value);
    var l = 0;
    var xi, xf, yi, yf;
    var colorcito = "#FAA"
    var espacio = ancho / lineas;

    for(l = 0; l < lineas; l++){
        xi = espacio * (l + 1);
        yf = espacio * l;
        yi = espacio * l;
        xf = espacio * (l + 1);
        dibujarLinea(colorcito, 0, yi, xf, 300);
        dibujarLinea(colorcito, xi, 0, 300, yf);
    }

    dibujarLinea(colorcito, 0, 0, 0, 300);
    dibujarLinea(colorcito, 0, 300, 300, 300);
}