let copiado1 = document.getElementById("copiar1")
let copiado2 = document.getElementById("copiar2")
let limpieza1 = document.getElementById("limpiar1")
let limpieza2 = document.getElementById("limpiar2")

/*Creamos la variable para el id del input y lo igualamos a "" pa que se borre
luego ya igualamos la variable del boton de limpiar con la funcion de limpiar*/
function limpiar1(){
    let texto1 = document.getElementById("recuadro1")
    texto1.value = ""
}

limpieza1.onclick = limpiar1

/*Facil y sencillo creamos las dos variables asignandoles el id de los inputs
y luego igualamos valores
Y para finalizar igualamos la variable del boton con la funcion 
*/
function copiar1(){
    let texto1 = document.getElementById("recuadro1")
    let texto2 = document.getElementById("recuadro2")
    texto1.value = texto2.value
}

copiado1.onclick = copiar1

function limpiar2(){
    let texto2 = document.getElementById("recuadro2")
    texto2.value = ""
}

limpieza2.onclick = limpiar2

/*Facil y sencillo creamos las dos variables asignandoles el id de los inputs
y luego igualamos valores
Y para finalizar igualamos la variable del boton con la funcion 
*/
function copiar2(){
    let texto1 = document.getElementById("recuadro1")
    let texto2 = document.getElementById("recuadro2")
    texto2.value = texto1.value
}

copiado2.onclick = copiar2
