/*-------------------------------------------------
                    Le DOM
                
--------------------------------------------------*/
/*
Le DOM est une interface de développement en JS pour HTML . 
Grâce au DOM , je vais etre en mesure d'acceder ou modifier mon html

L'objet "document" : c'est le point d'entrée vers mon contenu HTML ! 

Chaque page charger dans mon navigateur a un objet "document" . 
*/

// Comment puis- je faire pour recuperer les differents information de ma page HTML

/*----------------------------------------------
            document.getElementById
-------------------------------------------------------
document.getElementById() : C'et une fonction qui va permettre de récupérer un élément HTML
à partir de sont identifiant unique : ID


*/
let bonjour = document.getElementById("bonjour");
console.log(bonjour);

/*----------------------------------------------
            document.getElementByClassName
-------------------------------------------------------

document.getElementsByClassName() : C'est une fonction qui va permettre de récuperer un ou plusieurs éléments (une liste) HTML 
à partir de leur classe .
*/

var contenu = document.getElementsByClassName('contenu');
console.log(contenu);

// Me renvoi : un Tableau JS avec mes éléments HTML , ou encore autrement dit , une "Collection" d'éléments

/*----------------------------------------------
            document.getElementsByTagName
-------------------------------------------------------

document.getElementsByTagName() : C'est une fonction qui va permettre de récupérer un ou plusieurs éléments ( une liste HTML a partir de leur nom de balise)
*/

var span = document.getElementsByTagName("span");
console.log(span);
