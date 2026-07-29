let numeroPedido = localStorage.getItem("numeroPedido") || 1;
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

    let cantidadTotal = 0;

carrito.forEach(function(item){
    cantidadTotal += item.cantidad;
});

document.getElementById("contadorCarrito").innerText = cantidadTotal;

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
                <div style="flex:1;">
                    <strong>${item.nombre}</strong><br>

                    <button onclick="cambiarCantidad('${item.nombre}',-1)">➖</button>

                    <strong style="margin:0 10px;">${item.cantidad}</strong>

                    <button onclick="cambiarCantidad('${item.nombre}',1)">➕</button>
                </div>

                <strong>$${(item.precio * item.cantidad).toLocaleString()}</strong>
            </div>`;

            total += item.precio * item.cantidad;

        });

    }

    document.getElementById("listaCarrito").innerHTML = lista;

    let domicilio = document.getElementById("domicilio").checked;

    document.getElementById("datosDomicilio").style.display =
        domicilio ? "block" : "none";

    if (domicilio) {
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
let numeroPedido = localStorage.getItem("numeroPedido") || 1;
function enviarCarritoWhatsApp() {

   let mensaje = "📦 *NUEVO PEDIDO D'CASTRO*%0A%0A";
mensaje += "🧾 Pedido No. " + numeroPedido + "%0A";


    let total = 0;
    let direccion = document.getElementById("direccion").value;
    let nombre = document.getElementById("nombreCliente").value;
let telefono = document.getElementById("telefonoCliente").value;
let referencia = document.getElementById("referencia").value;
let formaPago = document.getElementById("formaPago").value;
let ubicacion = document.getElementById("ubicacion").value;
mensaje += "👤 Cliente: " + nombre + "%0A";
mensaje += "📞 Teléfono: " + telefono + "%0A%0A";
    carrito.forEach(function(item){

        let subtotal = item.precio * item.cantidad;

        mensaje += "• " + item.nombre +
                   " x" + item.cantidad +
                   " = $" + subtotal.toLocaleString() + "%0A";

        total += subtotal;

    });

    if (document.getElementById("domicilio").checked) {
        mensaje += "• Domicilio = $3.000%0A";
        total += 3000;
    }
 
if (document.getElementById("domicilio").checked) {

    mensaje += "%0A📍 Dirección: " + direccion;

    mensaje += "%0A🏠 Referencia: " + referencia;

    mensaje += "%0A💳 Forma de pago: " + formaPago;

    if (ubicacion != "") {
        mensaje += "%0A🗺️ Abrir ubicación:%0A" + ubicacion;
    }

}
    mensaje += "%0A💰 Total: $" + total.toLocaleString();

    window.open(
        "https://wa.me/573206564360?text=" + mensaje,
        "_blank"
    );
    numeroPedido++;
localStorage.setItem("numeroPedido", numeroPedido);
}

function obtenerUbicacion() {

    if (!navigator.geolocation) {
        document.getElementById("estadoGPS").innerText =
            "Tu dispositivo no admite GPS.";
        return;
    }

    document.getElementById("estadoGPS").innerText =
        "📍 Obteniendo ubicación...";

    navigator.geolocation.getCurrentPosition(

        function(posicion) {

            let lat = posicion.coords.latitude;
            let lon = posicion.coords.longitude;

           let enlace = "https://www.google.com/maps/search/?api=1&query=" + lat + "," + lon;

            document.getElementById("ubicacion").value = enlace;

            document.getElementById("estadoGPS").innerText =
                "✅ Ubicación obtenida correctamente.";

        },

        function() {

            document.getElementById("estadoGPS").innerText =
                "❌ No fue posible obtener la ubicación.";

        }

    );

}
