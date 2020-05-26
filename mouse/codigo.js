document.addEventListener('mousedown', empiezaLinea);
document.addEventListener('mouseup', terminaLinea);
document.addEventListener('mousemove', trazarLinea);

var pintarron = document.getElementById("pizarra");
var paint = pintarron.getContext("2d");
var clicksostenido = false;
var colorcito = "green";

function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal, lienzo){
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.lineWidth = 1;
    lienzo.moveTo(xinicial, yinicial);
    lienzo.lineTo(xfinal, yfinal);
    lienzo.stroke();
    lienzo.closePath();
}

function empiezaLinea(evento){
    xInicio = evento.layerX;
    yInicio = evento.layerY;
    clicksostenido = true;
}

function terminaLinea(evento){
    clicksostenido = false;
}

function trazarLinea(evento){
    if (clicksostenido == true) {
        dibujarLinea (colorcito, xInicio, yInicio, evento.layerX, evento.layerY, paint)
        xInicio = evento.layerX;
        yInicio = evento.layerY;
        console.log("Punto inicial " + xInicio + " " + yInicio);
        console.log("Punto final " + evento.layerX + " " + evento.layerX);
    }
}