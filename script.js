function verOpciones(producto){

    document.getElementById("ventanaMenu").style.display="flex";
    document.getElementById("tituloProducto").innerHTML=producto;

    if(producto=="Alitas de Pollo"){
        document.getElementById("imagenProducto").src="https://images.unsplash.com/photo-1567620832903-9fc6debc209f?w=600";
    }

}
