function verOpciones(producto) {
    let opcion = prompt(
        "🍗 " + producto +
        "\n\nSelecciona una opción:" +
        "\n1. 6 Alitas - $18.000" +
        "\n2. 12 Alitas - $32.000" +
        "\n3. 24 Alitas - $58.000"
    );

    if (opcion !== null) {
        alert("Elegiste la opción " + opcion);
    }
}
