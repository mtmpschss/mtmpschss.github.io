    'use strict';

var tablica = [5, 35, 67, 86, 93, 76, 37, 53, 78, 45];

function dodawanie(arr) {

    
    var suma = 0;
    
    for (var i = 0; i < arr.length; i++) {
        suma += arr[i];
    }
    
    return suma;
}

var wynik = dodawanie(tablica);

console.log(wynik);