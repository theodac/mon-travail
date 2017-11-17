/*-------------------------
Les selecteur jQuery
-----------------------------*/

// Format : $('selecteur')
// En jQuery , tous les sélécteurs CSS sont disponibles ...

$(function(){
    // DOM READY ! 
    // LesFlemards.js
    function l(e){
        console.log(e);
    }
    // Selectionner les balises SPAN
    // Version Javascript :
    l(document.getElementsByTagName('span'));

    // Version jQuery :
    l($('span'));

    // Selectionner mon menu

    // Version Javascript
    l(document.getElementById('menu'));

    // Version jQuery
    l($('#menu'));


    // Selectionner une classe

    // Version Javascript
    l(document.getElementsByClassName('MaClasse'));
    l($('.MaClasse'));

    // Selectionner un Attribut

    l($("[href='https://www.google.fr']"));


});