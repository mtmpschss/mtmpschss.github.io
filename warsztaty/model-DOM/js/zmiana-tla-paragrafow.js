'use strict';


var red = document.getElementById("red");
var yellow = document.getElementById("yellow");
var button = document.getElementsByTagName("button")[0];

function zmianaKoloruTla(e) { 
    red.style.backgroundColor = "red";
        yellow.style.backgroundColor = "yellow";
    }

button.addEventListener('click', zmianaKoloruTla);

