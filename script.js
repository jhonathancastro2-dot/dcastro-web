function verOpciones(producto) {

    let opcion = prompt(
        "🍗 " + producto +
        "\n\nSelecciona una opción:" +
        "\n1. 6 Alitas - $18.000" +
        "\n2. 12 Alitas - $32.000" +
        "\n3. 24 Alitas - $58.000"
    );

    if(opcion == "1"){
        window.open("https://wa.me/573206564360?text=Hola%20D'CASTRO,%20quiero%206%20Alitas%20BBQ");
    }

    else if(opcion == "2"){
        window.open("https://wa.me/573206564360?text=Hola%20D'CASTRO,%20quiero%2012%20Alitas%20BBQ");
    }

    else if(opcion == "3"){
        window.open("https://wa.me/573206564360?text=Hola%20D'CASTRO,%20quiero%2024%20Alitas%20BBQ");
    }

}
