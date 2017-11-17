/*---------------------------------------------
Les Selecteur d'enfant en jQuery
----------------------------------------------*/

// Initialisation de jQuery
$(function(){
    // Les Flemmard.js
    function l(e){
        console.log(e);

    }

    // Je souhaite selectionner toutes mes divs
    l($('div'))
    // Je souhaite maintenant selectionner mon menu
    l($('nav'))

    // Je souhaite tous les elements descendant direct (ennfants) qui sont dans le menu .
    
    l($('nav').children())

    // Je souhaite parmi ces enfants, uniquement les élémens ul 
    l($('nav').children('ul'))

    // Je souhaite recupêrer tous les elements "li" de mon "ul"
    l($('nav').children('ul').find('li'))
    // Je souhaite recuperer  uniquement le 2eme élement de mes "li"
    l($('nav').children('ul').find('li').eq(1))

    // Je souhaite connaitre le voisin immediat de mon menu
    l($('nav').next())
    l($('nav').next().next())
    l($('nav').prev())

    // Les Parents
    l($('nav').parent())
});