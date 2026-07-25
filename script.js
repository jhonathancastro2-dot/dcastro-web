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
    if (producto == "Bebidas") {
    botones = `
    <button onclick="pedirWhatsApp('Gaseosa Personal - $3.500')">🥤 Gaseosa Personal - $3.500</button>
    <button onclick="pedirWhatsApp('Agua - $2.000')">💧 Agua - $2.000</button>
    <button onclick="pedirWhatsApp('Jugo en Agua - $6.000')">🧃 Jugo en Agua - $6.000</button>
    <button onclick="pedirWhatsApp('Jugo en Leche - $10.000')">🥛 Jugo en Leche - $10.000</button>
    <button onclick="pedirWhatsApp('Limonada Natural - $6.000')">🍋 Limonada Natural - $6.000</button>
    <button onclick="pedirWhatsApp('Limonada Grande - $12.000')">🍋 Limonada Grande - $12.000</button>
    <button onclick="pedirWhatsApp('Milo - $6.000')">🍫 Milo - $6.000</button>
    <button onclick="pedirWhatsApp('Capuchino - $7.000')">☕ Capuchino - $7.000</button>
    `;
}
    if (producto == "Almuerzos") {
    botones = `
    <button onclick="pedirWhatsApp('Almuerzo del Día - $10.000')">🍛 Almuerzo del Día - $10.000</button>
    <button onclick="pedirWhatsApp('Almuerzo Especial - $15.000')">🥩 Almuerzo Especial - $15.000</button>
    `;
}
    if(producto=="Parrilla"){
  botones=`
<button onclick="agregarCarrito('Pincho de Res',14000)">🥩 Pincho de Res - $14.000</button>
<button onclick="pedirWhatsApp('Pincho de Cerdo - $14.000')">🐖 Pincho de Cerdo - $14.000</button>
<button onclick="pedirWhatsApp('Pincho de Pollo - $14.000')">🍗 Pincho de Pollo - $14.000</button>
<button onclick="pedirWhatsApp('Churrasco - $33.900')">🥩 Churrasco - $33.900</button>
<button onclick="pedirWhatsApp('Parrillada Argentina - $33.900')">🔥 Parrillada Argentina - $33.900</button>
<button onclick="pedirWhatsApp('Chorizos')">🌭 Chorizos</button>
<button onclick="pedirWhatsApp('Punta de Anca')">🥩 Punta de Anca</button>
<button onclick="pedirWhatsApp('Filete Gratinado - $26.000')">🧀 Filete Gratinado - $26.000</button>
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
let carrito = [];

function agregarCarrito(nombre, precio) {

    let existe = carrito.find(item => item.nombre === nombre);

    if (existe) {
        existe.cantidad++;
    } else {
        carrito.push({
            nombre: nombre,
            precio: precio,
            cantidad: 1
        });
    }

    document.getElementById("contadorCarrito").innerText = carrito.length;

    verCarrito();
}


function verCarrito() {

    let lista = "";
    let total = 0;

    if (carrito.length === 0) {

        lista = "<p style='text-align:center;color:gray;'>Tu carrito está vacío.</p>";

    } else {

        carrito.forEach(function(item){

            lista += `
            <div style="display:flex;justify-content:space-between;align-items:center;padding:8px 0;border-bottom:1px solid #ddd;">
                <span>${item.nombre} x ${item.cantidad}</span>
                <strong>$${(item.precio * item.cantidad).toLocaleString()}</strong>
            </div>`;

            total += item.precio * item.cantidad;

        });

    }

    document.getElementById("listaCarrito").innerHTML = lista;

    if (document.getElementById("domicilio").checked) {
        total += 3000;
    }

    document.getElementById("totalCarrito").innerText = total.toLocaleString();

    document.getElementById("ventanaCarrito").style.display = "flex";
}
    document.getElementById("listaCarrito").innerHTML = lista;
    if (document.getElementById("domicilio").checked) {
    total += 3000;
}
    document.getElementById("totalCarrito").innerText = total.toLocaleString();
    document.getElementById("ventanaCarrito").style.display = "flex";
}

function cerrarCarrito() {
    document.getElementById("ventanaCarrito").style.display = "none";
}
function vaciarCarrito() {
    carrito = [];
    document.getElementById("contadorCarrito").innerText = "0";
    verCarrito();
}
function enviarCarritoWhatsApp() {
    let mensaje = "Hola D'CASTRO, quiero pedir:%0A%0A";
    let total = 0;

    carrito.forEach(function(item) {
        mensaje += "• " + item.nombre + " - $" + item.precio + "%0A";
        total += item.precio;
    });

    mensaje += "%0ATotal: $" + total;

    window.open(
        "https://wa.me/573206564360?text=" + mensaje,
        "_blank"
    );
}
