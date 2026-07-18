function verOpciones(producto){

    document.getElementById("ventanaMenu").style.display="flex";
    document.getElementById("tituloProducto").innerHTML=producto;

    let botones="";

    if(producto=="Alitas de Pollo"){
        botones=`
        <button onclick="pedirWhatsApp('6 Alitas - $18.000')">🍗 6 Alitas - $18.000</button>
        <button onclick="pedirWhatsApp('12 Alitas - $32.000')">🍗 12 Alitas - $32.000</button>
        <button onclick="pedirWhatsApp('24 Alitas - $58.000')">🍗 24 Alitas - $58.000</button>
        `;
    }

    if(producto=="Hamburguesas"){
        botones=`
        <button onclick="pedirWhatsApp('Hamburguesa Clásica - $15.000')">🍔 Clásica - $15.000</button>
        <button onclick="pedirWhatsApp('Hamburguesa Especial - $18.000')">🍔 Especial - $18.000</button>
        <button onclick="pedirWhatsApp('Hamburguesa Doble - $22.000')">🍔 Doble - $22.000</button>
        `;
    }

    document.getElementById("opcionesProducto").innerHTML=botones;
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
