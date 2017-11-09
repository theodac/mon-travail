/*--------------------------------------------------------
🙏🙏🙏🙏🙏🙏🙏Les Evenements🙏🙏🙏🙏🙏🙏🙏🙏
--------------------------------------------------------
Les evenements vont me permettre de declencher une fonction 
c'est a dire : une serie d'instructions suite a une action 
de mon utilisateur . 

Objectif : Etre en mesure de capturer ces evenements 
afin d'executer une fonction . 

Les Evenements lier a la : MOUSE (souris)

click : au clic sur un element
mouseenter : la souris passe au dessus de la zone qu'occupe un elements
mouseleave : la souris sort de cette zone

Les Evenements  lier au: Keyboard (clavie)
keydown: une touche du clavier est enfoncée
keyup : une touche a ete relachée . 

Les Evenements lier a : WINDOW ( Fenetre)
scroll : défilement de la fenetre
resize : redimensionnement de la fenetre

les Evenements : Form (Formulaire)
change : pour les éléments <input> , <select> et <textarea>
submit : a l'envoi (soumission) d'un formulaire 

Les Evenements : Document 

DOMContentLoaded : Executé lorsque le document HTML est completement chargé , sans attendre le css et les images

*/

/* ------------------------------------
      LES ECOUTEURS D'EVENEMENTS
--------------------------------------

Pour attacher un évènement à un élément, ou autrement dit,
pour déclarer un écouteur d'évènement qui se chargera de 
lancer une action, c'est une fonction pour un évènement
donné, je vais utiliser la syntaxe suivante :

*/

var p = document.getElementById('MonParagraphe');
console.log(p);

// -- Je souhaite que mon paragraphe soit rouge au clic de la souris

    // -- 1 : Je défini une fonction chargée d'executer cette action
    function changeColorToRed() {
        p.style.color = "red";
    }

    // -- 2 : Je déclare un écouteur qui se chargera d'appeler la fonction au déclenchement de l'évènement (click)
    p.addEventListener('click', changeColorToRed);
    
    /*--------------------------------------------------------
                    Exercice Pratique
                    A l'aide de javascript , créez un champ "input" type text avec un id unique
                    Afficher ensuite dans une alerte , la saisie de l'utilisateur
    ---------------------------------------------------------------------------------*/


// // Creation de la balise input
// var input = document.createElement('input');
// input.id = "Champs";


// document.body.appendChild(input);

// function MonChamps(){
//     alert (input.type);
// }
// input.addEventListener('change', MonChamps )
// console.log(MonChamps)

// Correction
var input = document.createElement('input');


input.setAttribute('type','text')
input.setAttribute('placeholder','Saisissez votre contenu');

input.id="MonInput";

document.body.appendChild(input);

function MonChamps(){
    alert(input.value);

}
input.addEventListener('change',MonChamps)