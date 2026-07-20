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
if(producto=="Perros Calientes"){
    botones=`
    <button onclick="pedirWhatsApp('Perro Tradicional - $10.000')">🌭 Perro Tradicional - $10.000</button>
    <button onclick="pedirWhatsApp('Perro Especial - $14.000')">🌭 Perro Especial - $14.000</button>
    <button onclick="pedirWhatsApp('Perro Súper - $18.000')">🌭 Perro Súper - $18.000</button>
    `;
}
    if(producto=="Sandwiches"){
    botones=`
    <button onclick="pedirWhatsApp('Sándwich Cubano - $13.000')">🥪 Sándwich Cubano - $13.000</button>
    <button onclick="pedirWhatsApp('Sándwich Especial - $16.000')">🥪 Sándwich Especial - $16.000</button>
    <button onclick="pedirWhatsApp('Sándwich Doble - $20.000')">🥪 Sándwich Doble - $20.000</button>
    `;
}
    if(producto=="Salchipapas"){
    botones=`
    <button onclick="pedirWhatsApp('Salchipapa Personal - $12.000')">🍟 Salchipapa Personal - $12.000</button>
    <button onclick="pedirWhatsApp('Salchipapa Especial - $18.000')">🍟 Salchipapa Especial - $18.000</button>
    <button onclick="pedirWhatsApp('Salchipapa Mixta - $25.000')">🍟 Salchipapa Mixta - $25.000</button>
    `;
}
    if(producto=="Pollo Broaster"){
    botones=`
    <button onclick="pedirWhatsApp('1 Presa Broaster - $5.000')">🍗 1 Presa - $5.000</button>
    <button onclick="pedirWhatsApp('2 Presas Broaster + Papas + Gaseosa - $14.000')">🍗 2 Presas + Papas + Gaseosa - $14.000</button>
    <button onclick="pedirWhatsApp('4 Presas Broaster - $20.000')">🍗 4 Presas - $20.000</button>
    <button onclick="pedirWhatsApp('Broaster Familiar - $38.000')">🍗 Broaster Familiar - $38.000</button>
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
