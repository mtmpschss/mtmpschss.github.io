/*Kalkulator czasu podróży
1) funkcja 2 parametry: dystans w km i prędkowść w km/h
2) funkcja liczy i zwraca czas podróży
3) Wynik wyświetla w konsoli "Dystans pokonasz w 4h"
4) t = s/v
*/

'use strict';

function formatujCzas(czasPrzejazdu) {
    var sformatowanyCzas;
    var godziny = Math.floor(czasPrzejazdu);
    var minuty = (czasPrzejazdu - godziny) * 60;
    minuty = Math.floor(minuty);
    sformatowanyCzas = godziny + "h " + minuty + "min.";
    return sformatowanyCzas;
}


function czasPodrozy(dystans, predkosc) { 
    if(predkosc <= 0) {
        console.error("Błąd! Prędkość musi być większa od 0");
    }
    
    var czas = dystans / predkosc;
    return czas;
}

var czasPrzejazdu = czasPodrozy(200, 52);
console.log("Dystans pokonasz w "+ formatujCzas(czasPrzejazdu));

var czasPrzejazdu1 = czasPodrozy(100, 0);
console.log("Dystans pokonasz w "+ czasPrzejazdu1+"h");

//var czasPrzejazdu2 = czasPodrozy(600, 87);
//console.log("Dystans pokonasz w "+ czasPrzejazdu2+"h");
//
//var czasPrzejazdu3 = czasPodrozy(2004, 526);
//console.log("Dystans pokonasz w "+ czasPrzejazdu3+"h");