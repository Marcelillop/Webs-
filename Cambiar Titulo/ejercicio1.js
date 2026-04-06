
let textocambiar = document.getElementById("cambiartxt")
function cambiar(){

    let texto1 = document.getElementById("textoo")
    let texto2 = document.getElementById("insertar")
    texto1.textContent = texto2.value
}

textocambiar.onclick = cambiar