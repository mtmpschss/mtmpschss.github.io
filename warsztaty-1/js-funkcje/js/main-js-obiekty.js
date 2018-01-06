 'use strict';
class Ogloszenie {   
    constructor( tytul,cena,opis ) {
        this.tytul = tytul;
        this.cena = cena;
        this.opis = opis;
    }
    
    pobierzTytul() {
        return this.tytul;
    }
    
    ustawCene( nowaCena ) {
        this.cena = nowaCena;
    }
}


var ogloszenie1 = new Ogloszenie("Rama łóżka", 500, "Dobra rama łóżka na sprzedaż");
ogloszenie1.ustawCene(1500);
//console.log(ogloszenie1);

var ogloszenie2 = new Ogloszenie( "Sweter na sprzedaż", 50, "Ciepły sweter w dobrej cenie" );
var tytul = ogloszenie2.pobierzTytul();
console.log(tytul);