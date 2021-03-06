var teclas = {
    LEFT: 37,
    UP: 38,
    RIGHT: 39,
    DOWN: 40 
}

document.addEventListener("keydown", moverCerdo);
var vp = document.getElementById("villaplatzi");
var papel = vp.getContext("2d");
var x = 0;
var y = 0;

var fondo = {
    url: "tile.png",
    cargaOk: false,
    repeat: true
};

var cerdo = {
    url: "cerdo.png",
    cargaOk: false,
    repeat: true
};


fondo.imagen = new Image();
fondo.imagen.src = fondo.url;
fondo.imagen.addEventListener("load", cargarFondo);

cerdo.imagen = new Image();
cerdo.imagen.src = cerdo.url;
cerdo.imagen.addEventListener("load", cargarCerdo);


function cargarFondo(){
    fondo.cargaOk = true;
    dibujar(x, y);
    fondo.repeat = false;
}

function cargarCerdo(){
    cerdo.cargaOk = true;
    dibujar(x, y);
}


function dibujar(x, y){
    if (fondo.cargaOk) {
        papel.drawImage(fondo.imagen, 0 , 0);
    }
    if (cerdo.cargaOk){
        papel.drawImage(cerdo.imagen, x, y);
        console.log("La posición en X es " + x);
        console.log("La posición en Y es " + y);
    }
}

function moverCerdo(evento){
    var movimiento = 10;
    if (x < 420 && y < 420 && x > 0 && y > 0){
        switch (evento.keyCode) {
            case teclas.LEFT:
                dibujar(x - movimiento, y);
                x = x - movimiento;
                break;
            case teclas.UP:
                dibujar(x, y - movimiento);
                y = y - movimiento;
                break;
            case teclas.RIGHT:
                dibujar(x + movimiento, y);
                x = x + movimiento;
                break;
            case teclas.DOWN:
                dibujar(x, y + movimiento);
                y = y + movimiento;
                break;
        }
    } else {
        if (x >= 420){
            x = x - movimiento;
        }
        if (x <= 0){
            x = x + movimiento;
        }
        if (y >= 420){
            y = y - movimiento;
        }
        if (y <= 0){
            y = y + movimiento;
        }
    }
}

function aleatorio(min, max){
    var resultado;
    resultado = Math.floor(Math.random() * (max - min + 1)) + min;
    return resultado;
}