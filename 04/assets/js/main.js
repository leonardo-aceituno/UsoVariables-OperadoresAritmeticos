// Declaración de la función "valideKey"
function valideKey(evt) {
    // event.which
    // Devuelve el keyCode de la tecla presionada, o el codigo del caracter (charCode) de la tecla alfanumerica presionada.

    //  código es la representación decimal ASCII de la tecla presionada.
    var code = (evt.which) ? evt.which : evt.keyCode;

    if (code == 8) { // backspace.
        return true;
    } else if (code >= 48 && code <= 57) { // el ASCII de los numeros estan dentro de este rango
        return true;
    } else { // other keys.
        return false;
    }
}

function calcular() {

    let num = parseInt(document.getElementById("numero").value);
    let year = Math.floor(num / 365);
    let rest_year = num % 365;

    if (year > 0) {
        document.getElementById("year").value = year;

        if (rest_year >= 7) {
            let week = Math.floor(rest_year / 7);
            let rest_week = rest_year % 7;

            document.getElementById("week").value = week;
            document.getElementById("day").value = rest_week;
        }else{
            document.getElementById("week").value = 0;
            document.getElementById("day").value =rest_year;
        }
    } else if (num >= 7) {
        let week = Math.floor(num / 7);
        let rest_week = rest_year % 7;

        document.getElementById("week").value = week;
        document.getElementById("day").value = rest_week;
    }else {
        document.getElementById("year").value = 0;
        document.getElementById("week").value = 0;
        document.getElementById("day").value = num;
    }
}

// let year = Math.floor(num / 365);
// let rest_year = num % 365;


// if (year > 0) {
//     console.log("años :" + year);

//     if (rest_year >= 7) {
//         let week = Math.floor(rest_year / 7);
//         let rest_week = rest_year % 7;

//         console.log("semanas :" + week);
//         console.log("dias :" + rest_week);
//     }
// } else if (num >= 7) {
//     let week = Math.floor(num / 7);
//     let rest_week = rest_year % 7;

//     console.log("años :" + year);
//     console.log("semanas :" + week);
//     console.log("dias :" + rest_week);

// }







// if (num >= 365) {
//     var anio = Math.floor(num / 365);
//     var resto = num % 365;
//     console.log("años :" + anio);
//     // console.log("resto de dias :" + resto);

//     if (resto >= 7) {
//         var semana = Math.floor(resto / 7);
//         var resto_semana = resto % 7;
//         console.log("semanas :" + semana);

//         console.log("dias :" + resto_semana);

//     }else{
//         console.log("dias :" + resto);
//     }

// }else if()

// }