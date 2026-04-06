const pantalla = document.getElementById("pantalla");
const botones = document.querySelectorAll(".botones button");

let operacion = "";

botones.forEach(boton => {
    boton.addEventListener("click", () => {
        const valor = boton.textContent;

        if (valor === "=") {
            try {
                operacion = eval(operacion);
                pantalla.textContent = operacion;
            } catch {
                pantalla.textContent = "Error";
                operacion = "";
            }
        } 
        else if (valor === "C") {
            operacion = "";
            pantalla.textContent = "0";
        } 
        else {
            operacion += valor;
            pantalla.textContent = operacion;
        }
    });
});