/*Aqui lo que hago es asginar a cada variable el valor de los botones*/

let textocambiar = document.getElementById("cambiartxt")
let textocolor = document.getElementById("colortxt")
let bordecolor = document.getElementById("borde")
let fondocolor = document.getElementById("fondo")


/*Función para cambiar el texto
Esto es sencillo creas dos variables uno para el texto que ya hay en la pagina
(En nuestro caso el h1 "TEXTO DEL DIV")
y el texto que nosotros vamos a insertar para remplazar el h1

*MUY IMPORTANTE*
Al tratarse de un h1 hay que utilizar el text.Content ya que con el .value 
no funcionaria ya que no se trata de un input
con el texto2 en este caso si qye aplicamos .value ya que es un input.

Para finalizar igulamos la variable del boton para cambiar el texto con la funcion
para asi al hacer click (con el .onclick) se realizce la funcion 
*/
function cambiar(){

    let texto1 = document.getElementById("texto")
    let texto2 = document.getElementById("insertar")
    texto1.textContent = texto2.value
}

textocambiar.onclick = cambiar

/*Función para cambiar el color del texto 
Basicamente lo que hago es crear una variable para el texto asignadole el id del texto
y creo la variable color asignandole el valor del boton color del texto "colorTexto"
*IMPORTANTE*
hay que hacer esto para que el se asigne el color: 
nombre_de_la_variable.style.color = variable_del_color
ya que estamos igualando los valores para darle el valor del color seleccionado 
en el input

Y en la ultima linea hay que asignarle a la variable creada para el boton
del texto el onclick e igualarla a la funcion texto para que asi al realizar el click
se ejecute la funcion

No voy a escribir en lo demas pero para que os hagais una idea son los mismos pasos
solo que cambiando los nombres de los ids y las variables*/
function texto(){

    let texto1 = document.getElementById("texto")
    let color = document.getElementById("colorTexto").value
    
    texto1.style.color = color
}

textocolor.onclick = texto

function borde(){

    let borde1 = document.getElementById("recuadro")
    let color = document.getElementById("colorBorde").value
    
    borde1.style.borderColor = color
}

bordecolor.onclick = borde

function fondo(){

    let fondo1 = document.getElementById("recuadro")
    let color = document.getElementById("colorFondo").value

    fondo1.style.backgroundColor = color
}

fondocolor.onclick = fondo