//Seleccionamos las etiquetas
let inputHoras = document.getElementById("inputHoras");
let btnCalcular = document.getElementById("btnCalcular")
let parrafo= document.getElementById("parrafo")

//2. Configuro mi escuchdor de eventos de click sobre el botón calcular
btnCalcular.addEventListener("click", calcularGanancia)

//3. Crear la función encargada de activarse al momento de hacer click en el botón
function calcularGanancia() {
    let horas = Number(inputHoras.value)


    if (horas <= 40 && horas >=1) {
        /* console.log(horas * 20000) */
        parrafo.textContent = `Tu sueldo semanal es de:  ${horas * 20000}`
        parrafo.classList.add("correct")
        parrafo.classList.remove("error")

    } else if (horas > 40) {
        /* console.log((horas -40) * 25000 +800000); */
        parrafo.textContent = `Tu sueldo semanal es de: ${(horas -40) * 25000 +800000}`
        parrafo.classList.add("correct")
        parrafo.classList.remove("error")

    } else {
       /*  console.log("Las horas digitadas son incorrectas"); */
        parrafo.textContent = "Las horas digitadas son incorrectas"
        parrafo.classList.add("error")
        parrafo.classList.remove("correct")
    }
}

/* console.log(inputHoras);
console.log(btnCalcular); */