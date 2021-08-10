// Inicializar la variable con el valor 0
let sum = 0;
// "document.write escribe en el archivo html"
document.write('<div class="container">')
document.write('<table class="table m-3">')
document.write('<thead">')
    document.write('<tr>')
        document.write('<th scope="col">N° 1</th>')
        document.write('<th scope="col">N° 2</th>')
        document.write('<th scope="col">N° 3</th>')
        document.write('<th scope="col">N° 4</th>')
        document.write('<th scope="col">N° 5</th>')
        document.write('<th scope="col">Suma</th>')
        document.write('<th scope="col">Promedio</th>')
    document.write('</tr>')
document.write('</thead>')
document.write('<tbody>')
    document.write('<tr>')
    // ciclo para pedir 5 numeros por pantalla
    for(i = 0; i < 5 ; i++){
        let num = parseInt(prompt("ingresa numero:"))
        // acumular el numero ingresado por pantalla en la variable "sum"
        sum += num
        document.write('<td>'+num+'</td>')
    }
    // calcular promedio
    let prom = sum / 5;
    document.write('<td>'+sum+'</td>')
    document.write('<td>'+prom.toFixed(2)+'</td>')
document.write(' </tr>')
document.write('</tbody>')
document.write('</table>')
document.write(' </div>')
