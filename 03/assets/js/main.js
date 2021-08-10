/*
3. Crear un programa que pida al usuario ingresar la temperatura en grados Celsius y            
  que la transforme a grados Kelvin y Fahrenheit.
*/

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



function fahrenheit(valor){  
    var fahrenheit = (valor * 1.8) + 32;
    document.getElementById("fahrenheit").value = fahrenheit.toFixed(1);
}

function kelvin(valor){
    var kelvin = valor - 273.15
    document.getElementById("kelvin").value = kelvin.toFixed(1);
}


















