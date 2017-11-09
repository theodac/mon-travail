/*---------------------------------------
🤑🤑🤑La Manipulation des contenu🤑🤑🤑
------------------------------------------*/
function l(e){
    console.log(e);
}

// Je souhaite récupérer mon lien comment proceder ?
var google = document.getElementById('google');
l(google);

//  Maintenant , je souhaite accéer aux informations de ce lien ... par exemple
// (Moyen d'acceder a differente balise html )
//  A : Le lien vers lequel pointe la balise
l("Le lien vers lequel pointe la balise est :")
l(google.href);

// B: L'ID de la  balise :
l("l'ID de la balise : ")
l(google.id)

// C : La Classe de la balise : 
l("La Classe de la balise : ")
l(google.className);

// D : Le Texte de la balise : 
l("Le Texte de la balise : ")
l(google.textContent);

// Maintenant, je souhaite modifier le contenu de mon lien !
// Comme une variable classique je vais simplement venir affecter une nouvelle valeur .
google.textContent = "Mon lien vers Google !";


/*---------------------------------------------
        Ajouter un Element dans ma page 
----------------------------------------------*/

// Nous allons utiliser 2 méthodes : 

//  1 la fonction document.createElement() va permettre de générer un nouvel éléments dans le DOM ; que je pourrais par la suite modifier avec les méthodes que nous venons de voir .

//  PS : Ce nouvel élément est placé en mémoire

// Definition de l'element
var span = document.createElement('span');

// Si je souhaite lui donner un ID
span.id =  "MonSpan" ;

// Si je souhaite lui attribuer du contenu ...
span.textContent = " Mon Beau Texte en JS !";

// La fonction appendChild() va permettre de rajouter un enfant à un élément du DOM
google.appendChild(span);

/* -------------------------------
            EXERCICE
En partant du travail déjà réalisé sur la page.
Créez directement dans la page une balise <h1></h1> ayant comme contenu : "Titre de mon Article".

Dans cette balise, vous créerez un lien vers une url de votre choix.

BONUS : Ce lien sera de couleur Rouge et non souligné.
-------------------------------- */

// var h1 = document.createElement('h1');
// google.href = "http://www.yahoo.fr"

// h1.style.color="red";
// google.style.textDecoration = 'none';
// h1.textContent= "Titre de mon Article !"


// l(h1.href);
// google.appendChild(h1)

// Correction
// Creation de la balise a 
var h1 = document.createElement('h1');

// Creation de la balise a 
var a = document.createElement('a');

// Je vais donner un titre a mon lien 
a.textContent = "Titre de mon Article";

// Je veux donner un lien a  mon lien
a.href="#";
// appendChild()

// Je met mon lien (a) dans mon h1
h1.appendChild(a);

// Je met mon h1 dans ma page
document.body.appendChild(h1);

//  Correction du Bonus 
// Je veux que mon lien soit en rouge
a.style.color = "red";

// Je veux que mon lien ne soit pas souligné
a.style.textDecoration = "none";


