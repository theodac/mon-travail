/*-------------------------------------------------
           La Disponibilite du DOM
A partir du moment ou mon DOM , c'est a dire l'ensemble de 
l'arborescence de ma page est completement charge 
, je peux commencer a utiliser jQuery

Je vais mettre l'ensemble de mon code dans une fonction,
cette fonction sera appelé AUTOMATIQUEMENT par jQuer , 
lorsque le DOM sera entierement defini

3 facons de faire :
-------------------------------------------------*/
jQuery(document).ready(function(){
    // Ici le DOM est entierement chargé je peux proceder a mon code JS.

});

// 2 eme possibilite , Remplacer jQuery par $ qui signifie tout deux la meme chose
$(document).ready(function(){
    // Ici le DOM est entierement chargé je peux proceder a mon code JS.
    
});
// 3 eme possibilite 
$(function(){
        // Ici le DOM est entierement chargé je peux proceder a mon code JS.
    alert("Bienvenu au cirque Painder")

    // EN JS : 
    document.getElementById('TexteEnJQuery').innerHTML="<strong>Mon Texte en JS </strong>"
    // en jquery les selecteurs sont les meme qu'en css
    $('#TexteEnJQuery').html("Mon text JQ !")
});