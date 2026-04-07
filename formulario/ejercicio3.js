let capturar = document.getElementById("btn")
let radio = document.getElementById("radio")

function caja(){
    let texto = document.getElementById("texto").value
    let numero = document.getElementById("numero").value
    let contraseña = document.getElementById("contraseña").value
    let fecha = document.getElementById("fecha").value
    let hora = document.getElementById("hora").value
    let radio = document.getElementById("radio").checked
    let check = document.getElementById("check").checked
    let select = document.getElementById("opciones").value

    alert(
        "Esta página dice\n\n" +
        "TEXTO: " + texto + "\n" +
        "NUMERO: " + numero + "\n" +
        "PASSWORD: " + contraseña + "\n" +
        "FECHA: " + fecha + "\n" +
        "HORA: " + hora + "\n" +
        "RADIO: " + radio + "\n" +
        "CHECKBOX: " + check + "\n" +
        "SELECT: Opción " + select
    );

}

capturar.onclick = caja

function desahibilitar(){
    
    let radio = document.getElementById("radio").checked
    
    if (radio == true) {
        document.getElementById('radio').checked = false;
    }
    else{
        document.getElementById('radio').checked = true;
    }
}

radio.onclick = desahibilitar