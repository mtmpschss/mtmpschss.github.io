'use strict';



$(document).ready(function () {

    $("button").click(function () {

        $.getJSON("https://akademia108.pl/kurs-front-end/ajax/1-pobierz-dane-programisty.php", function (data) {

            $("#dane-programisty").html("<p></p>");
            $("p").text("Imię: " + data.imie + ", Nazwisko: " + data.nazwisko + ", Zawód: " + data.zawod + ", Firma: " + data.firma + ".")
        });
    });
});