let numeroPedido = parseInt(localStorage.getItem("numeroPedido")) || 1;
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
        <button onclick="agregarCarrito('Hamburguesa Clásica',15000)">🍔 Clásica - $15.000</button>

<button onclick="agregarCarrito('Hamburguesa Especial',18000)">🍔 Especial - $18.000</button>

<button onclick="agregarCarrito('Hamburguesa Doble',22000)">🍔 Doble - $22.000</button>
        `;
    }
if(producto=="Perros Calientes"){
    botones=`
    <button onclick="agregarCarrito('Perro Tradicional',10000)">🌭 Perro Tradicional - $10.000</button>

    <button onclick="agregarCarrito('Perro Especial',14000)">🌭 Perro Especial - $14.000</button>

    <button onclick="agregarCarrito('Perro Súper',18000)">🌭 Perro Súper - $18.000</button>
    `;
}
    if(producto=="Sandwiches"){
    botones=`
   <button onclick="agregarCarrito('Sándwich Cubano',13000)">🥪 Sándwich Cubano - $13.000</button>

<button onclick="agregarCarrito('Sándwich Especial',16000)">🥪 Sándwich Especial - $16.000</button>

<button onclick="agregarCarrito('Sándwich Doble',20000)">🥪 Sándwich Doble - $20.000</button>
    `;
}
    if(producto=="Salchipapas"){
    botones=`
   <button onclick="agregarCarrito('Salchipapa Personal',12000)">🍟 Salchipapa Personal - $12.000</button>

<button onclick="agregarCarrito('Salchipapa Especial',18000)">🍟 Salchipapa Especial - $18.000</button>

<button onclick="agregarCarrito('Salchipapa Mixta',25000)">🍟 Salchipapa Mixta - $25.000</button>
    `;
}
    if(producto=="Pollo Broaster"){
    botones=`
    <button onclick="agregarCarrito('1 Presa Broaster',5000)">🍗 1 Presa - $5.000</button>

<button onclick="agregarCarrito('2 Presas Broaster + Papas + Gaseosa',14000)">🍗 2 Presas + Papas + Gaseosa - $14.000</button>

<button onclick="agregarCarrito('4 Presas Broaster',20000)">🍗 4 Presas - $20.000</button>

<button onclick="agregarCarrito('Broaster Familiar',38000)">🍗 Broaster Familiar - $38.000</button>
    `;
}
    
    if (producto == "Bebidas") {
    botones = `
    <button onclick="agregarCarrito('Gaseosa Personal',3500)">🥤 Gaseosa Personal - $3.500</button>
    <button onclick="agregarCarrito('Agua',2000)">💧 Agua - $2.000</button>
    <button onclick="agregarCarrito('Jugo en Agua',6000)">🧃 Jugo en Agua - $6.000</button>
    <button onclick="agregarCarrito('Jugo en Leche',10000)">🥛 Jugo en Leche - $10.000</button>
    <button onclick="agregarCarrito('Limonada Natural',6000)">🍋 Limonada Natural - $6.000</button>
    <button onclick="agregarCarrito('Limonada Grande',12000)">🍋 Limonada Grande - $12.000</button>
    <button onclick="agregarCarrito('Milo',6000)">🍫 Milo - $6.000</button>
    <button onclick="agregarCarrito('Capuchino',7000)">☕ Capuchino - $7.000</button>
    `;
}
    
    if (producto == "Almuerzos") {
    botones = `
    <button onclick="agregarCarrito('Almuerzo del Día',10000)">🍛 Almuerzo del Día - $10.000</button>

<button onclick="agregarCarrito('Almuerzo Especial',15000)">🥩 Almuerzo Especial - $15.000</button>
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
let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

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
localStorage.setItem("carrito", JSON.stringify(carrito));
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
    localStorage.setItem("carrito", JSON.stringify(carrito));
    document.getElementById("contadorCarrito").innerText = "0";
    verCarrito();
}

function enviarCarritoWhatsApp() {

    if (carrito.length === 0) {
        alert("El carrito está vacío.");
        return;
    }

    let nombre = document.getElementById("nombreCliente").value.trim();
    let telefono = document.getElementById("telefonoCliente").value.trim();
    let domicilio = document.getElementById("domicilio").checked;

    let mensaje = "📦 *NUEVO PEDIDO D'CASTRO*%0A%0A";
    mensaje += "🧾 Pedido No. " + numeroPedido + "%0A";

    mensaje += "👤 Cliente: " + encodeURIComponent(nombre || "No especificado") + "%0A";
    mensaje += "📞 Teléfono: " + encodeURIComponent(telefono || "No especificado") + "%0A%0A";

    let total = 0;

    carrito.forEach(function(item) {

        let subtotal = item.precio * item.cantidad;

        mensaje += "• " + encodeURIComponent(item.nombre) +
                   " x" + item.cantidad +
                   " = $" + subtotal.toLocaleString("es-CO") + "%0A";

        total += subtotal;
    });

    if (domicilio) {

        let direccion = document.getElementById("direccion").value.trim();
        let referencia = document.getElementById("referencia").value.trim();
        let formaPago = document.getElementById("formaPago").value;
        let ubicacion = document.getElementById("ubicacion").value.trim();

        if (nombre === "") {
            alert("Ingrese el nombre del cliente.");
            return;
        }

        if (telefono === "") {
            alert("Ingrese el teléfono.");
            return;
        }

        if (direccion === "") {
            alert("Ingrese la dirección.");
            return;
        }

        mensaje += "%0A🏠 *DOMICILIO*%0A";
        mensaje += "📍 Dirección: " + encodeURIComponent(direccion) + "%0A";
        mensaje += "🏠 Referencia: " + encodeURIComponent(referencia || "No especificada") + "%0A";
        mensaje += "💳 Forma de pago: " + encodeURIComponent(formaPago) + "%0A";

        if (ubicacion !== "") {
            mensaje += "🗺️ Ubicación GPS:%0A" + encodeURIComponent(ubicacion) + "%0A";
        }

        mensaje += "🛵 Domicilio: $3.000%0A";
        total += 3000;
    }

    mensaje += "%0A💰 *TOTAL: $" + total.toLocaleString("es-CO") + "*";

    window.open(
        "https://wa.me/573206564360?text=" + mensaje,
        "_blank"
    );

    numeroPedido++;
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
function cambiarCantidad(nombre, cambio) {

    let item = carrito.find(p => p.nombre === nombre);

    if (!item) return;

    item.cantidad += cambio;

    if (item.cantidad <= 0) {
        carrito = carrito.filter(p => p.nombre !== nombre);
    }

    let cantidadTotal = 0;

    carrito.forEach(function(item) {
        cantidadTotal += item.cantidad;
    });

    document.getElementById("contadorCarrito").innerText = cantidadTotal;
localStorage.setItem("carrito", JSON.stringify(carrito));
    verCarrito();
}
