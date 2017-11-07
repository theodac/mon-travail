/*--------------------------------------------
    🤖🤖🤖🤖🤖Les Fonctions 🤖🤖🤖🤖🤖🤖
---------------------------------------------*/

//  Déclarer une fonction
// Cette Fonction ne retourne aucune valeur 

function ditBonjour() {
    // Lors de l'appel de cette fonction , les instructions ci-dessous seront executées ...
    alert("Bonjour !");
}

// Je vais appelez ma fonction "ditBonjour" et déclencher ses instructions 
ditBonjour();

// Déclarer une fonction qui prend une variable en parametre 
function Bonjour(Prenom, Nom) {
    document.write("<p>Hello <strong> " + Prenom + " " + Nom + "</strong> ! </p>");

}

// Appeler / utiliser une fonction avec des parametres 
Bonjour("Theo","DA COSTA");

var monPrenom = "Nathan";
var monNom    ="HEGO";

Bonjour(monPrenom,monNom);

/* ------------------------------------------------
Exercice : 
Créez une focntion permettant d'effectuer l'addition de deux nombres passés en paramètre
--------------------------------------------------------*/

function Addition(nb1,nb2) {
    return nb1 + nb2;
    
}
document.write("<p> " + Addition(10,5) + "</p>");