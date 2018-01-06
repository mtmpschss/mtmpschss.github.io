'use strict';

var imiona = ["Ula", "Mikołaj", "Maciej"];

/*imiona.forEach( function(elementImie) {
    console.log(elementImie);
});*/

for(var i=0; i<imiona.length; ++i) {
    console.log(imiona[i]);
}




//var buty = [
//    {id: 1, model: "Trampki CONCERTE", rozmiar: 36,},
//    {id: 4, model: "Trampki CONCERTE", rozmiar: 39,},
//    {id: 5, model: "Trampki CONCERTE", rozmiar: 40,},
//    {id: 6, model: "Tenisówki TRANS", rozmiar: 39,},
//];
//
//function filtrujButy( listaButow, szukanyRozmiar ) {
//    var przefiltrowaneModele = [];
//    
//    listaButow.forEach( function(elementTablicy) {
//        if(szukanyRozmiar == elementTablicy.rozmiar) {
//            przefiltrowaneModele.push( elementTablicy );
//        }
//    })
//    
//    /*for(var i=0; i<listaButow.length; ++i) {
//        if(szukanyRozmiar == listaButow[i].rozmiar) {
//            przefiltrowaneModele.push( listaButow[i] );
//        }
//    }*/
//    
//    return przefiltrowaneModele;
//}
//
//var przefiltrowaneWyniki = filtrujButy(buty, 39);
//console.log(przefiltrowaneWyniki);