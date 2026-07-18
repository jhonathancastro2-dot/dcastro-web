function verOpciones(producto){
    document.getElementById("ventanaMenu").style.display="flex";
    document.getElementById("tituloProducto").innerHTML=producto;
}

function cerrarVentana(){
    document.getElementById("ventanaMenu").style.display="none";
}

function pedirWhatsApp(opcion){
    window.open(
        "https://wa.me/573206564360?text=Hola D'CASTRO, quiero pedir " + encodeURIComponent(opcion),
        "_blank"
    );
}
