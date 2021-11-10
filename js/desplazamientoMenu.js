var estado = true;
var div = document.getElementById("menuAdmin-Submenu");
div.style.transitionDuration = "0.7s";

function comprobarEstado() {
    return estado;
}

function extender() {
    let anchura = window.innerWidth;
    if(anchura > 980) {
        document.getElementById("icono1").style.visibility = "visible";
        div.style.transform = "translate(200px,0)";
        document.getElementById("imgCamb").src = "./images/close.svg";
        estado = false;
    } else {
        document.getElementById("icono1").style.visibility = "visible";
        div.style.transform = "translate(0,520px)";
        document.getElementById("imgCamb").src = "./images/close.svg";
        estado = false;
    }

}
function encoger() {
    let anchura = window.innerWidth;
    if(anchura > 980) {
        document.getElementById("icono1").style.visibility = "visible";
        div.style.transform = "translate(-200px,0)";
        document.getElementById("imgCamb").src = "./images/barras.svg";
        estado = true;
    } else {
        document.getElementById("icono1").style.visibility = "hidden";
        div.style.transform = "translate(0,-520px)";
        document.getElementById("imgCamb").src = "./images/barras.svg";
        estado = true;
    }
}

function extenderMenuWeb() {
    let div2 = document.getElementById("contenedorCabecera-Menu");
    div2.style.transitionDuration = "0.7s";
    div2.style.transform = "translate(0,280px)";
    document.getElementById("imgCamb2").src = "./images/close.svg";
    estado = false;
}

function encogerMenuWeb() {
    let div2 = document.getElementById("contenedorCabecera-Menu");
    div2.style.transitionDuration = "0.7s";
    div2.style.transform = "translate(0,-350px)";
    document.getElementById("imgCamb2").src = "./images/barras.svg";
    estado = true;
}