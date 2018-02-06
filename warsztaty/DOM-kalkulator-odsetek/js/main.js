'use strict';

function oblicz() {
    
var wplata = parseInt(document.getElementById("wplata").value);
var iloscLat = parseInt(document.getElementById("ilosc-lat").value);
var okresKapitalizacji = parseInt(document.getElementById("okres-kapitalizacji").value);
var oprocentowanie = parseInt(document.getElementById("oprocentowanie").value) / 100;    
var podatek = document.getElementById("podatek").checked;

    var wynik = obliczZyski(wplata, iloscLat, okresKapitalizacji, oprocentowanie, podatek);
    
    
    document.getElementById("wynik").innerHTML = wynik.toFixed(2);
    
    console.log(oprocentowanie)

};


function obliczZyski(wplata, iloscLat, okresKapitalizacji, oprocentowanie, podatek)     
 {   if (podatek) {
        var oprocentowanieOpodatkowane = oprocentowanie * 0.81;
    } else {
        var oprocentowanieOpodatkowane = oprocentowanie;
    }
    
    var kapital = wplata * (Math.pow((1 + (oprocentowanieOpodatkowane / okresKapitalizacji)), iloscLat * okresKapitalizacji));
  
  return kapital;
 }



document.getElementById("licz").onclick = oblicz;