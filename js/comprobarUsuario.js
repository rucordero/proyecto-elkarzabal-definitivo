$(document).ready(function(){
    $("#ventanaModal").hide();
    $("#ventanaModalUsuario").hide();

    var inicio = "Iniciar sesión";
    var usuario = "Nombre usuario";
    var sesion = false;

    if(sesion) {
        $("#iconoAdmin").html('<a onclick="mostrarVentanaUsuario()" href="#miModalUsuario"><img id="icono" src="./images/zanahoria.svg"><span id="span-Admin">'+usuario+'</span></a>');
        $("#iconoAdminMovil").html('<a onclick="mostrarVentanaUsuario()" class="sinDecoracion" href="#miModalUsuario"><img id="iconoMovil" src="./images/zanahoria.svg"><span id="span-AdminMovil">'+usuario+'</span></a>');
    } else {
        $("#iconoAdmin").html('<a onclick="mostrarVentanaInicio()" href="#login"><img id="icono" src="./images/zanahoria.svg"><span id="span-Admin">'+inicio+'</span></a>');
        $("#iconoAdminMovil").html('<a onclick="mostrarVentanaInicio()" class="sinDecoracion" href="#login"><img id="iconoMovil" src="./images/zanahoria.svg"><span id="span-AdminMovil">'+inicio+'</span></a>');
    }
})

function mostrarVentanaInicio() {
    $("#ventanaModal").show();
}

function mostrarVentanaUsuario() {
    $("#ventanaModalUsuario").show();
}


