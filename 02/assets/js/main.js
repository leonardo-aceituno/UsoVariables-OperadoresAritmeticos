// 2. Realizar operaciones con dos números.
// Pedir al usuario que ingrese dos números diferentes y mayores a cero. Para ambos
// números, calcular lo siguiente:
// ● Suma
// ● Resta
// ● División
// ● Multiplicac
// ● Módulo


'use strict'

// Declaración de la función "valideKey"
function valideKey(evt){
    // event.which
    // Devuelve el keyCode de la tecla presionada, o el codigo del caracter (charCode) de la tecla alfanumerica presionada.

    //  código es la representación decimal ASCII de la tecla presionada.
    var code = (evt.which) ? evt.which : evt.keyCode;
    
    if(code==8) { // backspace.
      return true;
    } else if(code>=48 && code<=57) { // el ASCII de los numeros estan dentro de este rango
      return true;
    } else{ // other keys.
      return false;
    }
}


// Ejecución de la función 
function todos() {
    // Ejecución de la función 
    suma();
    resta();
    multiplicacion();
    division();
    modulo();
}


// Declaración de la función "Suma"
function suma() {
    // Leer valor desde el html elemento con identificador "numero2"
    // guardar valor en una variable
    var numero1 = parseInt(document.getElementById("numero1").value);
    var numero2 = parseInt(document.getElementById("numero2").value);
    // realizar operacion entre las variables y guardar 
    var resultado = numero1 + numero2;
    // El resulltado de la operacion se envia 
    document.getElementById("resultado_suma").value = resultado;
}

function resta() {
    var numero1 = parseInt(document.getElementById("numero1").value);
    var numero2 = parseInt(document.getElementById("numero2").value);
    var resultado = numero1 - numero2;
    document.getElementById("resultado_resta").value = resultado;
}

function multiplicacion() {
    var numero1 = parseInt(document.getElementById("numero1").value);
    var numero2 = parseInt(document.getElementById("numero2").value);
    var resultado = numero1 * numero2;
    document.getElementById("resultado_multiplicacion").value = resultado;
}

function division() {
    var numero1 = parseInt(document.getElementById("numero1").value);
    var numero2 = parseInt(document.getElementById("numero2").value);
    var resultado = numero1 / numero2;
    document.getElementById("resultado_division").value = resultado.toFixed(2);
}

function modulo() {
    var numero1 = parseInt(document.getElementById("numero1").value);
    var numero2 = parseInt(document.getElementById("numero2").value);
    var resultado = numero1 % numero2;
    document.getElementById("resultado_modulo").value = resultado;
}