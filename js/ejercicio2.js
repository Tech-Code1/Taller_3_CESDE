//Seleccionamos las etiquetas
let inputPeso = document.getElementById("peso")
let inputAltura = document.getElementById("altura")
let btnCalcularImc = document.getElementById("btnCalcularImc")
let contentImc = document.getElementById("contentImc")
let contentClasificacion = document.getElementById("contentClasificacion")
let imc = document.getElementById("imc")
let clasificacion = document.getElementById("clasificacion")
let aviso = document.getElementById("aviso")

aviso.textContent = "Por favor digitar tus datos para que pueda funcionar el programa"
aviso.classList.add("aviso-red")

//2. Configuro mi escuchdor de eventos de click sobre el botón calcular
btnCalcularImc.addEventListener("click", calcularIMC)

//3. Crear la función encargada de activarse al momento de hacer click en el botón

function calcularIMC() {
    let peso = Number (inputPeso.value)
    let altura = Number (inputAltura.value)

    let totalCalculo = Number (peso / (altura * altura)).toFixed(2)

    console.log(totalCalculo)

    console.log(peso);
    console.log(altura);

    if (totalCalculo < 18.5 && totalCalculo > 0) {
        clasificacion.textContent = "Peso insuficiente"
        imc.textContent = totalCalculo
        contentClasificacion.classList.remove("danger-clasificacion")
        contentClasificacion.classList.remove("orange-clasificacion")
        contentClasificacion.classList.remove("green-clasificacion")
        contentClasificacion.classList.add("yellow-clasificacion")
        contentImc.classList.remove("d-none")
        contentClasificacion.classList.remove("d-none")
        contentImc.classList.add("d-flex")
        contentClasificacion.classList.add("d-flex") 
        aviso.textContent = "El calculo se ha realizado con exito"
        aviso.classList.remove("aviso-red")
        aviso.classList.add("aviso-green")

    } else if (totalCalculo >= 18.5 && totalCalculo <= 24.9) {
        clasificacion.textContent = "Normopeso"
        imc.textContent = totalCalculo
        contentClasificacion.classList.remove("danger-clasificacion")
        contentClasificacion.classList.remove("orange-clasificacion")
        contentClasificacion.classList.remove("yellow-clasificacion")
        contentClasificacion.classList.add("green-clasificacion")
        contentImc.classList.remove("d-none")
        contentClasificacion.classList.remove("d-none")
        contentImc.classList.add("d-flex")
        contentClasificacion.classList.add("d-flex") 
        aviso.textContent = "El calculo se ha realizado con exito"
        aviso.classList.remove("aviso-red")
        aviso.classList.add("aviso-green")

    } else if  (totalCalculo >= 25 && totalCalculo <= 26.9) {
        clasificacion.textContent = "Sobrepeso grado I"
        imc.textContent = totalCalculo
        contentClasificacion.classList.remove("danger-clasificacion")
        contentClasificacion.classList.remove("green-clasificacion")
        contentClasificacion.classList.remove("yellow-clasificacion")
        contentClasificacion.classList.add("orange-clasificacion")
        contentImc.classList.remove("d-none")
        contentClasificacion.classList.remove("d-none")
        contentImc.classList.add("d-flex")
        contentClasificacion.classList.add("d-flex") 
        aviso.textContent = "El calculo se ha realizado con exito"
        aviso.classList.remove("aviso-red")
        aviso.classList.add("aviso-green")

    } else if (totalCalculo >= 27 && totalCalculo <= 29.9) {
        clasificacion.textContent = "Sobrepeso grado II (preobesidad)"
        imc.textContent = totalCalculo
        contentClasificacion.classList.remove("danger-clasificacion")
        contentClasificacion.classList.remove("green-clasificacion")
        contentClasificacion.classList.remove("yellow-clasificacion")
        contentClasificacion.classList.add("orange-clasificacion")
        contentImc.classList.remove("d-none")
        contentClasificacion.classList.remove("d-none")
        contentImc.classList.add("d-flex")
        contentClasificacion.classList.add("d-flex") 
        aviso.textContent = "El calculo se ha realizado con exito"
        aviso.classList.remove("aviso-red")
        aviso.classList.add("aviso-green")

    } else if (totalCalculo >= 30 && totalCalculo <= 34.9) {
        clasificacion.textContent = "Obecidad de tipo I"
        imc.textContent = totalCalculo
        contentClasificacion.classList.remove("danger-clasificacion")
        contentClasificacion.classList.remove("green-clasificacion")
        contentClasificacion.classList.remove("yellow-clasificacion")
        contentClasificacion.classList.add("orange-clasificacion")
        contentImc.classList.remove("d-none")
        contentClasificacion.classList.remove("d-none")
        contentImc.classList.add("d-flex")
        contentClasificacion.classList.add("d-flex") 
        aviso.textContent = "El calculo se ha realizado con exito"
        aviso.classList.remove("aviso-red")
        aviso.classList.add("aviso-green")

    } else if (totalCalculo >= 35 && totalCalculo <= 39.9) {
        clasificacion.textContent = "Obecidad de tipo II"
        imc.textContent = totalCalculo
        contentClasificacion.classList.remove("green-clasificacion")
        contentClasificacion.classList.remove("yellow-clasificacion")
        contentClasificacion.classList.remove("orange-clasificacion")
        contentClasificacion.classList.add("danger-clasificacion")
        contentImc.classList.remove("d-none")
        contentClasificacion.classList.remove("d-none")
        contentImc.classList.add("d-flex")
        contentClasificacion.classList.add("d-flex") 
        aviso.textContent = "El calculo se ha realizado con exito"
        aviso.classList.remove("aviso-red")
        aviso.classList.add("aviso-green")

    } else if (totalCalculo >= 40 && totalCalculo <= 49.9) {
        clasificacion.textContent = "Obecidad de tipo III (Mórbida)"
        imc.textContent = totalCalculo
        contentClasificacion.classList.remove("green-clasificacion")
        contentClasificacion.classList.remove("yellow-clasificacion")
        contentClasificacion.classList.remove("orange-clasificacion")
        contentClasificacion.classList.add("danger-clasificacion")
        contentImc.classList.remove("d-none")
        contentClasificacion.classList.remove("d-none")
        contentImc.classList.add("d-flex")
        contentClasificacion.classList.add("d-flex") 
        aviso.textContent = "El calculo se ha realizado con exito"
        aviso.classList.remove("aviso-red")
        aviso.classList.add("aviso-green")

    } else if (totalCalculo >= 40 && totalCalculo <= 49.9) {
        clasificacion.textContent = "Obecidad de tipo IV (Extrema)"
        imc.textContent = totalCalculo
        contentClasificacion.classList.remove("green-clasificacion")
        contentClasificacion.classList.remove("yellow-clasificacion")
        contentClasificacion.classList.remove("orange-clasificacion")
        contentClasificacion.classList.add("danger-clasificacion")
        contentImc.classList.remove("d-none")
        contentClasificacion.classList.remove("d-none") 
        contentImc.classList.add("d-flex")
        contentClasificacion.classList.add("d-flex") 
        aviso.textContent = "El calculo se ha realizado con exito"
        aviso.classList.remove("aviso-red")
        aviso.classList.add("aviso-green")

    } else if(totalCalculo > 49.9 && totalCalculo != Infinity) {
        clasificacion.textContent = "Has roto la bascula"
        contentClasificacion.classList.remove("green-clasificacion")
        contentClasificacion.classList.remove("yellow-clasificacion")
        contentClasificacion.classList.remove("orange-clasificacion")
        contentClasificacion.classList.add("danger-clasificacion")
        contentClasificacion.classList.remove("d-none")
        contentClasificacion.classList.add("d-flex")
        contentImc.classList.add("d-none")
        aviso.textContent = "¡ Debes de visitar un medico cuanto antes !"
        aviso.classList.add("aviso-red")
        aviso.classList.remove("aviso-green")

    } else if(totalCalculo == Infinity) {
        aviso.textContent = "El programa no puede dividir por 0"
        aviso.classList.add("aviso-red")
        aviso.classList.remove("aviso-green")

    } else {
        aviso.textContent = "Los valores que has ingresado no son correctos"
        aviso.classList.add("aviso-red")
        aviso.classList.remove("aviso-green")
        contentImc.classList.remove("d-flex")
        contentClasificacion.classList.remove("d-flex")
        contentImc.classList.add("d-none")
        contentClasificacion.classList.add("d-none") 
        infinity()
    }
}
