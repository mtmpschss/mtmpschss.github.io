'use strict';

var submitButton = document.getElementById("formularz").children[4];
var firstName = document.getElementById("formularz").children[0];
var lastName = document.getElementById("formularz").children[2];



function pobierzDane(e){
    e.preventDefault();
    console.log("Imię: " + firstName.value + ", nazwisko: " + lastName.value);
}

submitButton.addEventListener('click', pobierzDane);