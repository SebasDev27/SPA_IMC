let peso
let altura
let imc

/*peso = prompt("ingresa tu peso(kg)")
altura = prompt("ingrese tu altura(metros)")*/

imc = peso / (altura*altura)

if (imc < 18.5) {
    console.log("estas delgado")
}else if (imc > 19 && imc < 24.9) {
    console.log("estas en un peso ideal")
}else if (imc > 25.0 && imc < 29.9){
    console.log("tienes sobre peso")
}else if (imc >30) {
    console.log("tienes obesidad")
}