'use strict';


var zaznaczonaZgodaNaWszystko = document.getElementById("wszystkie-zgody");

var zgodyRazem = document.querySelectorAll("input[type=checkbox]")[0];
var zgodyRazem2 = document.querySelectorAll("input[type=checkbox]")[1];

function checkboxState(e) {
    console.log(zaznaczonaZgodaNaWszystko);
    if (zaznaczonaZgodaNaWszystko.checked === true) {
        
        zgodyRazem.setAttribute("checked", "on");
        zgodyRazem2.setAttribute("checked", "on");
        zgodyRazem.setAttribute("disabled", "disabled");
        zgodyRazem2.setAttribute("disabled", "disabled");
    } else {
        zgodyRazem.removeAttribute("disabled", "disabled");
        zgodyRazem2.removeAttribute("disabled", "disabled");
        zgodyRazem.removeAttribute("checked", "on");
        zgodyRazem2.removeAttribute("checked", "on");

    }
}

zaznaczonaZgodaNaWszystko.addEventListener('change', checkboxState);

/*
var imieNazwisko = document.getElementById("name");
var adresEmail = document.getElementById("email");
var zgodaWymagana = document.getElementById("zgoda-marketingowa-1");
var przyciskWyslij = document.getElementById("wyslij");

function sprawdzDane(e) {
    
    if (imieNazwisko == "" || adresEmail == "" || zgodaWymagana.checked == false) {
        alert("Wprowadź wszystkie dane i wyraź zgodę marketingową!");
    }    
}

przyciskWyslij.addEventListener('click', sprawdzDane);*/